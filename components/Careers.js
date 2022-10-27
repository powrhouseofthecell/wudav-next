import Image from 'next/image';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import styles from '../css/general.module.css';

// import { useTheme } from 'next-themes';

const Careers = () => {
   let imageSrc = '/static/images/careers.svg';
   // let imageSrc = '/static/images/careersLight.svg';
   // const { theme, setTheme, resolvedTheme } = useTheme();
   // console.log(theme);

   // if (theme === 'light') {
   //    imageSrc = '/static/images/careersDark.svg';
   // }
   return (
      <>
         <PageSEO
            title={`Careers - ${siteMetadata.title}`}
            description={`${siteMetadata.title} blogs about`}
         />
         <Image layout="intrinsic" width={1100} height={300} alt="Career Image" src={imageSrc} />
         <h1 className="my-14 text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <span className={styles.animateGradientText}>Work with Wudav</span>
         </h1>
         <div className="">
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

            <p>
               Share a letter with us at{' '}
               <a className={`font-bold ${styles.link}`} href="mailto:hr@wudav.com">
                  hr@wudav.com
               </a>
            </p>
         </div>
      </>
   );
};

export default Careers;
