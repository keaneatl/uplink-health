import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import ExtremeRx from "@/public/Extreme Rx.png";
import Finasteride from "@/public/Finasteride.png";
import GenericCialis from "@/public/Generic Cialis.png";
import GenericViagra from "@/public/Generic Viagra.png";
import LightningRx from "@/public/Lightning Rx.png";
import ShredProtocol from "@/public/Shred Protocol.png";
import Testosterone from "@/public/Testosterone.png";

const IMAGES = [
  ExtremeRx,
  Finasteride,
  GenericCialis,
  GenericViagra,
  LightningRx,
  ShredProtocol,
  Testosterone,
];

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col justify-around items-center bg-gradient-to-b from-[#F6F6F626] to-[#5CECD340]">
      <Hero />
      <Carousel images={IMAGES} />
    </div>
  );
}
