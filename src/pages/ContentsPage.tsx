import { motion } from "framer-motion";

const ContentsPage = () => {
  return (
    <motion.div
      className="bg-black fixed inset-0 w-full min-h-screen flex flex-col items-center justify-center text-white"
      initial={{ opacity: 1, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x: "100%" }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold">Contents Page</h1>
      <p>This is the contents page.</p>
    </motion.div>
  );
};

export default ContentsPage;
