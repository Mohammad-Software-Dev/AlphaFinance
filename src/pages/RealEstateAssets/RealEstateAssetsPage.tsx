import GeneralLayout from "../../components/layouts/GeneralLayout";
import RealEstateCard from "../../components/realEstateAssets/RealEstateCard";
import Pagination from "../../components/common/Pagination";
import { useState } from "react";
// const TAB_LIST = [
//   { label: "Real Estate Assets", value: "real-estate-assets" },
//   { label: "Transactions", value: "transactions" },
//   { label: "Identification", value: "identification" },
//   { label: "Settings", value: "settings" },
//   { label: "Security", value: "security" },
// ];
const properties = Array.from({ length: 8 }).map(() => ({
  code: "DXBDIFC007",
  title: "Lorem ipsum dolor sit amet consectetur.",
  roi: "11.6%",
  price: "8 AED",
  investors: 790,
  foundedPercent: 40,
  available: 4000,
  views: 2400,
  status: "DXB",
  comingSoon: true,
}));
const RealEstateAssetsPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const totalPages = 3;
  return (
    <GeneralLayout title="Real Estate Assets">
      <div
        className="
        grid gap-y-8 gap-x-4
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        [@media(min-width:1920px)]:grid-cols-4
        [@media(min-width:2560px)]:grid-cols-5
        [@media(min-width:3840px)]:grid-cols-6
      "
      >
        {properties.map((property, idx) => (
          <RealEstateCard key={idx} {...property} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
        className="mt-8"
      />
    </GeneralLayout>
  );
};
export default RealEstateAssetsPage;
