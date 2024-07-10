import { Playfair_Display, Lato } from "next/font/google";
import Image from "next/image";
import mastercard from "@/public/mastercard.png";
import amex from "@/public/amex.png";
import discover from "@/public/discover.png";
import visa from "@/public/visa.png";

const playfair_display = Playfair_Display({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function Footer() {
  return (
    <div className="flex justify-center w-screen ">
      <footer className="bg-[#191919] mb-4 text-white bottom-0 rounded-xl flex flex-col justify-center items-center py-14 w-11/12 h-[700px]">
        <svg
          width="92"
          height="102"
          viewBox="0 0 92 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-auto"
        >
          <path
            d="M0.375 0C11.9782 0 23.1062 4.53276 31.3109 12.6011C39.5156 20.6695 44.125 31.6125 44.125 43.0229V101.562H0.375V0Z"
            fill="#F6F6F6"
          />
          <path
            d="M69.75 54.0625C81.8312 54.0625 91.625 44.2687 91.625 32.1875C91.625 20.1063 81.8312 10.3125 69.75 10.3125C57.6688 10.3125 47.875 20.1063 47.875 32.1875C47.875 44.2687 57.6688 54.0625 69.75 54.0625Z"
            fill="#F6F6F6"
          />
          <path
            d="M91.625 57.8125C91.6254 63.5577 90.4941 69.2467 88.2956 74.5547C86.0972 79.8626 82.8746 84.6856 78.812 88.7482C74.7494 92.8108 69.9263 96.0335 64.6181 98.2322C59.3099 100.431 53.6206 101.562 47.875 101.562V57.8125H91.625Z"
            fill="#F6F6F6"
          />
        </svg>
        <div className="flex flex-col justify-center items-center p-0 gap-8">
          <div className="flex flex-col justify-center items-center p-0 gap-4">
            <h1 className={`font-bold text-2xl ${playfair_display.className}`}>
              Payment Methods
            </h1>
            <div className="flex flex-row items-center p-0 gap-2">
              <Image
                src={mastercard}
                alt="Mastercard Logo"
                width={70}
                height={70}
              />
              <Image src={visa} alt="Visa Logo" width={60} height={60} />
              <Image
                src={amex}
                alt="American Express Logo"
                width={60}
                height={60}
              />
              <Image
                src={discover}
                alt="Discover Logo"
                width={60}
                height={60}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center p-0 gap-4">
            <h1 className={`font-bold text-2xl ${playfair_display.className}`}>
              Our Site
            </h1>
            <ul className={`${lato.className} font-normal text-2xl opacity-80`}>
              <li>
                <h2>Home</h2>
              </li>
              <li>
                <h2>FAQs</h2>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center items-center p-0 gap-4">
            <h1 className={`font-bold text-2xl ${playfair_display.className}`}>
              About
            </h1>
            <ul
              className={`${lato.className} font-normal text-2xl opacity-80 text-center`}
            >
              <li>
                <h2>About Uplink Health Rx</h2>
              </li>
              <li>
                <h2>Terms and Conditions</h2>
              </li>
              <li>
                <h2>Privacy Policy</h2>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
