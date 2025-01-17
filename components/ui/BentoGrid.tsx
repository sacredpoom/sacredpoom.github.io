'use client' 

import { useState } from "react";
import {IoCopyOutline } from "react-icons/io5"; // copy icon 
import Lottie from "react-lottie";              // Lottie for animations
import { cn } from "@/utils/cn";                // utility function for conditional classNames

import { BackgroundGradientAnimation } from "./GradientBg";  // background animation
import GridGlobe from "./GridGlobe";                         // Github Globe
import MagicButton from "./MagicButton";                     // MagicButton

import animationData from '@/data/confetti.json'  // confetti animation data

export const BentoGrid = ({
    className,
    children,
  }: {
    className?: string;
    children?: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
          // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
          "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
          className
        )}
      >
        {children}
      </div>
    );
  };
  
  // BentoGridItem component definition
  export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    img,
    imgClassName,
    titleClassName,
    spareImg,
  }: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
  }) => {
    const leftLists = ["React", "Next.js", "JavaScript"]; // SKILLS to edit
    const rightLists = ["MongoDB", "C++", "Angular"];   // SKILLS to edit
  
    const [copied, setCopied] = useState(false); // state to handle copy action
  
    // Lottie animation options
    const defaultOptions = {
      loop: copied,
      autoplay: copied,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    
    // Copy function - write email to clipboard
    const handleCopy = () => {
      const text = "JCVenesk@gmail.com";
      navigator.clipboard.writeText(text);
      setCopied(true);
    };
  
    return (
      <div
        className={cn(
          // Adjust card styling
          "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
          className
        )}
        style={{
          //   you can generate the color from here https://cssgradient.io/ GRADIENT BACKGROUND
          background: "rgb(27, 28, 28)",
          backgroundColor:
            "linear-gradient(90deg, rgba(27, 28, 28,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        {/* Image Containers (six of them) */}
        <div className={`${id === 6 && "flex justify-center"} h-full`}>
          <div className="w-full h-full absolute">
            {img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center ")}
              />
            )}
          </div>
          <div
            className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
              } `}
          >
            {spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                className="object-cover object-center w-full h-full"
              />
            )}
          </div>
          {id === 6 && (
            // Background animation on grid item 6
            <BackgroundGradientAnimation>
              {/*<div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> */}
            </BackgroundGradientAnimation>
          )}
  
          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}
          >
            {/* Description */}
            <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
              {description}
            </div>
            {/* Title */}
            <div
              className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
            >
              {title}
            </div>
  
            {/* GridGlobe component for card 2 */}
            {id === 2 && <GridGlobe />}
  
            {/* Tech stack list div for card 3*/}
            {id === 3 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                {/* tech stack lists */}
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                  {leftLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                      lg:opacity-100 rounded-lg text-center bg-[#298686]"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#298686]"></span>
                </div>
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                  <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#298686]"></span>
                  {rightLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                      lg:opacity-100 rounded-lg text-center bg-[#298686]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {/* Copy email button and animation for id 6 */}
            {id === 6 && (
              <div className="mt-5 relative">
                {/* button border magic from tailwind css buttons  */}
                <div
                  className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                    }`}
                >
                  {/* <img src="/confetti.gif" alt="confetti" /> */}
                  <Lottie options={defaultOptions} height={200} width={400} />
                </div>
  
                <MagicButton
                  title={copied ? "Email is Copied!" : "Copy my email address"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#161A31]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };