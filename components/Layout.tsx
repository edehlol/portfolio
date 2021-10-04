import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" min-h-screen text-black dark:text-white bg-white dark:bg-bg-dark">
      <Navbar />
      <div className="px-8">{children}</div>
    </div>
  );
};
export default Layout;
