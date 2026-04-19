import React from "react";
import { Link } from "react-router-dom";

const InlineNotBuiltYet: React.FC = () => {
  return (
    <section className="border ui-border-subtle rounded-sm p-8 ui-surface">
      <h3 className="text-xl font-semibold text-brand mb-2">Page Not Ready</h3>
      <p className="ui-text-muted mb-4">
        This section is under construction in demo mode.
      </p>
      <Link to="/dashboard" className="underline text-brand focus-ring rounded-sm">
        Go to Dashboard
      </Link>
    </section>
  );
};

export default InlineNotBuiltYet;
