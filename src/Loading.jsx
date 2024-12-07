import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loadingbg from "./assets/loading-bg.jpg";
import "./App.css";
import { motion } from "framer-motion";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const buildVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariant = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: "100px", opacity: 0 }}
      transition={{ duration: 2, delay: 3}}
      className="loading overflow-hidden h-screen"
    >
      <div className="px-10 text-content mt-[20px] flex justify-between sm:px-2">
        <h1 className="font-main font-bold">ESSENTIA ENGINEERING</h1>
        <div className="loading-circle"></div>
      </div>
      <div className="h-screen flex items-end justify-center">
        {" "}
        <div className=" text-white text-center font-bold max-h-[1440px] sm:mb-8">
          <motion.div
            variants={buildVariant}
            initial="hidden"
            whileInView="show"
            viewport={{}}
            className="responsive-texts flex justify-center"
          >
            <motion.h1 variants={childVariant}>E</motion.h1>
            <motion.h1 variants={childVariant}>S</motion.h1>
            <motion.h1 variants={childVariant}>S</motion.h1>
            <motion.h1 variants={childVariant}>E</motion.h1>
            <motion.h1 variants={childVariant}>N</motion.h1>
            <motion.h1 variants={childVariant}>T</motion.h1>
            <motion.h1 variants={childVariant}>I</motion.h1>
            <motion.h1 variants={childVariant}>A</motion.h1>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loading;
