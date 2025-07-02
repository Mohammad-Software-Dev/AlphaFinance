import React from "react";
import FacebookIcon from "../../assets/icons/facebook.svg?react";
import InstagramIcon from "../../assets/icons/instagram.svg?react";
import LinkedinIcon from "../../assets/icons/linkedin.svg?react";
import YoutubeIcon from "../../assets/icons/youtube.svg?react";
import EditIcon from "../../assets/icons/edit.svg?react";
import userImage from "../../assets/images/Daivd.png";

const ProfileInformation: React.FC = () => (
  <section>
    <h4 className="mb-4 md:mb-6">Profile Information</h4>
    <div className="flex items-center gap-4 mb-4">
      <img
        src={userImage}
        alt="David Peters"
        className="md:w-16 md:h-16 w-12 h-12 rounded-full object-cover "
      />
      <div>
        <div className="flex justify-between gap-6 items-center">
          <h4 className=" text-black flex items-center gap-2">David Peters</h4>
          <EditIcon className="w-5 h-5 cursor-pointer" />
        </div>
        <div className="text-sm md:text-base font-normal">
          United Arab Emirates,Dubai
        </div>
      </div>
    </div>
    <div className="mb-3  text-base flex flex-col pb-4 space-y-3">
      <p className="font-normal text-sm md:text-base ">
        <span className="font-medium text-sm md:text-base ">Bio: </span>Lorem
        ipsum dolor sit amet consectetur.
      </p>
      <p className="font-normal text-sm md:text-base ">
        <span className="font-medium text-sm md:text-base ">Name: </span>Aron
        White
      </p>
      <p className="font-normal text-sm md:text-base ">
        <span className="font-medium text-sm md:text-base ">Phone: </span>
        (44)123-456-78
      </p>
      <p className="font-normal text-sm md:text-base ">
        <span className="font-medium text-sm md:text-base ">
          Email Address:{" "}
        </span>
        arroragaur@gmail.com
      </p>
      <p className="font-normal text-sm md:text-base ">
        <span className="font-medium text-sm md:text-base ">Location: </span>
        United Arab Emirates,Dubai
      </p>
      <div className="flex items-center gap-2">
        <span className="font-medium text-sm md:text-base ">Social:</span>
        <a href="#" className="hover:opacity-70">
          <FacebookIcon className="w-5 h-5" />
        </a>
        <a href="#" className="hover:opacity-70">
          <InstagramIcon className="w-5 h-5" />
        </a>
        <a href="#" className="hover:opacity-70">
          <LinkedinIcon className="w-5 h-5" />
        </a>
        <a href="#" className="hover:opacity-70">
          <YoutubeIcon className="w-5 h-5" />
        </a>
      </div>
    </div>
  </section>
);

export default ProfileInformation;
