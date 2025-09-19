import { useMemo, useState } from "react";
import { Button } from "../../components/common/Button";
import GeneralLayout from "../../components/layouts/GeneralLayout";
import RealEstateCard from "../../components/common/RealEstateCard";
import { useHotAssets } from "../../hooks/useHotAssets";

const PAGE_SIZE = 8;

const RealEstateAssetsPage: React.FC = () => {
  const { loading, error, cards } = useHotAssets(); // already mapped to RealEstateCard props
  const [page, setPage] = useState(1);

  const visible = useMemo(() => {
    const end = page * PAGE_SIZE;
    return (cards ?? []).slice(0, end);
  }, [cards, page]);

  const hasMore = (cards?.length ?? 0) > visible.length;

  const handleLoadMore = () => {
    if (hasMore) setPage((p) => p + 1);
  };

  if (loading) {
    return (
      <GeneralLayout>
        <div>Loading…</div>
      </GeneralLayout>
    );
  }

  if (error) {
    return (
      <GeneralLayout>
        <div className="text-red-600">{error.message}</div>
      </GeneralLayout>
    );
  }

  return (
    <GeneralLayout>
      <div
        className="
          grid gap-y-14 gap-x-4
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          [@media(min-width:1920px)]:grid-cols-4
          [@media(min-width:2560px)]:grid-cols-5
          [@media(min-width:3840px)]:grid-cols-6
        "
      >
        {visible.map((property, idx) => (
          <RealEstateCard key={`${property.code}-${idx}`} {...property} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-start my-8">
          <Button variant="link" onClick={handleLoadMore}>
            Show more...
          </Button>
        </div>
      )}
    </GeneralLayout>
  );
};

export default RealEstateAssetsPage;
