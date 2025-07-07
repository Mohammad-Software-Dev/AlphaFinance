import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  stepConnectorClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import type { StepIconProps } from "@mui/material/StepIcon";
import {
  MdPlayArrow,
  MdBuild,
  MdSearch,
  MdCheck,
  MdPayment,
  MdAttachMoney,
  MdDoneAll,
} from "react-icons/md";

type OperationModalProps = {
  event: {
    title: string;
    date: string;
    desc: string;
    tags: string[];
  };
  TAGS: Record<
    string,
    { label: string; icon: React.ReactNode; classes: string }
  >;
};

const statusSteps = ["Started", "In Progress", "Review", "Completed"];
const paymentSteps = ["Initiated", "Pending", "Paid"];

const mockDocuments = [
  { name: "Contract.pdf" },
  { name: "Invoice.pdf" },
  { name: "ID.png" },
];

const mockParticipants = ["John Doe", "Jane Smith", "Legal Team"];

const currentStatusIdx = 2;
const currentPaymentIdx = 1;

interface CustomConnectorProps {
  color?: string;
}

export const CustomConnector = styled(StepConnector, {
  shouldForwardProp: (prop) => prop !== "color",
})<CustomConnectorProps>(({ color }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 20,
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0", // default
    borderRadius: 1,
    transition: "background-color 0.3s",
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    backgroundColor: color ?? "var(--color-brand)",
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    backgroundColor: color ?? "var(--color-brand)",
  },
}));

const statusIcons: { [index: number]: React.ReactElement } = {
  1: <MdPlayArrow size={24} />,
  2: <MdBuild size={24} />,
  3: <MdSearch size={24} />,
  4: <MdCheck size={24} />,
};

function StatusStepIcon(props: StepIconProps) {
  const { active, completed, icon, className } = props;
  const idx = Number(icon);
  return (
    <span
      className={`${className} flex items-center justify-center w-10 h-10 rounded-full ${
        completed || active
          ? "bg-brand text-white "
          : "bg-light-silver text-brand"
      }`}
    >
      {statusIcons[idx]}
    </span>
  );
}

// Custom StepIcon for payment
const paymentIcons: { [index: number]: React.ReactElement } = {
  1: <MdPayment size={24} />,
  2: <MdAttachMoney size={24} />,
  3: <MdDoneAll size={24} />,
};

function PaymentStepIcon(props: StepIconProps) {
  const { active, completed, icon, className } = props;
  const idx = Number(icon);
  return (
    <span
      className={`${className} flex items-center justify-center w-10 h-10 rounded-full ${
        completed || active
          ? "bg-dark-orange text-white "
          : "bg-light-silver text-dark-orange"
      }`}
    >
      {paymentIcons[idx]}
    </span>
  );
}

const OperationModalContent: React.FC<OperationModalProps> = ({
  event,
  TAGS,
}) => (
  <div className="w-full max-w-xl">
    {/* Title & Date */}
    <div className="mb-2 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-black mb-1 text-center">
        {event.title}
      </h2>
      <span className="text-sm text-gray-400">{event.date}</span>
    </div>
    {/* Description */}
    <div className="mb-4 text-base text-center">{event.desc}</div>

    {/* Status Stepper */}
    <div className="mb-4">
      <span className="text-sm font-semibold text-dim-gray">Status</span>
      <Stepper
        activeStep={currentStatusIdx}
        alternativeLabel
        connector={<CustomConnector color="var(--color-brand)" />}
        sx={{
          marginTop: 2,
          "& .MuiStepLabel-label": { fontSize: 12 },
        }}
      >
        {statusSteps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={StatusStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>

    {/* Payment Stepper */}
    <div className="mb-4">
      <span className="text-sm font-semibold text-dim-gray">
        Payment Status
      </span>
      <Stepper
        activeStep={currentPaymentIdx}
        alternativeLabel
        connector={<CustomConnector color="var(--color-dark-orange)" />}
        sx={{
          marginTop: 2,
          "& .MuiStepLabel-label": { fontSize: 12 },
        }}
      >
        {paymentSteps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={PaymentStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>

    {/* Documents */}
    <div className="mb-4">
      <span className="text-sm font-semibold text-dim-gray">Documents</span>
      <div className="flex flex-wrap gap-2 mt-2">
        {mockDocuments.map((doc) => (
          <button
            key={doc.name}
            className="px-3 py-1 rounded border border-light-silver text-xs font-medium text-gray-700 bg-white hover:bg-brand/10 transition"
            type="button"
            tabIndex={-1}
          >
            {doc.name}
          </button>
        ))}
      </div>
    </div>

    {/* Participants */}
    <div className="mb-4">
      <span className="text-sm font-semibold text-dim-gray">Participants</span>
      <div className="flex flex-wrap gap-2 mt-2">
        {mockParticipants.map((p) => (
          <span
            key={p}
            className="inline-flex items-center px-3 gap-2 py-1 rounded-md font-medium text-xs border border-light-silver bg-white text-brand"
            style={{ letterSpacing: 0.2 }}
          >
            {p}
          </span>
        ))}
      </div>
    </div>

    {/* Tags */}
    <div className="mb-2">
      <span className="text-sm font-semibold text-dim-gray">Tags</span>
      <div className="flex flex-wrap gap-2 mt-2">
        {event.tags.map(
          (key) =>
            TAGS[key] && (
              <span
                key={key}
                className={`inline-flex items-center px-3 gap-2 py-1 rounded-md font-medium text-xs border ${TAGS[key].classes}`}
                style={{ letterSpacing: 0.2 }}
              >
                {TAGS[key].icon}
                {TAGS[key].label}
              </span>
            )
        )}
      </div>
    </div>
  </div>
);

export default OperationModalContent;
