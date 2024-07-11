import { Playfair_Display, Lato } from "next/font/google";

const playfair_display = Playfair_Display({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-6 mx-auto">
      <h1
        className={`${playfair_display.className} font-black text-[#003B5B] text-5xl text-center`}
      >
        Men&apos;s Health Made Simple.
      </h1>
      <p className={`${lato.className} font-normal`}>
        Your #1 Portal for Men&apos;s Prescription Medication
      </p>
      <button
        className={`${lato.className} flex justify-center items-center font-bold px-6 py-10 text-white w-64 h-16 rounded-[50px] transition-all border bg-[#DD3B3B] hover:border-[#DD3B3B] hover:bg-white hover:text-[#DD3B3B]`}
      >
        FIND MY TREATMENT
      </button>
    </div>
  );
}
// /* Frame 50 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 24px 42px;
// gap: 10px;

// width: 250px;
// height: 67px;

// background: #DD3B3B;
// border-radius: 50px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
