import React from "react";
import sampleProperty from "../../assets/images/sample-property.jpg";
import { Button } from "../common/Button";

interface ProjectCardProps {
  code: string;
  title: string;
  description: string;
  status?: string;
  comingSoon?: boolean;
  image?: string;
  members?: string[]; // array of user avatar URLs
}

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
    <div className="flex flex-col h-full w-full bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full aspect-video h-auto object-cover"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          <span className="px-2 py-1 bg-white/70 text-xs font-semibold rounded">
            {status}
          </span>
          {comingSoon && (
            <span className="px-2 py-1 bg-white/70 text-xs font-semibold rounded">
              COMING SOON
            </span>
          )}
        </div>
      </div>
      <div className="flex-1 flex flex-col px-3 py-2">
        <div className="flex items-center gap-2 font-bold text-sm tracking-tight">
          {code}
          {/* Members avatars */}
          <div className="flex -space-x-2">
            {members.slice(0, 3).map((m, idx) => (
              <img
                key={m + idx}
                src={m}
                alt="Member"
                className="w-6 h-6 rounded-full border-2 border-white shadow"
              />
            ))}
            {members.length > 3 && (
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 border-2 border-white text-xs text-gray-600">
                +{members.length - 3}
              </span>
            )}
          </div>
        </div>
        <div className="text-dim-gray text-sm mb-3 line-clamp-2">
          {description}
        </div>
        <Button
          to={`/project/${code}`}
          variant="primary"
          size="md"
          fullWidth
          className="text-xs font-medium bg-black text-white"
        >
          View Project
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
