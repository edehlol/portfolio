import { ChevronRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';

const ProjectSquare = ({ title, color }: { title: string; color?: string }) => {
  return (
    <div
      className={`m-4 ${
        color ? color : 'bg-blue-600'
      } h-64 w-64 rounded-3xl px-8 py-4 drop-shadow-lg flex flex-col justify-end hover:cursor-pointer text-white`}
    >
      <h1 className="text-lg font-semibold text-left">{title}</h1>

      {/* <div className="flex items-center justify-end">
        <p className="text-right ">See project</p>
        <ChevronRightIcon className="h-5" />
      </div> */}
    </div>
  );
};
export default ProjectSquare;
