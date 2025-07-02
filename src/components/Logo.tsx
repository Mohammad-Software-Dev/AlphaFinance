import React from "react";

interface LogoProps {
  small?: boolean;
}

const Logo: React.FC<LogoProps> = ({ small = false }) => {
  return (
    <h1
      className="text-brand font-open-sans lg:my-0"
      style={{
        fontSize: small ? "30px" : "55px my-10",
      }}
    >
      alphaseed
    </h1>
  );
};

export default Logo;
