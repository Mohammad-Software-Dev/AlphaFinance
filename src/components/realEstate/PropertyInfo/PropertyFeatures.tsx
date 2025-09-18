type Props = {
  paragraphs: string[];
};

const PropertyFeatures: React.FC<Props> = ({ paragraphs }) => (
  <section className="mb-8">
    <h4 className="font-normal text-black mb-3">Property Details</h4>
    {paragraphs.map((p, idx) => (
      <p
        key={idx}
        className={`text-sm md:text-base ${idx === 0 ? "mb-2" : ""}`}
      >
        {p}
      </p>
    ))}
  </section>
);

export default PropertyFeatures;
