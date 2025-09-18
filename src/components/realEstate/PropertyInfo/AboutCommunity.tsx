import mapImg from "../../../assets/images/maps.png";
import sample from "../../../assets/images/sample_1.jpg";

type Props = {
  community: {
    text: string;
    mapCoords: Array<{ lat: number; lng: number }>;
  };
};

const AboutCommunity: React.FC<Props> = ({ community }) => (
  <section className="mb-8">
    <h4 className="font-normal text-black mb-3">About the community</h4>

    <div className="flex gap-3 md:gap-10 flex-row mb-2 py-2">
      <div className="w-1/2 md:w-2/3 aspect-[16/9] sm:aspect-auto sm:h-[220px] lg:h-[260px]">
        <img
          src={sample}
          alt="Community view"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="w-1/2 md:w-1/3 aspect-[16/9] sm:aspect-auto sm:h-[220px] lg:h-[260px]">
        <img
          src={mapImg}
          alt="Community map"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    <p className="text-sm md:text-base mb-2">{community.text}</p>
  </section>
);

export default AboutCommunity;
