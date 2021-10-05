import Layout from '../components/Layout';
import Link from 'next/link';

const Projects = () => {
  return (
    <Layout>
      <div className="p-4 w-full">
        {/* <Link href="/projects/1" passHref>
          <div className="h-64 w-ful max-w-screen-md bg-gray-200 rounded-3xl hover:cursor-pointer">
            <div className="p-4">
              <h3 className="text-lg font-semibold">HackerNews</h3>
              <p>A modern front-end redesign of HackerNews.</p>
              <div>
                <button className="border px-4 py-2 bg-gray-400">Source</button>
                <button>Live</button>
              </div>
            </div>
          </div>
        </Link> */}
        <div className="bg-red-400  rounded-3xl px-8 py-4 drop-shadow-lg hover:cursor-pointer w-64">
          HackerNews
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
