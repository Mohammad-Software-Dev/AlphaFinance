import React, { useState } from "react";
import TextInput from "../../common/TextInput";
import { Button } from "../../common/Button";
import Dropdown from "../../common/Dropdown";

interface BasicInfoData {
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: string;
  email: string;
  confirmEmail: string;
  location: string;
  phone: string;
  language: string;
  skills: string;
}

const initialData: BasicInfoData = {
  firstName: "David Peters",
  lastName: "David Peters",
  gender: "Male",
  birthDate: "",
  email: "arroragaur@gmail.com",
  confirmEmail: "arroragaur@gmail.com",
  location: "United Arab Emirates,Dubai",
  phone: "+44 456-9876",
  language: "English",
  skills: "United Arab Emirates,Dubai",
};

const BasicInfoEditPanel: React.FC = () => {
  const [data, setData] = useState<BasicInfoData>(initialData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col justify-between ">
      <div className="">
        <h4 className="md:text-lg text-base mb-6 font-semibold md:font-normal">
          Basic Info
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          <div>
            <TextInput
              id="firstName"
              placeholder="First Name"
              value={data.firstName}
              onChange={handleChange}
              type="text"
              label="First Name"
            />
          </div>
          <div>
            <TextInput
              id="lastName"
              placeholder="Last Name"
              value={data.lastName}
              onChange={handleChange}
              type="text"
              label="Last Name"
            />
          </div>
          <div>
            <TextInput
              id="gender"
              placeholder="Gender"
              value={data.gender}
              onChange={handleChange}
              type="text"
              label="I'm"
            />
          </div>
          <div>
            <TextInput
              id="birthDate"
              placeholder="mm/dd/yyyy"
              value={data.birthDate}
              onChange={handleChange}
              type="text"
              label="Birth Date"
            />
          </div>
          <div>
            <TextInput
              id="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
              type="email"
              label="Email"
            />
          </div>
          <div>
            <TextInput
              id="confirmEmail"
              placeholder="Confirmation Email"
              value={data.confirmEmail}
              onChange={handleChange}
              type="email"
              label="Confirmation Email"
            />
          </div>
          <div>
            <TextInput
              id="location"
              placeholder="Location"
              value={data.location}
              onChange={handleChange}
              type="text"
              label="Your location"
            />
          </div>
          <div>
            <TextInput
              id="phone"
              placeholder="Phone Number"
              value={data.phone}
              onChange={handleChange}
              type="tel"
              label="Phone Number"
            />
          </div>
          <div>
            <Dropdown
              id="state"
              placeholder="State"
              options={["English", "Arabic"]}
              name="language"
              label="Language"
              value={data.language}
              onChange={() => handleChange}
            />
          </div>
          <div>
            <TextInput
              id="skills"
              placeholder="Skills"
              value={data.skills}
              onChange={handleChange}
              type="text"
              label="Skills"
            />
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-end mt-8 gap-3">
          <Button variant="secondary" disabled>
            Cancel
          </Button>
          <Button variant="primary">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoEditPanel;
