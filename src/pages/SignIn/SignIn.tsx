import React from "react"
import { Link } from "react-router-dom"
import FormLayout from "../../components/FormLayout"
import Logo from "../../components/Logo"
import PageTitle from "../../components/PageTitle"
import TextInput from "../../components/TextInput"
import LoginButton from "../../components/LoginButton"
import { useSignInForm } from "./useSignInForm"
import signInSideImage from "../../assets/images/sign_in_side.png"

const SignIn: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    isSubmitting,
    onSubmit,
  } = useSignInForm()

  return (
    <FormLayout leftImageSrc={signInSideImage} leftImageAlt="Sign In Illustration">
      <div className="absolute top-6 left-6 lg:block hidden">
        <Logo />
      </div>
      <div className="flex flex-col items-center w-full space-y-6">
        <div className="w-[623px] flex flex-col items-start space-y-0">
          <PageTitle>Welcome Back</PageTitle>
          <p className="client-portal mt-1">Client Portal</p>
        </div>
        <div className="w-[623px] flex flex-col items-start space-y-4">
          <form className="w-full flex flex-col items-start space-y-6" onSubmit={onSubmit}>
            <TextInput
              id="email"
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              className="w-3/4 px-2"
            />
            <TextInput
              id="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
               className="w-3/4 px-2"
            />
            <LoginButton disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </LoginButton>
          </form>
        </div>
        <div className="flex flex-col items-center w-[623px] space-y-2">
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
          <p className="flex items-center space-x-1">
            <span className="not-client">Not a client yet?</span>
          <Link to="/signup" className="signup-link">
              Sign Up
          </Link>
          </p>
        </div>
      </div>
    </FormLayout>
  )
}

export default SignIn
