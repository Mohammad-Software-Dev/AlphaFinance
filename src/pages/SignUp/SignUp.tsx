import React from "react";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import PageTitle from "../../components/PageTitle";
import FeatureItem from "../../components/FeatureItem";
import TextInput from "../../components/TextInput";
import GetStartedButton from "../../components/GetStartedButton";
import { useSignUpForm } from "./useSignUpForm";

const SignUp: React.FC = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    errors,
    isSubmitting,
    onSubmit,
  } = useSignUpForm();

  const leftContent = (
    <div>
      <PageTitle>An editor that helps you write clean codes.</PageTitle>
      <div className="mt-8 space-y-6 max-w-md">
        <FeatureItem
          title="Manage Your Cash Like Institutions Do"
          description="Have your cash actively managed to take advantage of the high yields offered by Treasury money market funds."
        />
        <FeatureItem
          title="A Team To Manage Your Investments For You"
          description="With an in-house team of investment analysts, our job is to help you make more money over the long term."
        />
        <FeatureItem
          title="Investment Advisors To Guide You"
          description="We believe in exceptional service. We know sometimes you want to speak with an actual human."
        />
      </div>
      <button
        type="button"
        className="mt-10 bg-[#202124] text-white rounded-[4px] px-4 py-2 font-inter font-medium text-[14px] hover:bg-[#323237] transition"
      >
        Try our free investor
      </button>
    </div>
  );

  const rightContent = (
    <div>
      <PageTitle>Let’s Get Started</PageTitle>
      <p className="font-open-sans text-[14px] text-gray-500 mt-1">
        You can explore the app once you create an account.
      </p>

      <form className="mt-8 space-y-6" onSubmit={onSubmit}>
        <TextInput
          id="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          error={errors.firstName}
        />
        <TextInput
          id="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          error={errors.lastName}
        />
        <TextInput
          id="email"
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
        <TextInput
          id="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />
        <TextInput
          id="phone"
          placeholder="Phone Number"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={errors.phone}
        />

        <div className="mt-4 flex items-center space-x-4">
          <GetStartedButton disabled={isSubmitting} loading={isSubmitting} />
          <span className="font-inter text-[14px] text-gray-600">
            Already have an account?{" "}
            <a href="/signin" className="font-roboto text-[14px] text-[#8496E7] hover:underline">
              Log in
            </a>
          </span>
        </div>
      </form>

      <p className="mt-8 font-open-sans text-[12px] text-gray-500">
        By providing your information and clicking Get Started, you agree to our{" "}
        <a href="/terms" className="underline">
          Terms of Use
        </a>{" "}
        and{" "}
        <a href="/privacy" className="underline">
          Privacy Policy
        </a>
        . You also elect to receive updates, newsletters, and offers from Alphaseed.
      </p>
    </div>
  );

  return <TwoColumnLayout leftContent={leftContent} rightContent={rightContent} />;
};

export default SignUp;
