type Props = { text: string };

const PropertyDescription: React.FC<Props> = ({ text }) => (
  <section className="mb-8">
    <h4 className="font-normal text-black mb-3">Description</h4>
    <p className="text-sm md:text-base mb-2">{text}</p>
  </section>
);

export default PropertyDescription;
