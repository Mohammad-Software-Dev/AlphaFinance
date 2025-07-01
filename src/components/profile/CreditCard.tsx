import React from "react";

interface CreditCardProps {
  logo: React.ReactNode;
  name?: string;
  number?: string;
  expires?: string;
  label?: string;
}

const CreditCard: React.FC<CreditCardProps> = ({
  logo,
  name = "David Peters",
  number = "xxxx - xxxx - xxxx - xxxx",
  expires = "11/24",
  label = "Credit",
}) => {
  return (
    <div
      className="w-full aspect-[16/9] rounded-2xl relative overflow-hidden flex flex-col justify-between p-8"
      style={{
        background: "linear-gradient(115deg, #064A7D 0%, #642401 100%)",
        boxShadow: "0 6px 32px 0 rgba(0,0,0,0.2)",
      }}
    >
      {/* Decorative Blurred Bars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-8 left-8 h-8 w-2/3 rounded-full bg-white/10 blur-md" />
        <div className="absolute top-20 left-16 h-8 w-1/2 rounded-full bg-white/10 blur-md" />
        <div className="absolute top-32 left-6 h-8 w-5/6 rounded-full bg-white/10 blur-md" />
        <div className="absolute top-44 left-24 h-8 w-2/3 rounded-full bg-white/10 blur-md" />
        <div className="absolute top-60 left-4 h-8 w-1/2 rounded-full bg-white/10 blur-md" />
      </div>

      <div className="z-10 relative flex flex-col h-full justify-between">
        {/* Top Row: Label + Logo */}
        <div className="flex flex-row justify-between items-start">
          <span className="text-white text-sm  lg:text-xl font-light">
            {label}
          </span>
          <div className="w-14 h-14 flex items-center justify-center">
            {logo}
          </div>
        </div>

        {/* Bottom: Name, Number, Expiry */}
        <div className="flex flex-row justify-between items-end mt-auto w-full">
          <div>
            <div className="text-white text-xs  lg:text-base font-normal mb-1">
              {name}
            </div>
            <div className="text-white text-xs lg:text-base font-semibold tracking-widest">
              {number}
            </div>
          </div>
          <div className="text-right">
            <div className="text-white text-xs lg:text-base font-normal mb-1">
              Expires
            </div>
            <div className="text-white text-xs  lg:text-base font-semibold">
              {expires}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
