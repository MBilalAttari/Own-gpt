"use client";
import React from "react";
import { GoPlus } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { MdMicNone } from "react-icons/md";
import { IoMdArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

const Input = ({ setInput, sendMessage, input, messages }) => {
  return (
    <div className={`w-full  flex fixed ${messages.length > 0 ? " bottom-6" : " bottom-30"} `}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
          setInput("");
        }}
        className="w-full flex justify-center items-center "
      >
        <div className="bg-white w-150 h-25 p-4 rounded-3xl  flex flex-col justify-between shadow-lg">
          <div>
            <input
              type="text"
              placeholder="Ask Loveable to create"
              className=" w-full outline-none"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </div>
          <div className="flex justify-between items-center mt-5">
            <div className="h-8 w-8 rounded-full border border-[#dbdbdb] flex justify-center items-center">
              <GoPlus className=" text-[#9E9E9E] " />
            </div>
            <div className="flex justify-center items-center gap-2">
              <p className="text-[#9E9E9E]">Build</p>
              <IoIosArrowDown className="text-[#9E9E9E]" />
              <MdMicNone className="text-[#9E9E9E] text-lg" />
              
                <motion.button
                  type="submit"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: input.trim() === "" ? 0.5 : 1 }}
                  transition={{ duration: 0.3 }}
                   className={`bg-black h-6 w-6 items-center justify-center text-white rounded-full flex ${input.trim() === "" ? "cursor-not-allowed" : "cursor-pointer"}`}

                >
                  {" "}
                  <IoMdArrowUp />
                </motion.button>
             
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Input;
