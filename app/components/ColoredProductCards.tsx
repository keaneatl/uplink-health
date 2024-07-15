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
    description: string;
    bgColor: string;
  }[];
};

export default function ColoredProductCards({ cards }: Props) {
  return (
    <div className="flex flex-row h-[500px] px-5 gap-9 justify-between items-center overflow-x-scroll"></div>
  );
}
