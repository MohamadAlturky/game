import { Button } from "@/components/ui/button";
import { Play, Users, Trophy, Star, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, easeOut, Variants, RepeatType } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleStartGame = () => {
    navigate("/create-game");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  // Variants for floating SVGs
  const svgVariants: Variants = {
    initial: {
      y: "0%",
      x: "0%",
      opacity: 50,
    },
    animate: {
      y: ["0%", "10%", "-5%", "0%"], // Floating up and down
      x: ["0%", "5%", "-5%", "0%"], // Slight horizontal drift
      opacity: 1,
      scale: [0.8, 1.1, 0.9, 1], // Subtle scaling
      transition: {
        duration: Math.random() * 4 + 3,
        repeat: Infinity,
        repeatType: "reverse" as RepeatType,
        ease: "easeInOut",
        delay: Math.random() * 1,
      },
    },
  };

  // Reusable SVG component
  const FloatingSVG = ({ children, className, style }) => (
    <motion.div
      className={`absolute ${className}`}
      variants={svgVariants}
      initial="initial"
      animate="animate"
      style={style}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );

  return (
    <section className="gradient-main min-h-[70vh] flex items-center relative overflow-hidden">
      {/* Enhanced Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, Math.random() * 0.3 + 0.1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating SVGs representing information challenges */}
      <FloatingSVG 
        className="top-[10%] left-[5%] md:left-[15%] w-16 h-16 md:w-24 md:h-24 text-blue-300"
        style={{}}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-full h-full"
        >
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      </FloatingSVG> {/* Information/Question Mark */}

      <FloatingSVG 
        className="bottom-[15%] right-[5%] md:right-[15%] w-16 h-16 md:w-24 md:h-24 text-green-300"
        style={{}}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-full h-full"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
      </FloatingSVG> {/* Checkmark/Success */}

      <FloatingSVG 
        className="top-[25%] right-[10%] md:right-[20%] w-14 h-14 md:w-20 md:h-20 text-purple-300"
        style={{}}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-full h-full"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M8 13h8M8 17h8M8 9h4" />
        </svg>
      </FloatingSVG> {/* Document/Paper for challenges */}

      <FloatingSVG 
        className="bottom-[5%] left-[20%] md:left-[30%] w-12 h-12 md:w-16 md:h-16 text-yellow-300"
        style={{}}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-full h-full"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </FloatingSVG> {/* Star for achievements */}

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center text-white">
          {/* Main Logo with Enhanced Animation */}
          <motion.div
            variants={itemVariants}
            className="mt-12 mb-5"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-shadow mb-8 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white bg-size-200">
              عالم المعرفة
            </h1>
            {/* <motion.p
              className="text-xl md:text-2xl text-shadow opacity-90"
              whileHover={{ scale: 1.02 }}
            >
              الألعاب والمعلومات الممتعة
            </motion.p> */}
            <motion.p
              className="text-lg mt-2 opacity-80"
              whileHover={{ scale: 1.02 }}
            >
              اختبر معلوماتك واستمتع مع الأصدقاء
            </motion.p>
          </motion.div>

          {/* Enhanced Start Button */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Button
              size="lg"
              onClick={handleStartGame}
              className="bg-white text-primary hover:bg-gray-100 text-xl px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                whileHover={{ scale: 1.5 }}
              />
              <Play className="w-6 h-6 ml-2 animate-pulse" />
              إنشاء لعبة جديدة
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;