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
  const renderDarkmodeBtn = () => {
    if (mounted) {
      return theme === 'dark' ? (
        <MoonFiled className="h-8 text-yellow-300" onClick={() => setTheme('light')} />
      ) : (
        <MoonOutline className="h-8" onClick={() => setTheme('dark')} />
      );
    }
  };
  const renderNavigation = () => {
    console.log(router);
    const paths = router.asPath.split('/');
    console.log(paths);

    return paths.map((path, index) => {
      if (path === '') {
        if (index === 0) {
          return <span className="hover:underline hover:cursor-pointer">~</span>;
        }
      } else {
        return (
          <Link href={`/`} passHref>
            <>
              /<span className="hover:underline hover:cursor-pointer">{path}</span>
            </>
          </Link>
        );
      }
    });
  };

  return (
    <div className="border-b h-12 flex justify-center items-center w-screen">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" passHref>
            <GridFilled
              className={`h-8 hover:cursor-pointer transform hover:scale-90 duration-75 ease-in-out ${GridIconColor()}`}
            />
          </Link>
          {/* <h2 className="ml-2 font-semibold">~{router.asPath === '/' ? '' : router.asPath}</h2> */}
          <div className="ml-2 font-semibold">{renderNavigation()}</div>
        </div>
        {renderDarkmodeBtn()}
      </div>
    </div>
  );
};

export default Navbar;
