"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image"; // Import Next Image component
import { ImagesSlider } from "@/components/ui/images-slider"; // Pastikan komponen ini benar-benar ada
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useRouter } from 'next/navigation';

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

// Tombol event
const EventButton = () => {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push('/events')} // Langsung panggil router.push
      className="mt-9 px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white text-center rounded-full relative"
    >
      <span>Event Details →</span>
      <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
    </button>
  );
};

export { EventButton };

// Slider gambar
export function ImagesSliderDemo() {
  const images = [
    "/home1.JPG",
    "/home2.JPG",
    "/home3.JPG",
    "/home4.JPG",
    "/home5.JPG",
    "/home6.JPG",
    "/home7.JPG",
    "/home8.JPG"
  ];
  
  const words = [
    {
      text: "Dengan",
    },
    {
      text: "Inspirasi",
    },
    {
      text: "Wujudkan",
    },
    {
      text: "Karier",
    },
    {
      text: "Berprestasi",
    },
  ];

  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <ImagesSlider className="h-[40rem]" images={images}>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex flex-col justify-center items-center mt-24 mb-12"
        >
          <TypewriterEffectSmooth className="text-yellow-500" words={words} />
          <EventButton />
        </motion.div>
      </ImagesSlider>
    </div>
  );
}

// Bagian "Company participants" dan logo

export function CompanyParticipants() {
  const logos = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
    "/logo6.png",
    "/logo7.png",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
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



export function GuestSpeaker() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
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

export function DateComponent() {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-yellow-700 flex justify-center items-center h-24 flex-col">
      <h1 className="text-white text-xl font-semibold">1-3 September 2024</h1>
      <h1 className="text-white text-xl font-semibold">Gedung Kuliah Umum 2</h1>
      <h1 className="text-white text-xl font-semibold">Institut Teknologi Sumatera</h1>  
    </div>
  );
}

