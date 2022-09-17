import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';

const Home = () => {
   return (
      <>
         <PageSEO title={`Home - ${siteMetadata.title}`} description={siteMetadata.description} />
         <h1 className="mt-36 text-center text-3xl">Hello Wudav</h1>
      </>
   );
};

export default Home;
