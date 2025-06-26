import sampleProperty from "../../assets/images/sample-property.jpg";
import { Button } from "../../components/common/Button";

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
    <div className=" flex flex-col max-w-[350px] gap-3 md:gap-6 overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full aspect-video h-auto object-cover "
        />
        <div className="absolute w-1/2 right-0 inset-y-0  h-full bg-gradient-to-l from-brand/50 to-transparent pointer-events-none" />

        <div className="absolute top-3 left-3 flex gap-2">
          <button className="px-2 py-1 bg-white rounded-[8px] text-xs  ">
            {status}
          </button>
          {comingSoon && (
            <button className="px-2 py-1 bg-white rounded-[8px]  text-xs ">
              COMING SOON
            </button>
          )}
        </div>
      </div>
      <div className=" flex-1 flex flex-col">
        <div className="font-bold text-sm md:text-base tracking-tight">
          {code}
        </div>
        <div className="text-dim-gray font-light text-base md:text-xl mb-3">
          {title}
        </div>
        <div className="flex gap-2 mb-2">
          <div className="flex-1 bg-ghost-white rounded-lg py-2 flex flex-col items-center">
            <span className="text-xs md:text-sm ">Token ROI</span>
            <span className="font-bold text-base md:text-lg">{roi}</span>
          </div>
          <div className="flex-1 bg-ghost-white rounded-lg py-2 flex flex-col items-center">
            <span className="text-xs md:text-sm ">Token Price</span>
            <span className="font-bold text-base md:text-lg">{price}</span>
          </div>
          <div className="flex-1 bg-ghost-white rounded-lg py-2 flex flex-col items-center">
            <span className="text-xs md:text-sm ">Investors</span>
            <span className="font-bold text-base md:text-lg">{investors}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2 mb-1">
          <div className="flex-1 h-1 rounded bg-ghost-white overflow-hidden">
            <div
              className="h-full bg-black"
              style={{ width: `${foundedPercent}%` }}
            />
          </div>
        </div>
        <div className="flex justify-between  mb-3">
          <span className="text-xs md:text-sm">
            {foundedPercent}% Investment
          </span>
          <span className="text-xs md:text-sm">
            {views.toLocaleString()} Views
          </span>
        </div>
      </div>
      <Button
        to={`/real-estate/${code}`}
        variant="primary"
        size="md"
        fullWidth
        className="text-xs md:text-sm"
      >
        View Offering
      </Button>
    </div>
  );
};

export default RealEstateCard;
