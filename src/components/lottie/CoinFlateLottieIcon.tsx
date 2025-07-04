import React, { useRef, useEffect, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import coinFlateLottie from "../../assets/lottie/coins-flat.json";

const CoinFlateLottieIcon: React.FC<{
  active?: boolean;
  className?: string;
}> = ({ active, className = "" }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered || active) {
      lottieRef.current?.play();
    } else {
      lottieRef.current?.stop();
    }
  }, [hovered, active]);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className={className}
      tabIndex={-1}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={coinFlateLottie}
        loop={false}
        autoplay={false}
        style={{ width: 30, height: 30 }}
      />
    </span>
  );
};

export default CoinFlateLottieIcon;
