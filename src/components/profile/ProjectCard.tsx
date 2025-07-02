import React from "react";
import sampleProperty from "../../assets/images/sample-property.jpg";
import { Link } from "react-router-dom";
// import { Button } from "../common/Button";

interface ProjectCardProps {
  code: string;
  title: string;
  description: string;
  status?: string;
  comingSoon?: boolean;
  image?: string;
  members?: string[];
}
const bgClasses = [
  "bg-profile-blue",
  "bg-profile-pink",
  "bg-profile-purple",
  "bg-profile-light-blue",
];
const ProjectCard: React.FC<ProjectCardProps> = ({
  code = "DXBDIFC007",
  title = "Lorem ipsum dolor sit amet consectetur.",
  description = "Lorem ipsum dolor sit amet consectetur.",
  status = "DXB",
  comingSoon = true,
  image = sampleProperty,
  members = [],
}) => {
  return (
    <Link to={`/project/${code}`}>
      <div className="flex flex-col h-full w-full  overflow-hidden transition-transform duration-200 hover:-translate-y-1">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full aspect-video h-auto object-cover rounded-sm"
          />
          <div className="absolute top-2 left-2 flex gap-2">
            <span className="px-2 py-1 bg-white/70 text-xs font-semibold rounded-sm">
              {status}
            </span>
            {comingSoon && (
              <span className="px-2 py-1 bg-white/70 text-xs font-semibold rounded-sm">
                COMING SOON
              </span>
            )}
          </div>
        </div>
        <div className="flex-1 flex flex-col py-2">
          <div className="flex items-center gap-2 font-medium text-sm tracking-tight">
            {code}
            {/* Members avatars */}
            <div className="flex -space-x-2 ">
              {members.slice(0, 3).map((m, idx) => (
                <img
                  key={m + idx}
                  src={m}
                  alt="Member"
                  className={`w-6 h-6 rounded-full border-2 border-white  transition-transform duration-200 hover:-translate-y-1 ${
                    bgClasses[idx % bgClasses.length]
                  }`}
                />
              ))}
              {members.length > 3 && (
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-light-silver  text-xs transition-transform duration-200 hover:-translate-y-1">
                  +{members.length - 3}
                </span>
              )}
            </div>
          </div>
          <div className="text-dim-gray text-sm mb-3 ">{description}</div>
        </div>
        {/* <Button
        to={``}
        variant="primary"
        size="md"
        fullWidth
        className="text-xs font-medium bg-black text-white"
      >
        View Project
      </Button> */}
      </div>
    </Link>
  );
};

export default ProjectCard;
