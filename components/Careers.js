import Image from 'next/image';
const Careers = () => {
   const imageSrc = '/static/images/careers.png';
   return (
      <>
         <Image layout="intrinsic" width={1100} height={300} alt="Contact Image" src={imageSrc} />
         <h1 className="my-14 text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Work with Wudav
         </h1>
         <div className="ml-auto mr-auto w-9/12">
            <p>
               Individuals with love for creativity are welcome. And if you hate your current job
               and wish to do something creative, we have our arms open for you.
            </p>

            <p className="my-3">
               We would love to work with design enthusiasts, copywriters, social media managers,
               digital marketing experts, content writers, bloggers, influencers, script writers,
               voice over artists, DOPs, photographers.
            </p>

            <p>We also offer internships to students interested in communications and marketing.</p>

            <p>Share a letter with us at hr@wudav.com</p>
         </div>
      </>
   );
};

export default Careers;
