import Navbar from './Navbar';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen text-black dark:text-white bg-white dark:bg-bg-dark flex flex-col items-center">
      <div>
        <Navbar />
      </div>

      <div className="pt-8 container flex justify-center w-full">{children}</div>
    </div>
  );
};
export default Layout;
