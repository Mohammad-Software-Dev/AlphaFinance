import React from "react";
import ProjectCard from "./ProjectCard";

import User1 from "../../assets/images/male.png";
import User2 from "../../assets/images/female.png";
import User3 from "../../assets/images/male_2.png";
import User4 from "../../assets/images/male_3.png";
import Plus from "../../assets/icons/plus.svg?react";
const sampleMembers = [User1, User2, User3, User4];

const Projects: React.FC = () => (
  <section>
    <h4 className="mb-1">Projects</h4>
    <span className="lg:text-base md:text-sm text-xs">
      Architects design houses
    </span>
    <div
      className="grid gap-x-6 gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
  [@media(min-width:2560px)]:grid-cols-5
  [@media(min-width:3840px)]:grid-cols-6  my-2 md:my-3 items-stretch [grid-auto-rows:1fr] "
    >
      <ProjectCard
        code="DXBDIFC007"
        title="DXBDIFC007"
        description="Lorem ipsum dolor sit amet consectetur."
        members={sampleMembers}
      />
      <ProjectCard
        code="DXBDIFC007"
        title="DXBDIFC007"
        description="Lorem ipsum dolor sit amet consectetur."
        members={sampleMembers}
      />
      <ProjectCard
        code="DXBDIFC007"
        title="DXBDIFC007"
        description="Lorem ipsum dolor sit amet consectetur."
        members={sampleMembers}
      />
      {/* Add New tab card */}
      <div className="flex flex-col items-center justify-center h-full bg-ghost-white  cursor-pointer transition hover:bg-light-silver">
        <Plus className="w-14 h-14" />

        <span className="text-dim-gray mt-2">New tab</span>
      </div>
    </div>
  </section>
);

export default Projects;
