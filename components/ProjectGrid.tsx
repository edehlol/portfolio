import ProjectSquare from './ProjectSquare';

const ProjectGrid = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-2 max-w-screen-md select-none">
      <ProjectSquare title="Blog" color="bg-red-500" href="/blog" />
      <ProjectSquare title="Projects" color="bg-purple-500" href="/projects" />
      <ProjectSquare title="About" color="bg-yellow-500" href="#" />
      <ProjectSquare title="Quiz" color="bg-blue-500" href="#" />
    </div>
  );
};
export default ProjectGrid;
