import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import "./AlatSpin.css";
import Logo from "../../assets/images/alat.png";
import WemaLogo from "../../assets/images/logo.png";

const data = [
  {
    option: "N10,000 cash",
    style: { backgroundColor: "#3c44aa" },
    img: "../../assets/images/naira_.png",
  },
  { option: "IPhone 14 Pro", style: { backgroundColor: "#8932b8" } },
  { option: "You're doing well 🤙", style: { backgroundColor: "#835432" } },
  { option: "N5,000 cash", style: { backgroundColor: "#9d9d97" } },
  { option: "Almost there 🤙", style: { backgroundColor: "#169c9c" } },
  { option: "Carrier Bag", style: { backgroundColor: "#9d9d97" } },
  { option: "Laptop Cleaner", style: { backgroundColor: "#80c71f" } },
  { option: "Samsung A1", style: { backgroundColor: "#f38baa" } },
  { option: "Ooin, Try again 🤙", style: { backgroundColor: "#fed83d" } },
  { option: "Key Ring", style: { backgroundColor: "#3ab3da" } },
  { option: "Itel Dual SIM", style: { backgroundColor: "#f9801d" } },
  { option: "N5,000 Cash", style: { backgroundColor: "#A2BCE0" } },
  { option: "Biro", style: { backgroundColor: "#c74ebd" } },
  { option: "N500,000 Cash", style: { backgroundColor: "#5465ff" } },
  { option: "Umbrella", style: { backgroundColor: "#b02e26" } },
  { option: "Ooin, Try again 🤙", style: { backgroundColor: "#5e7c16" } },
  { option: "Big Bottle", style: { backgroundColor: "#60d394" } },
  { option: "N100,000 Cash", style: { backgroundColor: "#832161" } },
  { option: "Ooin, Try again 🤙", style: { backgroundColor: "#0B5563" } },
  { option: "Samsung A1", style: { backgroundColor: "#fa003f" } },
  { option: "Almost there 🤙", style: { backgroundColor: "#072ac8" } },
  { option: "N10,000 Cash", style: { backgroundColor: "#ff6700" } },
  { option: "N5,000 cash", style: { backgroundColor: "#0B2545" } },
  { option: "23", style: { backgroundColor: "#3c096c" } },
  { option: "Biro", style: { backgroundColor: "#7bdff2" } },
];

const AlatSpin = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      //   const newPrizeNumber = 1;
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      if (newPrizeNumber === 22) {
        console.log("You have won something");
      }
      else if (newPrizeNumber === 16){
        console.log("You have won a big car")
      }
      else if (newPrizeNumber === 4){
        console.log("You have won a 1,000")
      }
      else if (newPrizeNumber === 18){
        console.log("You have won a house")
      }
      else if (newPrizeNumber === 11){
        console.log("You have won Me")
      }
      else if (newPrizeNumber === 9){
        console.log("You have won a laptop")
      }
      console.log(newPrizeNumber);
    }
  };

  return (
    <div className="h-screen bg-black md:h-screen">
      <div className="flex justify-center items-center relative">
        <div className="w-[200px] absolute top-[20px] right-2">
          <img src={WemaLogo} alt="wema-logo" />
          <div className="bg-[#5c064d] py-4 my-3 rounded-md text-center text-white text-2xl">
            <h2 className="uppercase font-bold">spin & win</h2>
          </div>
        </div>
        <div className="parent-container">
          <Wheel
            outerBorderColor={"#fff"}
            outerBorderWidth={1}
            innerBorderWidth={0}
            fontFamily="Manrope, sans-serif"
            radiusLineWidth={1}
            fontWeight={300}
            fontSize={12}
            textColors={["white"]}
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={() => {
              setMustSpin(false);
            }}
          />
          {/* Custom image */}

          <button className={`btn_logo`} onClick={handleSpinClick}>
            <img src={Logo} alt="alat-logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlatSpin;
