"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";

type Props = {
  images: StaticImageData[];
};

export default function Carousel({ images }: Props) {
  const options = { loop: true };
  const slides = Array.from(Array(5).keys());

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ stopOnInteraction: false, delay: 2000 }),
  ]);

  return (
    <div className="flex flex-col items-center justify-center h-96">
      <section className="embla absolute text-center">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.map((image, index) => (
              <div
                className="embla__slide flex justify-center items-center"
                key={index}
              >
                <Image src={image} width={255} height={375} alt="Product" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="w-80 h-80 rounded-full bg-[#003B5B]"></div>
    </div>
  );
}
