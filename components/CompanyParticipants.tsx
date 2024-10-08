import { motion } from "framer-motion";
import Image from "next/image";
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