import CheckIcon from "../../../assets/icons/check.svg?react";

const details = [
  [
    { label: "Bedroom", value: "3" },
    { label: "Pool" },
    { label: "Sheared Pool" },
  ],
  [{ label: "Central A/C" }, { label: "Security" }, { label: "Central A/C" }],
  [{ label: "Lobby" }, { label: "Landmarks" }, { label: "Building" }],
  [{ label: "Sheared Gym" }, { label: "Elevator" }, { label: "Sheared Gym" }],
];

const PropertyFeatures = () => (
  <section className="mb-8">
    <h4 className="font-normal text-black mb-3">Property Features</h4>
    <div className="border-t-[1px] border-b-[1px] border-light-silver px-2 py-1">
      {details.map((row, i) => (
        <>
          <div
            key={i}
            className="flex flex-wrap md:flex-row py-1  md:px-8 md:gap-2"
          >
            {row.map((cell, j) => (
              <div
                key={j}
                className="flex w-1/2 md:w-fit py-1 md:py-0 items-center  gap-2 md:flex-1 font-normal"
              >
                <CheckIcon className="w-6 h-6" />
                <span className="text-sm md:text-base">
                  {cell.label}
                  {cell.value && (
                    <span className="ml-1 text-sm md:text-base">
                      : {cell.value}
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
          {/* Separator after the second row only */}
          {i === 1 && (
            <div className="border-t-[1px] border-light-silver my-2" />
          )}
        </>
      ))}
    </div>
  </section>
);

export default PropertyFeatures;
