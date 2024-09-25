import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PopupCard from "../components/PopupCard";

interface Innovation {
  id: number;
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
}

const innovations: Innovation[] = [
  {
    id: 1,
    title: "Filli Su Saati",
    image: "/Filli-Su-Saati.jpg",
    shortDescription: "El-Cezeri'nin ünlü Filli Su Saati.",
    fullDescription:
      "Filli Su Saati El-Cezeri'nin en ünlü icatlarından biri, Filli Su Saati'dir. Bu saat, hem mühendislik harikası hem de estetik açıdan etkileyici bir eserdir. Su akışını kullanarak çalışan saat, farklı zaman dilimlerinde sesli uyarılar vererek zamanın geçtiğini bildirir. İçindeki mekanizmalar, saatin işleyişini su seviyesindeki değişikliklere göre düzenler. Bu saat, sadece teknik bir başarı değil, aynı zamanda dönemin sanatsal ve kültürel değerlerini de yansıtır.",
  },
  {
    id: 2,
    title: "Otomatik Abdest Alma Makinesi",
    image: "/otomatik-abdest.jpg",
    shortDescription: "El-Cezeri'nin otomatik abdest alma makinesi.",
    fullDescription:
      "El-Cezeri, suyun mekanik kullanımı üzerine yaptığı çalışmalarla tanınır. En dikkat çeken icatlarından biri, otomatik abdest alma makinesidir. Bu cihaz, suyu belirli bir miktarda ve uygun bir şekilde döken bir sistemle çalışır. El-Cezeri'nin bu projesi, günlük dini ritüellerin teknolojik bir çözümle nasıl kolaylaştırılabileceğine dair erken bir örnek sunar.",
  },
  {
    id: 3,
    title: "Otomatik Su Dağıtma Makinesi",
    image: "/hydraulic.jpg",
    shortDescription:
      "El-Cezeri'nin mühendislik harikası; Otomatik Su Dağıtma Sistemi.",
    fullDescription:
      "Otomatik Su Dağıtma Sistemi Su mühendisliği alanında yaptığı çalışmalar, El-Cezeri'nin başyapıtları arasında yer alır. Geliştirdiği su dağıtma sistemi, suyu belirli bir hizada ve miktarda dağıtmayı sağlayan mekanik bir düzenek içerir. Bu sistem, dönemin şehirlerinde su dağıtımını optimize etmek için kullanılabilecek bir prototip olarak görülüyordu.",
  },
];

const Slide3 = () => {
  const [selectedInnovation, setSelectedInnovation] =
    useState<Innovation | null>(null);
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
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-black opacity-50"></div>
      <canvas ref={canvasRef} className="absolute inset-0" />
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-4xl font-bold mb-8 text-white text-center">
          El-Cezeri'nin Projeleri
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {innovations.map((innovation) => (
            <motion.div
              key={innovation.id}
              variants={itemVariants}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-[10px] rounded-xl p-6 shadow-lg border border-white border-opacity-30 cursor-pointer"
              onClick={() => setSelectedInnovation(innovation)}
            >
              <img
                src={innovation.image}
                alt={innovation.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-semibold text-white mb-2">
                {innovation.title}
              </h3>
              <p className="text-gray-200">{innovation.shortDescription}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {selectedInnovation && (
        <PopupCard
          innovation={selectedInnovation}
          onClose={() => setSelectedInnovation(null)}
        />
      )}
    </div>
  );
};

export default Slide3;