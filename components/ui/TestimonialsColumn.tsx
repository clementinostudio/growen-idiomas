"use client";
import React from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

export interface TestimonialType {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialType[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_7px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_14px_28px_rgba(0,0,0,0.08)] transition-shadow duration-300 w-full relative" 
                  key={i}
                >
                  {/* Quote icon */}
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-green-100" />
                  
                  {/* Profile section at top */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      <img
                        width={56}
                        height={56}
                        src={image}
                        alt={name}
                        className="h-14 w-14 rounded-full object-cover ring-2 ring-green-100 ring-offset-2"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-bold tracking-tight text-gray-900 text-lg">{name}</div>
                      <div className="text-green-600 tracking-tight text-sm font-medium">{role}</div>
                    </div>
                  </div>
                  
                  {/* Testimonial text */}
                  <div className="text-gray-600 leading-relaxed text-[15px]">
                    "{text}"
                  </div>
                  
                  {/* Stars rating */}
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
