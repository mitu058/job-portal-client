import React from "react";
import team1 from "../assets/photo-partenaires.png";
import team2 from "../assets/team2.jpg";
import { easeInOut, easeOut, motion } from "framer-motion";
const Header = () => {
  return (
    <div className="w-[70%] mx-auto">
      <div className="flex justify-between">
        <div className="space-y-3">
          <motion.h1
            transition={{
              duration: 3,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            animate={{ x: 50 }}
            className="text-4xl font-bold"
          >
            The{" "}
            <motion.span
              animate={{ color: ["#fe412f", "#3be5fe", "#ba2afe"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Easiest Way
            </motion.span>{" "}
            <br />
            to Get Your New Job
          </motion.h1>
          <p>
            Apply in just a few clicks by uploading your resume and submitting{" "}
            <br />
            your application directly to employers. Track your progress, <br />
            receive updates, and connect with top companies—all in one place.{" "}
          </p>
          <button className="btn btn-primary">Apply Now</button>
        </div>
        <div>
          <motion.img
            animate={{ y: [50, 70, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="w-96 rounded-lg"
            src={team1}
            alt=""
          />

          <motion.img
            animate={{ x: [150, 120, 150] }}
            transition={{ duration: 10, delay:5, repeat: Infinity }}
            className="w-80 rounded-lg"
            src={team2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
