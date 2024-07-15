import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import Finasteride2 from "@/public/finasteride-v2.png";
import { Lato, Playfair_Display } from "next/font/google";
import ProblemCards from "./components/ProblemCards";
import Image from "next/image";

import ExtremeRx from "@/public/Extreme Rx.png";
import Finasteride from "@/public/Finasteride.png";
import GenericCialis from "@/public/Generic Cialis.png";
import GenericViagra from "@/public/Generic Viagra.png";
import LightningRx from "@/public/Lightning Rx.png";
import ShredProtocol from "@/public/Shred Protocol.png";
import Testosterone from "@/public/Testosterone.png";
import ErectileDysfunction from "@/public/erectile-dysfunction.png";
import MensHairLoss from "@/public/mehs-hair-loss.png";
import Testosterone2 from "@/public/testosterone-problem.png";
import WeightLoss from "@/public/weight-loss.png";
import GenericCialis2 from "@/public/generic-cialis-v2.png";
import GeneriCViagra2 from "@/public/generic-viagra-v2.png";
import ProblemGettingHard from "@/public/problem-getting-hard.png";
import Testosterone3 from "@/public/testosterone-v3.png";
import ShredProtocol3 from "@/public/shred-protocol-v3.png";

const IMAGES = [
  ExtremeRx,
  Finasteride,
  GenericCialis,
  GenericViagra,
  LightningRx,
  ShredProtocol,
  Testosterone,
];

const CARDS = [
  {
    header: "Erectile Dysfunction",
    image: ErectileDysfunction,
  },
  {
    header: "Men's Hair Loss",
    image: MensHairLoss,
  },

  {
    header: "Testosterone",
    image: Testosterone2,
  },

  {
    header: "Weight Loss",
    image: WeightLoss,
  },
];

const lato = Lato({
  subsets: ["latin"],
  weight: ["700", "300", "400"],
});
const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

