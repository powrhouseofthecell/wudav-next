import Image from 'next/image';
const Work = ({
   clientName,
   imgSourceHead,
   imgSourceSection2,
   imgSourceSection3,
   filteredArray,
}) => {
   return (
      <>
         <h1 className="my-14 text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {filteredArray[0].title}
         </h1>
         <Image alt="Client Image" className="" width={1300} height={500} src={imgSourceHead} />
         <Image alt="Client Image" className="" width={1300} height={600} src={imgSourceSection2} />
         <Image alt="Client Image" className="" width={1300} height={600} src={imgSourceSection3} />

         <h2 className="mt-12 text-xl font-bold">{filteredArray[0].description}</h2>
         <p className="mt-6">{filteredArray[0].fullDetails}</p>
      </>
   );
};

export default Work;
