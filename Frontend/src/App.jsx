import { Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/feed" element={<Feed />} />
      {/* Default Route */}
      <Route path="/" element={<Home />} />
      {/* Unknown Routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
