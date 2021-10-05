import { MoonIcon as MoonOutline, ViewGridIcon as GridOutline } from '@heroicons/react/outline';
import { MoonIcon as MoonFiled, ViewGridIcon as GridFilled } from '@heroicons/react/solid';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const toggleDarkmode = () => {};
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const GridIconColor = () => {
    switch (router.pathname) {
      case '/blog':
        return 'text-red-500';
      case '/projects':
        return 'text-purple-500';
      default:
        return '';
    }
  };
  const renderPageTitle = () => {
    switch (router.pathname) {
      case '/blog':
        return '~/blog';
      case '/projects':
        return '~/projects';
      case 'about':
        return '~/about';
      default:
        return '~';
    }
  };
  const renderDarkmodeBtn = () => {
    if (mounted) {
      return theme === 'dark' ? (
        <MoonFiled className="h-8 text-yellow-300" onClick={() => setTheme('light')} />
      ) : (
        <MoonOutline className="h-8" onClick={() => setTheme('dark')} />
      );
    }
  };

  return (
    <div className="border-b h-16 flex items-center w-screen">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" passHref>
            <GridFilled
              className={`h-8 hover:cursor-pointer transform hover:scale-90 duration-75 ease-in-out ${GridIconColor()}`}
            />
          </Link>
          <h2 className="ml-2 font-semibold">{renderPageTitle()}</h2>
        </div>
        {renderDarkmodeBtn()}
      </div>
    </div>
  );
};

export default Navbar;
