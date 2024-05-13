import React from "react";
import { motion } from "framer-motion";

const LivePage = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen gap-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-4 text-center">
        Oops! 🛠️ Page Under Construction! 🚧
      </h1>
      <p className="text-gray-600 text-center">
        We're currently hammering away to bring you something amazing. Stay
        tuned!
      </p>
      <a
        href="/"
        className="h-fit w-fit px-6 py-3 w-32 border bg-blue-600 rounded-2xl text-white transition duration-300 ease-in-out hover:bg-blue-500"
      >
        Go Back Home
      </a>
    </motion.div>
  );
};

export default LivePage;
