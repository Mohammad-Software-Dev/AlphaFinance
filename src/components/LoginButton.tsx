import React from "react";
import { Button } from "./Button";  

interface LoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const LoginButton: React.FC<LoginButtonProps> = ({ children, ...rest }) => {
  return (
    <Button
      variant="primary"
      size="md"
      fullWidth
      {...rest}
    >
      {children}
    </Button>
  );
};

export default LoginButton;
