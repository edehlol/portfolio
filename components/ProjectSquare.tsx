import { ChevronRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectSquare = ({ title, color, href }: { title: string; color?: string; href: string }) => {
  return (
    <Link href={href} passHref>
      <div
        className={`m-4 ${
          color ? color : 'bg-blue-600'
        } transform hover:scale-95 duration-75 h-64 w-64 rounded-3xl px-8 py-4 drop-shadow-lg flex flex-col justify-end hover:cursor-pointer text-white`}
      >
        <h1 className="text-lg font-semibold text-left">{title}</h1>
      </div>
    </Link>
  );
};
export default ProjectSquare;
