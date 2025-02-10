import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="bg-black fixed inset-0 w-full min-h-screen flex flex-col items-center justify-center text-white"
      initial={{ opacity: 1, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: "100%" }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold ">About Page</h1>
      <p>This is the contents page.</p>
    </motion.div>
  );
};

export default AboutPage;
