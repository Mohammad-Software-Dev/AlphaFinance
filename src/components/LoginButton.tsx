import React from "react";

interface LoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const LoginButton: React.FC<LoginButtonProps> = ({ children, ...rest }) => {
  return (
    <button className="btn-login mt-2" {...rest}>
      {children}
    </button>
  );
};

export default LoginButton;
