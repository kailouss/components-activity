import { motion } from "framer-motion";
import { useState } from "react";

interface FloatingGreat {
  id: number;
  x: number;
  y: number;
}

const ContentsPage = () => {
  const [floatingGreat, setFloatingGreat] = useState<FloatingGreat[]>([]);

  const handleClick = () => {
    const id = Date.now();
    const x = Math.random() * window.innerWidth * 0.8;
    const y = Math.random() * window.innerHeight * 0.8;

    setFloatingGreat((prev) => [...prev, { id, x, y }]);

    setTimeout(() => {
      setFloatingGreat((prev) => prev.filter((text) => text.id !== id));
    }, 1500);
  };
  return (
    <motion.div
      className="bg-black fixed inset-0 w-full min-h-screen flex flex-col items-center justify-center text-white"
      initial={{ opacity: 1, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: "100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 border border-white rounded-2xl flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold">Contents Page</h1>
        <p>This is the contents page.</p>
        <button
          onClick={handleClick}
          className="border px-4 my-2 rounded-2xl bg-blue-500 hover:bg-blue-700 text-black transition-all active:scale-90"
        >
          Great!
        </button>
      </div>
      {floatingGreat.map((text) => (
        <motion.div
          key={text.id}
          className="absolute text-xl font-bold text-yellow-400"
          style={{ left: text.x, top: text.y }}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -50 }}
          transition={{ duration: 1.5 }}
        >
          Great! 👍
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ContentsPage;
