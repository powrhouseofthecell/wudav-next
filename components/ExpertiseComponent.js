import data from '@/data/expertiseData';

const ExpertiseComponent = (slug) => {
   return (
      <>
         {/* Image that can be same for all or path can be taken from expertiseData.js file */}
         {/* Process the slug can be exact or similar to the one in the data file */}
         {/* Out put the header // Best Digital Marketing in Anantnag */}
         {/* Take data from the expertiseData.js file and use in for description */}
         <h1>{slug.slug}</h1>
      </>
   );
};

export default ExpertiseComponent;
