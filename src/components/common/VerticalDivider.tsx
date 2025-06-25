// src/components/common/VerticalDivider.tsx
import React from "react";

interface Props {
  className?: string;
}

const VerticalDivider: React.FC<Props> = ({ className = "" }) => (
  <div className={`border-l-[1px]  ${className}`} />
);

export default VerticalDivider;
