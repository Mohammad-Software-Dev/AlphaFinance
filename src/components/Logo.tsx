import React from "react";

interface LogoProps {
  small?: boolean;
}

const Logo: React.FC<LogoProps> = ({ small = false }) => {
  return (
    <h1
      className="logo-text"
      style={{
        fontSize: small ? "30px" : "55px",
      }}
    >
      alphaseed
    </h1>
  );
};

export default Logo;
