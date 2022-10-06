import Image from 'next/image';
import projectsData from '@/data/projectsData';

const Work = ({
   imgSourceHead,
   imgSourceSection2,
   imgSourceSection3,
   clientQueryName,
   // clientTitle,
   // clientDescription,
   // clientFullDetails,
}) => {
   // const fetchedClient = projectsData.find((project) => project.id === clientQueryName);
   // console.log(fetchedClient);
   return (
      <>
         <h1 className="my-14 text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {'Client Name'}
            {/* {fetchedClient.title} */}
         </h1>
         <Image alt="Client Image" className="" width={1300} height={500} src={imgSourceHead} />
         <Image alt="Client Image" className="" width={1300} height={500} src={imgSourceSection2} />
         <Image alt="Client Image" className="" width={1300} height={500} src={imgSourceSection3} />
         {/* <h2 className="mt-12 text-xl font-bold">{clientDescription}</h2>
         <p className="mt-6">{clientFullDetails}</p> */}
      </>
   );
};

export default Work;
