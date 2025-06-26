import GeneralLayout from "../components/layouts/GeneralLayout";
import { Button } from "../components/common/Button";

const NotBuiltYet: React.FC = () => (
  <GeneralLayout>
    <div className="flex flex-col items-center justify-center min-h-screen max-h-screen bg-white">
      <div className="text-[50px] md:text-[70px] lg:text-[90px] mb-4 animate-bounce">
        🚧
      </div>
      <h2 className=" font-extrabold text-brand mb-3 tracking-tight">
        Page Not Ready!
      </h2>
      <p className=" text-dim-gray mb-8 text-center max-w-md">
        Oops! This page is under construction or hasn&apos;t been built yet.
        <br />
        Check back soon, or head back to the main dashboard.
      </p>
      <Button
        variant="primary"
        width="20vw"
        height="5vh"
        size="lg"
        className="bg-brand border-none"
        to="/dashboard"
      >
        Go to Dashboard
      </Button>
    </div>
  </GeneralLayout>
);

export default NotBuiltYet;
