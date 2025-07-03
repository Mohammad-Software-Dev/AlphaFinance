import { Button } from "../common/Button";
const avatars = [
  "/avatars/avatar1.png",
  "/avatars/avatar2.png",
  "/avatars/avatar3.png",
];
interface PortfolioProps {
  code: string;
  tokens: number;
  tokensValue: number;
  dividends: number;
  roi: number;
  description: string;
}

const PortfolioCard: React.FC<PortfolioProps> = ({
  code,
  tokensValue,
  dividends,
  roi,
  description,
}) => (
  <>
    <div className="relative flex flex-col rounded-2xl min-w-[340px] max-w-[380px] px-7 pt-7 pb-6  transition-transform duration-200 hover:-translate-y-2 overflow-hidden">
      {/* Left colored border */}
      <div className="absolute left-0 top-0 h-full w-2 bg-brand rounded-bl-2xl rounded-tl-2xl" />
      {/* Top stats */}
      <div className="flex justify-between mb-5">
        <div>
          <p className="text-brand">Tokens</p>
          <p className="text-2xl text-brand font-bold leading-none">2000</p>
        </div>
        <div>
          <p className="text-teal">Dividends</p>
          <p className="text-2xl text-teal font-bold leading-none">
            +${dividends}
          </p>
        </div>
      </div>
      {/* Bottom stats */}
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-2xl text-dark-orange ">Tokens Value</p>
          <p className="text-2xl text-dark-orange font-bold leading-none">
            ${tokensValue.toFixed(2)}
          </p>
        </div>
        <div>
          <div className="text-2xl text-sand ">ROI</div>
          <div className="text-2xl text-sand font-bold leading-none">
            {roi}%
          </div>
        </div>
      </div>
    </div>
    {/* Code + Avatars + Desc */}
    <div className="flex items-center mb-2">
      <p className="font-medium text-base mr-2">{code}</p>
      <div className="flex -space-x-3">
        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-7 h-7 rounded-full border-2 border-white object-cover"
            style={{ zIndex: 10 - i }}
          />
        ))}
      </div>
    </div>
    <div className="mb-6 text-base text-dim-gray">{description}</div>
    <Button
      to={`/real-estate/${code}`}
      variant="primary"
      size="md"
      fullWidth
      className="text-xs md:text-sm"
    >
      View Asset
    </Button>
  </>
);

export default PortfolioCard;
