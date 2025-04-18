import React from "react";
import { RiCss3Fill, RiDatabase2Fill, RiGithubFill, RiHtml5Fill, RiJavaFill, RiReactjsFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { motion } from "framer-motion";

const IconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
      <motion.div
          variants={IconVariant(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiHtml5Fill className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={IconVariant(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiCss3Fill className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={IconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <AiOutlineJavaScript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={IconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiNodejsLine className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={IconVariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-800" />
        </motion.div>
        <motion.div
          variants={IconVariant(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={IconVariant(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsFill className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={IconVariant(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiDatabase2Fill className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={IconVariant(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiGithubFill className="text-7xl text-red-600" />
        </motion.div>
        <motion.div
          variants={IconVariant(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavaFill className="text-7xl text-blue-600" />
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
