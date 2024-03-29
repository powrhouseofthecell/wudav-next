import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
const Expertise = () => {
   return (
      <>
         <PageSEO
            title={`Expertise - ${siteMetadata.title}`}
            description={siteMetadata.description}
         />
         <h1 className="mt-36 text-center text-3xl">Under Construction 🚧</h1>
      </>
   );
};
export default Expertise;
