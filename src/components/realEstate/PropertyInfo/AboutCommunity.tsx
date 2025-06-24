import map from "../../../assets/images/maps.png";
import sample from "../../../assets/images/sample_1.jpg";
const AboutCommunity = () => (
  <section className="mb-8">
    <h4 className="font-normal text-black mb-3">About the community</h4>
    <div className="flex  gap-3 md:gap-10 flex-row mb-2 py-2">
      <div className="w-1/2 md:w-2/3 aspect-[16/9] sm:aspect-auto sm:h-[220px] lg:h-[260px]">
        <img
          src={sample}
          alt="Community view"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="w-1/2 md:w-1/3 aspect-[16/9] sm:aspect-auto sm:h-[220px] lg:h-[260px]">
        <img
          src={map}
          alt="Community map"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>

    <p className="text-sm md:text-base mb-2">
      A new architectural masterpiece now dazzles the shores of the Rockaways
      with the addition of THE TIDES at Arverne By The Sea. Spectacular
      beachfront, affordable & luxurious apartments, offering modern open living
      spaces and high-end finishes. Amenities will include a roof deck with pool
      and lounge, indoor and outdoor dining experiences, private parking
      available for a fee, bike storage and more.
    </p>
  </section>
);

export default AboutCommunity;
