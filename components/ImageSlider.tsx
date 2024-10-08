import { ImagesSlider } from "@/components/ui/images-slider"; 
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
const EventButton = () => {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push('/events')} 
      className="mt-9 px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white text-center rounded-full relative"
    >
      <span>Event Details →</span>
      <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
    </button>
  );
};
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
    { text: "Dengan" },
    { text: "Inspirasi" },
    { text: "Wujudkan" },
    { text: "Karier" },
    { text: "Berprestasi" }
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