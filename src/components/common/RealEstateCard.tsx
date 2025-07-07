import { Link } from "react-router-dom";
import sampleProperty from "../../assets/images/sample-property.jpg";

interface RealEstateCardProps {
  code: string;
  title: string;
  roi: string;
  price: string;
  investors: number;
  foundedPercent: number;
  available: number;
  views: number;
  status?: string;
  comingSoon?: boolean;
  image?: string;
}

const RealEstateCard: React.FC<RealEstateCardProps> = ({
  code = "DXBDIFC007",
  title = "Lorem ipsum dolor sit amet consectetur.",
  roi = "11.6%",
  price = "8 AED",
  investors = 790,
  foundedPercent = 40,
  views = 2400,
  status = "DXB",
  comingSoon = true,
  image = sampleProperty,
}) => {
  return (
    <Link to={`/real-estate/${code}`}>
      <div className="pt-1 flex flex-col  h-fit w-fit gap-3 md:gap-3  bg-white overflow-hidden transition-transform duration-200 hover:-translate-y-1 min-w-[220px]">
        {/* Image */}
        <div className="relative w-full">
          <img
            src={image}
            alt={title}
            className="w-full aspect-video h-auto object-cover rounded-sm"
            loading="lazy"
          />
          <div className="absolute w-1/2 right-0 inset-y-0 h-full bg-gradient-to-l from-brand/50 to-transparent pointer-events-none rounded-t-2xl" />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="px-2 py-1 bg-white/70 text-xs rounded-sm">
              {status}
            </span>
            {comingSoon && (
              <span className="px-2 py-1 bg-white/70 text-xs rounded-sm">
                COMING SOON
              </span>
            )}
          </div>
        </div>
        {/* Info */}
        <div className="flex-1 flex flex-col">
          <div className="font-medium text-sm md:text-base tracking-tight truncate">
            {code}
          </div>
          <div className="text-dim-gray font-light text-base md:text-lg mb-3 line-clamp-2">
            {title}
          </div>
          <div className="flex gap-2 mb-2">
            <div className=" flex-1 bg-ghost-white py-2 flex flex-col items-center rounded-sm">
              <span className="text-[10px] md:text-xs  lg:text-base">
                Token ROI
              </span>
              <span className="font-bold text-xs md:text-sm lg:text-base text-verified-green">
                {roi}
              </span>
            </div>
            <div className="flex-1 bg-ghost-white py-2 flex flex-col items-center rounded-sm">
              <span className="text-[10px] md:text-xs  lg:text-base">
                Token Price
              </span>
              <span className="font-bold text-xs md:text-sm lg:text-base">
                {price}
              </span>
            </div>
            <div className="flex-1 bg-ghost-white py-2 flex flex-col items-center rounded-sm">
              <span className="text-[10px] md:text-xs  lg:text-base">
                Investors
              </span>
              <span className="font-bold text-xs md:text-sm lg:text-base text-blue-700">
                {investors}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2 mb-1">
            <div
              className="flex-1 h-1  bg-ghost-white overflow-hidden"
              role="progressbar"
              aria-valuenow={foundedPercent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Investment Progress"
            >
              <div
                className="h-full bg-black transition-all"
                style={{ width: `${foundedPercent}%` }}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-xs md:text-sm">
              {foundedPercent}% Investment
            </span>
            <span className="text-xs md:text-sm">
              {views.toLocaleString()} Views
            </span>
          </div>
        </div>
        {/* <Button
        to={`/real-estate/${code}`}
        variant="primary"
        size="md"
        fullWidth
        className="text-xs md:text-sm"
      >
        View Offering
      </Button> */}
      </div>
    </Link>
  );
};

export default RealEstateCard;
