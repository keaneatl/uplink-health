import { StaticImageData } from "next/image";
import { Playfair_Display, Lato } from "next/font/google";

const playfair_display = Playfair_Display({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type Props = {
  cards: {
    image: StaticImageData;
    header: string;
  }[];
};

export default function ProblemCards({ cards }: Props) {
  return (
    <div className="flex flex-row h-[500px] px-5 gap-9 justify-between items-center overflow-x-scroll">
      {cards.map((card, index) => (
        <div
          key={index}
          className="rounded-2xl h-96 min-w-80 bg-cover"
          style={{ backgroundImage: `url(${card.image.src})` }}
        >
          {/* <Image src={card.image} alt={card.header} objectFit="cover" /> */}
          <div className="flex flex-row items-end pl-4 pb-4 text-white h-full">
            <div className="flex flex-col gap-2">
              <h1
                className={`${playfair_display.className} text-base font-bold`}
              >
                {card.header}
              </h1>
              <button
                className={`${lato.className} flex justify-center items-center text-sm text-white w-28 h-8 rounded-[50px] transition-all border-transparent bg-[#DD3B3B] hover:border-[#DD3B3B] hover:bg-white hover:text-[#DD3B3B]`}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
