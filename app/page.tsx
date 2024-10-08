"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { ImagesSliderDemo } from "@/components/ImageSlider"; // Pastikan ini ada
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useRouter } from 'next/navigation';

// Komponen Utama
export default function Home() {
  return (
    <div>
      <ImagesSliderDemo />
      <DateComponent />
      <GuestSpeaker />
      <CompanyParticipants />
    </div>
  );
}

// Tombol Event


// Komponen Slider Gamb

// Komponen Perusahaan Peserta
export function CompanyParticipants() {
  const logos = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
    "/logo6.png",
    "/logo7.png"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="text-center mt-16 px-4">
      <motion.h2 
        className="text-4xl font-bold text-yellow-500 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Company Participants
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {logos.map((logo, index) => (
          <motion.div 
            key={index} 
            className="p-8 bg-white shadow-lg rounded-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image 
              src={logo} 
              alt={`Logo ${index + 1}`} 
              width={200} 
              height={200} 
              className="mx-auto h-32 w-auto object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// Komponen Guest Speaker
export function GuestSpeaker() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="text-center mt-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 
        className="text-3xl font-semibold text-yellow-500"
        variants={itemVariants}
      >
        Guest Speaker
      </motion.h2>
      <motion.div 
        className="mt-8 mx-auto max-w-md"
        variants={itemVariants}
      >
        <motion.div 
          className="p-4 bg-white shadow-md rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image 
            src="/vina.png"
            alt="Vina Muliana" 
            width={300}
            height={300}
            className="mx-auto rounded-full object-cover"
          />
        </motion.div>
        <motion.p 
          className="mt-4 text-xl font-medium text-yellow-500"
          variants={itemVariants}
        >
          Vina Muliana
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

// Komponen Tanggal Event
export function DateComponent() {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-yellow-700 flex justify-center items-center h-24 flex-col">
      <h1 className="text-white text-xl font-semibold">1-3 September 2024</h1>
      <h1 className="text-white text-xl font-semibold">Gedung Kuliah Umum 2</h1>
      <h1 className="text-white text-xl font-semibold">Institut Teknologi Sumatera</h1>  
    </div>
  );
}
