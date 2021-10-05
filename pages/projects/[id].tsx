import Layout from '../../components/Layout';

const ProjectPage = () => {
  return <Layout>testing</Layout>;
};

export const getStaticPaths = async () => {
  const paths = [{ params: { id: '1' } }];
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }: { params: {}[] }) => {
  return {
    props: {
      params,
    },
  };
};

export default ProjectPage;
