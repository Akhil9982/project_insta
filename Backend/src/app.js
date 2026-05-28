const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const uploadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  message: "Upload limit exceeded. Try again later.",
});

app.use(limiter);

const upload = multer({
  storage: multer.memoryStorage(),

  limits: {
    fileSize: 5 * 1024 * 1024,
  },

  fileFilter: (req, file, cb) => {
    const allowed = ["image/png", "image/jpeg", "image/webp"];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only PNG, JPEG and WEBP images are allowed"));
    }
  },
});
app.post(
  "/create-post",
  uploadLimiter,
  upload.single("image"),
  async (req, res) => {
    if (!req.body.caption || req.body.caption.trim().length < 3) {
      return res.status(400).json({
        message: "Caption must be at least 3 characters",
      });
    }
    if (!req.file) {
      return res.status(400).json({
        message: "Image is required",
      });
    }

    let result;
    try {
      result = await uploadFile(req.file.buffer);
    } catch (error) {
      return res.status(500).json({
        message: "Image upload failed",
        error: error.message,
      });
    }

    try {
      const post = await postModel.create({
        image: result.url,
        caption: req.body.caption,
      });

      return res.status(201).json({
        message: "Post created successfully.",
        post,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Failed to create post",
        error: error.message,
      });
    }
  },
);

app.get("/posts", async (req, res) => {
  try {
    const posts = await postModel.find();
    return res.status(200).json({
      message: "Posts fetched successfully",
      posts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch posts",
      error: error.message,
    });
  }
});
app.use((err, req, res, next) => {
  return res.status(400).json({
    message: err.message,
  });
});
module.exports = app;
