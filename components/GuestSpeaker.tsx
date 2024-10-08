import { motion } from "framer-motion";
import Image from "next/image";

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