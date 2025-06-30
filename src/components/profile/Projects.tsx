import React from "react";
import ProjectCard from "./ProjectCard";

const sampleMembers = [
  "/avatars/user1.png",
  "/avatars/user2.png",
  "/avatars/user3.png",
  "/avatars/user4.png",
];

const Projects: React.FC = () => (
  <section>
    <h2 className="text-2xl font-semibold mb-1">Projects</h2>
    <p className="mb-6 text-sm text-gray-700">Architects design houses</p>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
      <div className="flex flex-col items-center justify-center h-full bg-gray-100 rounded-xl border border-gray-200 cursor-pointer transition hover:bg-gray-200">
        <span className="text-4xl text-gray-400">+</span>
        <span className="text-gray-400 mt-2">New tab</span>
      </div>
    </div>
  </section>
);

export default Projects;
