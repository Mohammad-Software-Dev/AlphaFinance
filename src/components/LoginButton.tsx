import React from "react";
import { Button } from "./common/Button";

interface LoginButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "variant" | "size"> {
  children: React.ReactNode;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  children,
  onClick,
  ...rest
}) => {
  return (
    <Button variant="primary" size="md" fullWidth onClick={onClick} {...rest}>
      {children}
    </Button>
  );
};

export default LoginButton;
