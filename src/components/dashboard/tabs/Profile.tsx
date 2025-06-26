import RealEstateCard from "../RealEstateCard";
import Pagination from "../../common/Pagination";
import { useState } from "react";

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

const Profile: React.FC = () => {
  const [page, setPage] = useState(1);
  const totalPages = 3;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </>
  );
};

export default Profile;
