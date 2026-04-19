import React from "react";
import { Link } from "react-router-dom";
import FormLayout from "../../components/FormLayout";
import Logo from "../../components/Logo";
import PageTitle from "../../components/PageTitle";
import { useSignInForm } from "./useSignInForm";
import signInSideImage from "../../assets/images/sign_in_side.png";
import { Button } from "../../components/common/Button";

const SignIn: React.FC = () => {
  const { onSubmit } = useSignInForm();

  return (
    <FormLayout
      leftImageSrc={signInSideImage}
      leftImageAlt="Sign In Illustration"
    >
      <div className="absolute  top-6 left-6 lg:block hidden">
        <Logo />
      </div>
      <div className=" lg:hidden w-full flex justify-center mb-6">
        <Logo />
      </div>
      <div className="flex flex-col items-center w-full space-y-6">
        <div className="w-full max-w-[400px] md:max-w-[520px] lg:max-w-[623px] flex flex-col items-start space-y-0">
          <PageTitle classNames="text-[32px] md:text-[48px] lg:text-[55px]">
            Welcome Back
          </PageTitle>
          <p className="client-portal mt-1">Client Portal</p>
        </div>
        <div className="w-full max-w-[400px] md:max-w-[520px] lg:max-w-[623px] flex flex-col items-start space-y-4">
          <form
            className="w-full flex flex-col items-start space-y-6"
            onSubmit={onSubmit}
          >
            <Button
              type="submit"
              variant="primary"
              size="md"
              fullWidth
              className="mt-4 w-full text-sm"
            >
              Next
            </Button>
          </form>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <a href="#" className="forgot-password text-sm">
            Forgot password?
          </a>
          <p className="flex items-center space-x-1">
            <span className="not-client text-sm">Not a client yet?</span>
            <Link
              to="/signup"
              className="font-roboto text-brand text-sm hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </FormLayout>
  );
};

export default SignIn;
