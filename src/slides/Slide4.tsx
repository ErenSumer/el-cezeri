import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Slide4 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const fps = 30;

    class Wave {
      constructor(
        public amplitude: number,
        public period: number,
        public phase: number,
        public verticalShift: number,
        public color: string
      ) {}

      draw(
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number,
        time: number
      ) {
        ctx.beginPath();
        ctx.moveTo(0, height / 2);

        for (let x = 0; x < width; x++) {
          const y =
            Math.sin((x / width) * this.period + this.phase + time * 0.2) *
              this.amplitude +
            Math.sin(time * 0.1) * this.verticalShift +
            height / 2;
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = this.color;
        ctx.stroke();
      }
    }

    const waves = [
      new Wave(30, 4, 0, 10, "rgba(0, 255, 0, 0.2)"),
      new Wave(20, 6, 1, 15, "rgba(0, 200, 0, 0.2)"),
      new Wave(40, 3, 2, 5, "rgba(0, 150, 0, 0.2)"),
    ];

    let time = 0;

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach((wave) =>
        wave.draw(ctx, canvas.width, canvas.height, time)
      );

      time += 0.05;
      setTimeout(() => requestAnimationFrame(animate), 1000 / fps);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative h-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-black filter blur-3xl opacity-50"></div>
      <canvas ref={canvasRef} className="absolute inset-0" />
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white border-opacity-30"
        >
          <h2 className="text-4xl font-bold mb-8 text-white text-center">
            Sonuç
          </h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-200 mb-6"
          >
            El-Cezeri, sadece İslam dünyasında değil, tüm dünya mühendislik
            tarihine katkıda bulunmuş bir isimdir. Otomasyon ve sibernetik
            alanında çığır açan icatları, modern mühendislik ve robotik
            teknolojisinin temelini atmıştır. Bugün, El-Cezeri'nin projeleri hem
            müzelerde sergilenmekte hem de bilim insanları ve mühendisler
            tarafından ilham kaynağı olarak kabul edilmektedir.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slide4;
