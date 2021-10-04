import { MoonIcon as MoonOutline } from '@heroicons/react/outline';
import { MoonIcon as MoonFiled } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import { useState } from 'react';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const toggleDarkmode = () => {};
  return (
    <div className="border-b h-16 flex items-center justify-between">
      <nav className="flex">
        <div>Projects</div>
        <div>About me</div>
        <div>Blog</div>
      </nav>

      {theme === 'dark' ? (
        <MoonFiled className="h-8 text-yellow-300" onClick={() => setTheme('light')} />
      ) : (
        <MoonOutline className="h-8 text-black" onClick={() => setTheme('dark')} />
      )}
    </div>
  );
};

export default Navbar;