export default function Home() {
  return (
    <div>
      <div className="h-screen w-full flex flex-col justify-around items-center bg-gradient-to-b from-[#F6F6F626] to-[#5CECD340]">
        <Hero />
        <Carousel images={IMAGES} />
      </div>

      <div className="flex justify-center h-28 items-center bg-[#F6F6F6]">
        <p
          className={`${lato.className} font-bold text-center p-6 text-base text-[#003B5B]`}
        >
          Experience 100% online care with our US-based pharmacy and US-licensed
          physicians.
        </p>
      </div>

      <ProblemCards cards={CARDS} />

      <h1
        className={`${playfair_display.className} text-4xl h-28 flex justify-center items-start`}
      >
        Problem Getting Hard?
      </h1>

      <div
        className="flex flex-col px-5 justify-center rounded-2xl min-h-[600px] w-11/12 mx-auto bg-cover bg-right text-white gap-4"
        style={{ backgroundImage: `url(${ProblemGettingHard.src})` }}
      >
        <h1 className={`${playfair_display.className} font-black text-2xl`}>
          Erectile Dysfunction
        </h1>
        Uplink Health Rx makes treating erectile dysfunction simpler and easier!
        With Uplink Health Rx, you can go through every step of the process from
        the comfort of your home! Get evaluated by a US-licensed physician and
        have your medication delivered directly from the pharmacy, to your
        doorstep! 
      </div>

      {/* Colored Product Cards */}
      <div className="flex flex-col w-11/12 mx-auto gap-9 my-7 justify-between items-center overflow-x-scroll">
        {/* Colored Product Card 1*/}
        <div
          className="rounded-2xl min-w-80 h-[767px] bg-fixed bg-bottom md:bg-cover"
          style={{
            backgroundImage: `url(${GenericCialis2.src})`,
          }}
        >
          <div className="flex flex-row items-end pl-4 pb-4 text-white h-full">
            <div className="flex flex-col gap-2 px-4">
              <h1
                className={`${playfair_display.className} text-2xl font-bold`}
              >
                Generic Cialis
              </h1>
              <p className={`${lato.className} font-normal`}>
                Tadalafil, the generic counterpart Cialis, best known its 
                extended duration of effectiveness. While other E.D. medications
                typically last only a few hours, Tadalafil stands out, offering
                up to 36 hours of efficacy with just one tablet.
              </p>
              <button
                className={`${lato.className} flex justify-center items-center text-base text-white w-40 h-14 mt-2 rounded-[50px] transition-all border-transparent bg-[#DD3B3B] hover:border-[#DD3B3B] hover:bg-white hover:text-[#DD3B3B]`}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Colored Product Card 2*/}
        <div
          className="rounded-2xl min-w-80 h-[767px] bg-bottom bg-fixed md:bg-cover"
          style={{
            backgroundImage: `url(${GeneriCViagra2.src})`,
          }}
        >
          <div className="flex flex-row items-end pl-4 pb-4 h-full">
            <div className="flex flex-col gap-2 px-4 text-[#003B5B]">
              <h1
                className={`${playfair_display.className} text-2xl font-bold`}
              >
                Generic Viagra
              </h1>
              <p className={`${lato.className} text-black font-normal`}>
                Sildenafil Citrate is the generic counterpart of the well-known
                erectile dysfunction (E.D.) medication, Viagra. Our Sildenafil
                Citrate tablets contain the same potency and effectiveness as
                its brand-name counterpart, but without the expensive price tag.
              </p>
              <button
                className={`${lato.className} flex justify-center items-center text-base text-white w-40 h-14 mt-2 rounded-[50px] transition-all border-transparent bg-[#DD3B3B] hover:border-[#DD3B3B] hover:bg-white hover:text-[#DD3B3B]`}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-center items-center gap-8 justify-center p-4">
        <h1 className={`${playfair_display.className} font-bold text-4xl`}>
          Personalized treatment plan with our Custom Rx
        </h1>
        <p className={`${lato.className} font-normal text-2xl`}>
          Uplink Health Rx has brought together a global team of experts to
          develop groundbreaking custom medications specifically tailored for
          individuals who only want the best results possible. Total Male Rx’s
          custom medications are made to deliver more advanced results compared
          to traditional medication.
        </p>

        <button
          className={`${lato.className} flex justify-center items-center text-base text-white w-40 h-16 mt-2 rounded-[50px] transition-all border-transparent bg-[#DD3B3B] hover:border-[#DD3B3B] hover:bg-white hover:text-[#DD3B3B]`}
        >
          Get Started
        </button>
      </div>

      {/* Colored Product Cards 2 */}
      <div className="bg-[#F6F6F6] my-5 flex flex-row h-[700px] px-5 gap-9 items-center overflow-x-scroll md:justify-center">
        {/* Card 1 */}
        <div className="flex flex-col min-w-[300px] w-[300px] h-[500px] gap-2 lg:w-[400px]">
          <div className="flex py-8 justify-center rounded-xl bg-[#E0CF75] h-[200px] w-full">
            <Image
              src={ExtremeRx}
              alt="Extreme Rx"
              width={90}
              height={200}
              style={{ objectPosition: "20% 20%" }}
            />
          </div>
          <h1
            className={`${playfair_display.className} font-bold text-2xl text-[#003B5B]`}
          >
            Extreme Rx{" "}
          </h1>
          <p className={`${lato.className} font-normal text-base`}>
            Extreme Rx is a custom medication that incorporates enclomiphene, an
            advanced remedy designed to naturally elevate testosterone levels.
            This highly-specialized formulation is made to enhance strength,
            promote muscle growth, elevate libido, and positively impact mood.
          </p>

          <button
            className={`${lato.className} flex justify-center items-center text-base text-white w-40 h-14 mt-2 rounded-[50px] transition-all border-transparent bg-[#DD3B3B] hover:border-[#DD3B3B] hover:bg-white hover:text-[#DD3B3B]`}
          >
            Get Started
          </button>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col min-w-[300px] w-[300px] h-[500px] gap-2 lg:w-[400px]">
          <div className="flex py-8 justify-center rounded-xl bg-[#DF7E5B] h-[200px] w-full">
            <Image
              src={LightningRx}
              alt="Extreme Rx"
              width={90}
              height={200}
              style={{ objectPosition: "20% 20%" }}
            />
          </div>
          <h1
            className={`${playfair_display.className} font-bold text-2xl text-[#003B5B]`}
          >
            Lightning Rx{" "}
          </h1>
          <p className={`${lato.className} font-normal text-base`}>
            Lightning Rx is a specifically crafted troche medication
            incorporating three prominent active ingredients – Sildenafil,
            Tadalafil, and Oxytocin. Diverging from conventional ED medications
            requiring 45 minutes to an hour for efficacy, the Lightning Rx
            starts working in just 15 minutes and can maintain its effects for
            up to 36 hours.
          </p>

          <button
            className={`${lato.className} flex justify-center items-center text-base text-white w-40 h-14 mt-2 rounded-[50px] transition-all border-transparent bg-[#DD3B3B] hover:border-[#DD3B3B] hover:bg-white hover:text-[#DD3B3B]`}
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="w-full flex-col py-24 items-center justify-center px-10">
        <div className="flex flex-col text-center  mb-4 items-center gap-8 justify-center p-4">
          <h1
            className={`${playfair_display.className} text-[#003B5B] font-bold text-3xl`}
          >
            Real Solutions, Made Simple{" "}
          </h1>
          <p className={`${lato.className} font-normal text-base`}>
            Uplink Health Rx provides high-quality medication for the at-home
            treatment of androgenic alopecia, commonly known as male-pattern
            baldness.
          </p>
        </div>

        <Image
          src={Finasteride2}
          width={400}
          height={250}
          alt="Finasteride"
          className="rounded-xl mx-auto md:w-full"
        />

        <div className="flex flex-col gap-3 justify-center p-4">
          <h1
            className={`${playfair_display.className} text-[#003B5B] font-bold text-2xl`}
          >
            Finasteride
          </h1>
          <p className={`${lato.className} font-normal text-base`}>
            Finasteride is an FDA-approved pharmacological treatment designed to
            treat androgenic alopecia, often referred to as male-pattern hair
            loss. Its mechanism involves the inhibition of the androgen DHT,
            effectively slowing down hair loss and fostering the growth of
            strong and healthy hair.
          </p>

          <button
            className={`${lato.className} flex justify-center items-center text-base text-white w-40 h-14 mt-2 rounded-[50px] transition-all border-transparent bg-[#DD3B3B] hover:border-[#DD3B3B] hover:bg-white hover:text-[#DD3B3B]`}
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="h-[750px] py-12 bg-[#F6F6F6]">
        <h1
          className={`${playfair_display.className} text-[#003B5B] text-center font-bold text-4xl`}
        >
          Simple, Convenient, Affordable
        </h1>
        <div className="bg-[#F6F6F6] py-12 px-5 flex flex-row h-full w-full gap-9 overflow-x-scroll md:justify-center">
          {/* Card 1 */}
          <div className="flex flex-col min-w-[300px] w-[300px] h-full gap-2 lg:w-[400px]">
            <Image
              src={Testosterone3}
              alt="Testosterone"
              width={300}
              height={270}
              className="rounded-xl lg:w-[400px]"
            />
            <h1
              className={`${playfair_display.className} font-bold text-2xl text-[#003B5B]`}
            >
              An efficient testosterone-boosting medication
            </h1>
            <p className={`${lato.className} font-normal text-base`}>
              Enclomiphene, a nonsteroidal SERM (selective estrogen receptor
              modulator), contributes to elevating testosterone levels without
              the usual side effects linked to testosterone replacement therapy
              and anabolic steroids.
            </p>

            <button
              className={`${lato.className} flex justify-center items-center text-base text-white w-40 h-14 mt-2 rounded-[50px] transition-all border-transparent bg-[#DD3B3B] hover:border-[#DD3B3B] hover:bg-white hover:text-[#DD3B3B]`}
            >
              Get Started
            </button>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col min-w-[300px] w-[300px] h-full gap-2 lg:w-[400px]">
            <Image
              src={ShredProtocol3}
              alt="Shred Protocol"
              width={300}
              height={270}
              className="rounded-xl lg:w-[400px]"
            />
            <h1
              className={`${playfair_display.className} font-bold text-2xl text-[#003B5B]`}
            >
              top-notch weight loss medication
            </h1>
            <p className={`${lato.className} font-normal text-base`}>
              The Shred Compound combines Acarbose, Orlistat, and Naltrexone in
              an all-encompassing treatment designed to markedly enhance weight
              loss. This is accomplished by regulating blood glucose, reducing
              fat absorption, and curbing appetite.
            </p>

            <button
              className={`${lato.className} flex justify-center items-center text-base text-white w-40 h-14 mt-2 rounded-[50px] transition-all border-transparent bg-[#DD3B3B] hover:border-[#DD3B3B] hover:bg-white hover:text-[#DD3B3B]`}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col py-24 justify-center items-center">
        <h1
          className={`${playfair_display.className} text-[#003B5B] text-center font-bold text-4xl`}
        >
          Simple, Convenient, Affordable
        </h1>

        {/* Steps */}
        <div className="flex flex-col justify-center items-center gap-8 p-6">
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#003B5B" />
              <path
                d="M22.649 10.104V23.896C22.649 24.8347 22.8197 25.4747 23.161 25.816C23.5237 26.1573 24.121 26.328 24.953 26.328V27C24.5263 26.9787 23.897 26.9573 23.065 26.936C22.2543 26.8933 21.4117 26.872 20.537 26.872C19.449 26.872 18.393 26.8933 17.369 26.936C16.3663 26.9573 15.5877 26.9787 15.033 27V26.328C15.993 26.328 16.729 26.1573 17.241 25.816C17.7743 25.4533 18.041 24.7493 18.041 23.704V15.896C18.041 14.872 17.9557 14.1147 17.785 13.624C17.6143 13.1333 17.2943 12.8133 16.825 12.664C16.3557 12.5147 15.7157 12.44 14.905 12.44V11.736C16.7397 11.6933 18.2543 11.5547 19.449 11.32C20.665 11.0853 21.7317 10.68 22.649 10.104Z"
                fill="#F6F6F6"
              />
            </svg>

            <div className="flex flex-col items-center text-center gap-3 p-10 h-full min-w-[380px] max-w-[900px] bg-[#F6F6F6] rounded-3xl lg:flex-row lg:justify-center">
              <h1
                className={`${playfair_display.className} font-bold text-2xl`}
              >
                Select Your Treatment
              </h1>
              <p className={`${lato.className} font-bold text-base`}>
                Explore our diverse treatment options to discover the simplest,
                most convenient, and cost-effective solutions for typical
                men&apos;s health issues.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-8  lg:flex-row lg:justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#003B5B" />
              <path
                d="M20.175 11.008C21.8177 11.008 23.119 11.36 24.079 12.064C25.039 12.768 25.519 13.7707 25.519 15.072C25.519 15.904 25.3057 16.6613 24.879 17.344C24.4737 18.0267 23.9297 18.6773 23.247 19.296C22.5643 19.8933 21.8283 20.4587 21.039 20.992C20.271 21.5253 19.5243 22.0587 18.799 22.592C18.0737 23.104 17.455 23.6373 16.943 24.192H23.855C24.7297 24.192 25.2843 24.0853 25.519 23.872C25.7537 23.6587 25.9137 23.2853 25.999 22.752H26.671C26.671 24.1813 26.6817 25.2907 26.703 26.08C26.7243 26.8693 26.7563 27.5627 26.799 28.16C26.607 28.1173 26.255 28.0853 25.743 28.064C25.231 28.0427 24.6443 28.0213 23.983 28C23.3217 28 22.671 28 22.031 28H12.719V27.392C13.3163 26.752 14.0523 26.048 14.927 25.28C15.8017 24.512 16.655 23.6587 17.487 22.72C18.3403 21.7813 19.055 20.768 19.631 19.68C20.207 18.5707 20.495 17.3867 20.495 16.128C20.495 14.976 20.239 14.144 19.727 13.632C19.215 13.12 18.479 12.864 17.519 12.864C16.6017 12.864 15.791 13.0773 15.087 13.504C14.4043 13.9093 13.7857 14.5173 13.231 15.328L12.687 15.008C13.1137 14.2827 13.647 13.6213 14.287 13.024C14.9483 12.4053 15.759 11.9147 16.719 11.552C17.679 11.1893 18.831 11.008 20.175 11.008Z"
                fill="#F6F6F6"
              />
            </svg>

            <div className="flex flex-col items-center text-center gap-3 p-10 h-full min-w-[380px] max-w-[900px] bg-[#F6F6F6] rounded-3xl lg:flex-row lg:justify-center">
              <h1
                className={`${playfair_display.className} font-bold text-2xl`}
              >
                Complete Online Health Evaluation{" "}
              </h1>
              <p className={`${lato.className} font-bold text-base`}>
                Fill out a brief 3-minute health questionnaire, which will be
                reviewed by a US-licensed physician. This evaluation aids in
                determining the most appropriate Total Male Rx treatments for
                your needs.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#003B5B" />
              <path
                d="M20.175 11.008C21.8177 11.008 23.119 11.36 24.079 12.064C25.039 12.768 25.519 13.7707 25.519 15.072C25.519 15.904 25.3057 16.6613 24.879 17.344C24.4737 18.0267 23.9297 18.6773 23.247 19.296C22.5643 19.8933 21.8283 20.4587 21.039 20.992C20.271 21.5253 19.5243 22.0587 18.799 22.592C18.0737 23.104 17.455 23.6373 16.943 24.192H23.855C24.7297 24.192 25.2843 24.0853 25.519 23.872C25.7537 23.6587 25.9137 23.2853 25.999 22.752H26.671C26.671 24.1813 26.6817 25.2907 26.703 26.08C26.7243 26.8693 26.7563 27.5627 26.799 28.16C26.607 28.1173 26.255 28.0853 25.743 28.064C25.231 28.0427 24.6443 28.0213 23.983 28C23.3217 28 22.671 28 22.031 28H12.719V27.392C13.3163 26.752 14.0523 26.048 14.927 25.28C15.8017 24.512 16.655 23.6587 17.487 22.72C18.3403 21.7813 19.055 20.768 19.631 19.68C20.207 18.5707 20.495 17.3867 20.495 16.128C20.495 14.976 20.239 14.144 19.727 13.632C19.215 13.12 18.479 12.864 17.519 12.864C16.6017 12.864 15.791 13.0773 15.087 13.504C14.4043 13.9093 13.7857 14.5173 13.231 15.328L12.687 15.008C13.1137 14.2827 13.647 13.6213 14.287 13.024C14.9483 12.4053 15.759 11.9147 16.719 11.552C17.679 11.1893 18.831 11.008 20.175 11.008Z"
                fill="#F6F6F6"
              />
            </svg>

            <div className="flex flex-col items-center text-center gap-3 p-10 h-full min-w-[380px] max-w-[900px] bg-[#F6F6F6] rounded-3xl lg:flex-row lg:justify-center">
              <h1
                className={`${playfair_display.className} font-bold text-2xl`}
              >
                Finalize Your Order
              </h1>
              <p className={`${lato.className} font-bold text-base`}>
                Upon approval, proceed to our secure checkout and verification
                process. Once processed, your order will be discreetly shipped
                to the address you provided. It&apos;s as simple as that!
              </p>
            </div>
          </div>
        </div>

        <h1
          className={`${playfair_display.className} text-[#003B5B] mt-14 mb-5 px-5 text-center font-bold text-4xl`}
        >
          Men&apos;s Health Made Simple
        </h1>
      </div>

      <div className="flex flex-col items-center py-12 mb-10 rounded-xl max-h-[650px] w-11/12 bg-[#EFF0F4] gap-14 overflow-clip mx-auto">
        <div className="flex flex-col items-center gap-3">
          <h1 className={`${lato.className} font-bold text-2xl`}>
            Start your treatment today.
          </h1>

          <button
            className={`${lato.className} flex justify-center items-center text-base text-white w-40 h-14 mt-2 rounded-[50px] transition-all border-transparent bg-[#DD3B3B] hover:border-[#DD3B3B] hover:bg-white hover:text-[#DD3B3B]`}
          >
            Start Now
          </button>
        </div>

        {/* Checkboxes */}
        <div>
          <ul className="flex flex-col text-base gap-6 max-w-[900px] lg:flex-row lg:flex-wrap lg:justify-center lg: mx-auto">
            {[
              "100% Online healthcare platform",
              "US-licensed physicians",
              "FDA-approved medication",
              "US-based pharmacy",
              "Discreet shipping",
              "Ongoing care",
            ].map((cbx, index) => (
              <li key={index}>
                <span className="flex flex-row gap-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM18.045 7.455C17.9379 7.34823 17.8103 7.26416 17.6699 7.20782C17.5295 7.15149 17.3792 7.12404 17.228 7.12712C17.0768 7.1302 16.9277 7.16375 16.7897 7.22575C16.6518 7.28776 16.5277 7.37695 16.425 7.488L11.2155 14.1255L8.076 10.9845C7.86274 10.7858 7.58067 10.6776 7.28922 10.6827C6.99776 10.6879 6.71969 10.8059 6.51357 11.0121C6.30745 11.2182 6.18938 11.4963 6.18424 11.7877C6.1791 12.0792 6.28728 12.3612 6.486 12.5745L10.455 16.545C10.5619 16.6517 10.6892 16.7358 10.8294 16.7923C10.9695 16.8487 11.1196 16.8764 11.2706 16.8736C11.4217 16.8708 11.5706 16.8376 11.7085 16.776C11.8465 16.7144 11.9706 16.6256 12.0735 16.515L18.0615 9.03C18.2656 8.81775 18.3784 8.53391 18.3756 8.23944C18.3728 7.94496 18.2546 7.66332 18.0465 7.455H18.045Z"
                      fill="#003B5B"
                    />
                  </svg>{" "}
                  {cbx}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="flex justify-center flex-row overflow-x-clip gap-3">
          {IMAGES.map((img, index) => (
            <Image
              src={img}
              height={148}
              width={101}
              key={index}
              alt="Product"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
