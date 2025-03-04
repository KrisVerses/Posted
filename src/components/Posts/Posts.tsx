import React, { useState } from "react";
import mockData from "../../data/mockData.json";
import Masonry from "react-masonry-css";
import { MoodBoardData, Post } from "../../types/types";
import "../../styles/masonry.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const data: MoodBoardData = mockData;

export const Posts: React.FC = () => {
  const [filterTag, setFilterTag] = useState<string | null>(null);
  const navigate = useNavigate();

  const filteredPosts = filterTag
    ? data.posts.filter((post) => post.tags.includes(filterTag))
    : data.posts;

  const allTags = [...new Set(data.posts.flatMap((post) => post.tags))];
  // Define breakpoint columns for responsive masonry
  const breakpointColumnsObj = {
    default: 3, // Default number of columns on large screens
    1100: 3, // 3 columns for screens 1100px and wider
    700: 2, // 2 columns for screens 700px to 1099px
    500: 1, // 1 column for screens under 700px
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-8">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-column"
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              className="relative block rounded-2xl shadow-2xl overflow-hidden bg-gray-900 border border-gray-100/10 mb-8 cursor-pointer"
              onClick={() => navigate(`/post/${post.id}`)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px rgba(0, 0, 0, 0.2)",
                rotate: 2,
              }} // Use framer-motion for hover
              style={{ willChange: "transform, box-shadow" }} // Optimize for animations
            >
              <div className="p-6">
                <h2 className="text-xl text-white font-medium mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-300 line-clamp-3">
                  {post.content}
                </p>
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover mt-4 rounded-lg"
                  />
                )}
                <p className="text-xs text-gray-400 mt-2">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
              <div className="p-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-accents text-content px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};
