import User1 from "../../assets/images/male.png";
import User2 from "../../assets/images/female.png";
import User3 from "../../assets/images/male_2.png";
import User4 from "../../assets/images/male_3.png";

const avatars = [User1, User2, User3, User4];

interface PortfolioProps {
  code: string;
  tokens: number;
  tokensValue: number;
  dividends: number;
  roi: number;
  description: string;
}
const bgClasses = [
  "bg-profile-blue",
  "bg-profile-pink",
  "bg-profile-purple",
  "bg-profile-light-blue",
];
const PortfolioCard: React.FC<PortfolioProps> = ({
  code,
  tokensValue,
  dividends,
  roi,
  description,
}) => (
  <>
    <div className="relative flex flex-col rounded-2xl  px-6 py-2 mb-2  transition-transform duration-200 hover:-translate-y-2 overflow-hidden">
      {/* Left colored border */}
      <div className="absolute left-0 top-0 h-full w-2 bg-brand rounded-bl-2xl rounded-tl-2xl" />
      {/* Top stats */}
      <div className="flex justify-between mb-3 md:mb-5">
        <div>
          <p className="text-brand">Tokens</p>
          <p className="text-base  lg:text-2xl text-brand font-semibold md:font-bold leading-none">
            2000
          </p>
        </div>
        <div>
          <p className="text-teal">Dividends</p>
          <p className="text-base  lg:text-2xl text-teal font-semibold md:font-bold leading-none">
            +${dividends}
          </p>
        </div>
      </div>
      {/* Bottom stats */}
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-base  lg:text-2xl text-dark-orange ">
            Tokens Value
          </p>
          <p className="text-base  lg:text-2xl text-dark-orange font-semibold md:font-bold leading-none">
            ${tokensValue.toFixed(2)}
          </p>
        </div>
        <div>
          <div className="text-base  lg:text-2xl text-sand ">ROI</div>
          <div className="text-base  lg:text-2xl text-sand font-semibold md:font-bold leading-none">
            {roi}%
          </div>
        </div>
      </div>
    </div>
    {/* Code + Avatars + Desc */}
    <div className="flex items-center mb-2">
      <p className="font-medium text-sm lg:text-base mr-2">{code}</p>
      <div className="flex -space-x-3">
        {avatars.map((m, idx) => (
          <img
            key={idx}
            src={m}
            alt=""
            className={`w-6 h-6 rounded-full border-2 border-white  transition-transform duration-200 hover:-translate-y-1 ${
              bgClasses[idx % bgClasses.length]
            }`}
          />
        ))}
      </div>
    </div>
    <div className="text-sm lg:text-base text-dim-gray">{description}</div>
    {/* <Button
      to={`/real-estate/${code}`}
      variant="primary"
      size="md"
      fullWidth
      className="text-xs md:text-sm"
    >
      View Asset
    </Button> */}
  </>
);

export default PortfolioCard;
