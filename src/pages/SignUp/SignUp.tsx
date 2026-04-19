import React from "react";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import PageTitle from "../../components/PageTitle";
import FeatureItem from "../../components/FeatureItem";
import TextInput from "../../components/common/TextInput";
import GetStartedButton from "../../components/GetStartedButton";
import { useSignUpForm } from "./useSignUpForm";
import { Button } from "../../components/common/Button";

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
      <PageTitle classNames="lg:text-[58px]">
        An editor that helps you write clean codes.
      </PageTitle>
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
      <Button
        type="button"
        variant="primary"
        size="sm"
        width="auto"
        className="mt-10"
      >
        Try our free investor
      </Button>
    </div>
  );

  const rightContent = (
    <div>
      <PageTitle classNames="lg:text-[50px]">Let’s Get Started</PageTitle>
      <p className="font-open-sans text-dark-silver mt-1">
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

        <div className="mt-4 flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0">
          <GetStartedButton disabled={isSubmitting} loading={isSubmitting} />
          <span className="font-inter text-sm text-dim-gray text-center sm:text-left">
            Already have an account?
            <a
              href="/signin"
              className="font-roboto text-sm text-brand hover:underline px-2"
            >
              Log in
            </a>
          </span>
        </div>
      </form>

      <p className="mt-8 font-open-sans text-sm text-dark-silver">
        By providing your information and clicking Get Started, you agree to our{" "}
        <a href="/terms" className="underline">
          Terms of Use
        </a>{" "}
        and{" "}
        <a href="/privacy" className="underline">
          Privacy Policy
        </a>
        . You also elect to receive updates, newsletters, and offers from
        AlphaFinance.
      </p>
    </div>
  );

  return (
    <TwoColumnLayout leftContent={leftContent} rightContent={rightContent} />
  );
};

export default SignUp;
