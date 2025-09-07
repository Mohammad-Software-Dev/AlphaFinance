import LoginButton from "../components/LoginButton";
import { UserMenu } from "../components/UserMenu";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-semibold">AlphaSeed — Frontend</h1>
      <div className="flex gap-4 items-center">
        <LoginButton children={undefined} />
        <UserMenu />
      </div>
      <div className="space-x-4">
        <Link to="/account" className="underline">
          Account
        </Link>
      </div>
    </div>
  );
}
