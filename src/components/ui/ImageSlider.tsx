import Image from "next/image";

const ImageSlider: React.FC = () => {
  return (
    <div className="relative w-full mx-auto h-full">
      <Image
        src="https://res.cloudinary.com/dj4jijw2a/image/upload/v1728896967/webphome_1_optimized_10_kcofi8.webp"
        alt="Hero Image"
        height={200}
        width={200}
        priority
        sizes="(max-width: 450px) 100vw, 450px"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default ImageSlider;
