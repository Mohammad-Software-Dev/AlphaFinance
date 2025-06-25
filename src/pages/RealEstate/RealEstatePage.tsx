import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/realEstate/Layout";

const RealEstatePage: React.FC = () => {
  const { assetId } = useParams<{ assetId: string }>();

  return <Layout assetId={assetId || ""} />;
};

export default RealEstatePage;
