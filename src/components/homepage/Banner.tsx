import Image from "next/image";
import bannerImg from "@/assets/hero.png";
const Banner = () => {
  return (
    <div className="space-y-8 pt-8 bg-gray-100 rounded-lg shadow-md text-center">
      <h2 className="font-bold text-4xl">
        We Build <br /> <span className="text-purple-500">Productive</span> Apps
      </h2>
      <p className="max-w-175 mx-auto">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center items-center gap-2">
        <button className="btn btn-success">Google Play</button>
        <button className="btn btn-primary">App Store</button>
      </div>

      <Image src={bannerImg} alt="Hero Image" className="w-188 h-auto mx-auto" />
    </div>
  );
};

export default Banner;