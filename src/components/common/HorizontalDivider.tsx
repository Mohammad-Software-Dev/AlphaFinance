// src/components/common/HorizontalDivider.tsx
import React from "react";

interface Props {
  className?: string;
}

const HorizontalDivider: React.FC<Props> = ({ className = "" }) => (
  <div className={`border-t-[1px]  ${className}`} />
);

export default HorizontalDivider;
