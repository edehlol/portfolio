import ProjectSquare from './ProjectSquare';

const ProjectGrid = () => {
  return (
    <div className="flex flex-wrap max-w-screen-md">
      <ProjectSquare title="Blog" color="bg-red-500" />
      <ProjectSquare title="Projects" color="bg-purple-500" />
      <ProjectSquare title="Test" color="bg-yellow-500" />
      <ProjectSquare title="Quiz" color="bg-blue-500" />
    </div>
  );
};
export default ProjectGrid;
