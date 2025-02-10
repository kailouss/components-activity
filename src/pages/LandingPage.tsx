import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AvatarLanding from "../components/container/AvatarLanding";

const LandingPage = () => {
  return (
    <>
      <motion.div
        className="z-20 fixed inset-0 text-black h-screen overflow-hidden"
        initial={{ x: "-100%", opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute text-white border-black bg-black flex-col md:clip-path-slanted-left h-full md:w-2/3 w-full items-center flex justify-center md:items-start md:p-5 gap-y-4">
          <h1 className="text-5xl font-lexend font-bold">HELLO</h1>
          <p>Software Components</p>
          <Link to="/contents">
            <button className="border w-auto h-10 bg-blue-500 p-2 rounded-2xl hover:bg-blue-700 transition-all">
              Get Started+
            </button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="fixed inset-0 text-black h-screen"
        initial={{ x: "100%", opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="z-30 flex justify-end items-center bg-white h-screen text-black text-5xl">
          <AvatarLanding />
        </div>
      </motion.div>
    </>
  );
};

export default LandingPage;
