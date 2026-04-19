import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-semibold">AlphaFinance — Frontend</h1>
      <div className="space-x-4">
        <Link to="/dashboard" className="underline">
          Dashboard
        </Link>
      </div>
    </div>
  );
}
