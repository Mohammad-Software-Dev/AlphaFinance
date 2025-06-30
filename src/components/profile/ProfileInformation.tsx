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
        <div className="text-xs md:text-sm font-normal">
          United Arab Emirates,Dubai
        </div>
      </div>
    </div>
    <div className="mb-3 space-y-1 text-base flex flex-col pb-4">
      <span className="font-norma text-xs md:text-sm ">
        <span className="font-medium text-xs md:text-sm ">Bio: </span>Lorem
        ipsum dolor sit amet consectetur.
      </span>
      <span className="font-norma text-xs md:text-sm ">
        <span className="font-medium text-xs md:text-sm ">Name: </span>Aron
        White
      </span>
      <span className="font-norma text-xs md:text-sm ">
        <span className="font-medium text-xs md:text-sm ">Phone: </span>
        (44)123-456-78
      </span>
      <span className="font-norma text-xs md:text-sm ">
        <span className="font-medium text-xs md:text-sm ">Email Address: </span>
        arroragaur@gmail.com
      </span>
      <span className="font-norma text-xs md:text-sm ">
        <span className="font-medium text-xs md:text-sm ">Location: </span>
        United Arab Emirates,Dubai
      </span>
      <div className="flex items-center gap-2">
        <span className="font-medium text-xs md:text-sm ">Social:</span>
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
