import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F7F7FA] flex flex-col items-center justify-center px-6">
      {/* Heading */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
          What would you like to do?
        </h1>

        <p className="mt-5 text-lg text-gray-500 leading-relaxed">
          Choose an option below to get started with your community.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-14 flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl">
        {/* Feed Card */}
        <Link
          to="/feed"
          className="w-full max-w-md bg-[#F4F1FF] border border-[#DCD6FF] rounded-3xl p-8 flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-[#E6E0FF] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="#6D5EF5"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12m-12 5.25h12m-12 5.25h12M3.75 6.75h.008v.008H3.75V6.75zm0 5.25h.008v.008H3.75V12zm0 5.25h.008v.008H3.75v-.008z"
                />
              </svg>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-[#0F172A]">
                Go to Feed
              </h2>

              <p className="mt-2 text-gray-500 text-lg leading-relaxed max-w-xs">
                Explore posts and see what’s happening.
              </p>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#6D5EF5"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>

        {/* Create Post Card */}
        <Link
          to="/create-post"
          className="w-full max-w-md bg-[#F2FFFA] border border-[#CFF5E5] rounded-3xl p-8 flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-[#DDF9EC] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="#22A06B"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-[#0F172A]">
                Create Post
              </h2>

              <p className="mt-2 text-gray-500 text-lg leading-relaxed max-w-xs">
                Share your thoughts with the community.
              </p>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#22A06B"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Home;