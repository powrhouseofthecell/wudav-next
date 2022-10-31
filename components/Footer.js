import Link from './Link';
import siteMetadata from '@/data/siteMetadata';
import SocialIcon from '@/components/social-icons';
import Image from 'next/image';
import LogoLight from '@/data/logolight.svg';
import LogoDark from '@/data/logodark.svg';

import { useTheme } from 'next-themes';

import styles from '../css/footer.module.css';

export default function Footer() {
   const { theme, setTheme, resolvedTheme } = useTheme();
   return (
      <footer>
         <div className={`${styles.pg_footer}`}>
            <footer className={`${styles.footer}`}>
               <div className={`${styles.footer_content}`}>
                  <div className={`${styles.footer_content_column}`}>
                     <div className={`${styles.footer_logo}`}>
                        <a className={`${styles.footer_logo_link}`} href="#">
                           {theme === 'light' ? <LogoDark /> : <LogoLight />}
                        </a>
                     </div>
                     <div className={`${styles.footer_menu}`}>
                        <h2 className={`${styles.footer_menu_name}`}>Wudav Brand Stories</h2>
                        <hr className="my-5" />
                        <p>
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
                           quaerat?
                        </p>
                     </div>
                  </div>
                  {/* ~ SECTION 1 */}
                  <div className={`${styles.footer_content_column}`}>
                     <div className={`${styles.footer_menu}`}>
                        <h2 className={`${styles.footer_menu_name}`}>Useful links</h2>
                        <ul id="menu-company" className={`${styles.footer_menu_list}`}>
                           <li
                              className={`${styles.menu_item} ${styles.menu_item_type_post_type} ${styles.menu_item_object_page}`}
                           >
                              <Link href="/">Home</Link>
                           </li>
                           <li
                              className={`${styles.menu_item} ${styles.menu_item_type_taxonomy} ${styles.menu_item_object_category}`}
                           >
                              <Link href="/work">Work</Link>
                           </li>
                           <li
                              className={`${styles.menu_item} ${styles.menu_item_type_post_type} ${styles.menu_item_object_page}`}
                           >
                              <Link href="/expertise">Expertise</Link>
                           </li>
                           <li
                              className={`${styles.menu_item} ${styles.menu_item_type_post_type} ${styles.menu_item_object_page}`}
                           >
                              <Link href="/blog">Blog</Link>
                           </li>
                           <li
                              className={`${styles.menu_item} ${styles.menu_item_type_post_type} ${styles.menu_item_object_page}`}
                           >
                              <Link href="/careers">Careers</Link>
                           </li>
                           <li
                              className={`${styles.menu_item} ${styles.menu_item_type_post_type} ${styles.menu_item_object_page}`}
                           >
                              <Link href="/contact">Contact</Link>
                           </li>
                           <li
                              className={`${styles.menu_item} ${styles.menu_item_type_post_type} ${styles.menu_item_object_page}`}
                           >
                              <Link href="/about">About</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className={`${styles.footer_content_column}`}>
                     <div className={`${styles.footer_menu}`}>
                        <h2 className={`${styles.footer_menu_name}`}>Haryana</h2>
                        <ul id="menu_quick_links" className={`${styles.footer_menu_list}`}>
                           <li
                              className={`${styles.menu_item} ${styles.menu_item_type_custom} ${styles.menu_item_object_custom}`}
                           >
                              <span target="_blank" rel="noopener noreferrer" href="#">
                                 54B, Hatch 101,
                              </span>
                           </li>
                           <li
                              className={`${styles.menu_item} ${styles.menu_item_type_custom} ${styles.menu_item_object_custom}`}
                           >
                              <span target="_blank" rel="noopener noreferrer" href="#">
                                 Sector-18, Gurugram, Haryana. India.
                              </span>
                           </li>

                           <h2 className={`${styles.footer_call_to_action_title} pt-6`}>
                              Call or Mail Us
                           </h2>
                           <li
                              className={`${styles.menu_item} ${styles.menu_item_type_post_type}${styles.menu_item_object_page}`}
                           >
                              <a href="mailto:work@wudav.com">work@wudav.com</a>
                           </li>
                           <li
                              className={`${styles.menu_item} ${styles.menu_item_type_post_type}${styles.menu_item_object_page}`}
                           >
                              <a href="tel:+91-9622-888-804">+91-9622-888-804</a>
                           </li>
                           <li
                              className={`${styles.menu_item} ${styles.menu_item_type_post_type}${styles.menu_item_object_page}`}
                           >
                              <a href="tel:+91-1932-358-653">+91-1932-358-653</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  {/* SECTION 2 */}

                  <div className={`${styles.footer_content_column}`}>
                     <div className={`${styles.footer_menu}`}>
                        <h2 className={`${styles.footer_menu_name}`}>Kashmir</h2>
                        <ul id="menu_quick_links" className={`${styles.footer_menu_list}`}>
                           <li
                              className={`${styles.menu_item} ${styles.menu_item_type_custom} ${styles.menu_item_object_custom}`}
                           >
                              <span target="_blank" rel="noopener noreferrer" href="#">
                                 1st Floor, Reshi Complex,
                              </span>
                           </li>
                           <li
                              className={`${styles.menu_item} ${styles.menu_item_type_custom} ${styles.menu_item_object_custom}`}
                           >
                              <span target="_blank" rel="noopener noreferrer" href="#">
                                 Opposite LIC office, <br /> <span>Nai Basti Anantnag</span>
                              </span>
                           </li>

                           <li
                              className={`${styles.menu_item} ${styles.menu_item_type_custom} ${styles.menu_item_object_custom}`}
                           >
                              <span target="_blank" rel="noopener noreferrer" href="#">
                                 Jammu and Kashmir India
                              </span>
                           </li>

                           <h2 className={`${styles.footer_call_to_action_title} pt-6`}>
                              Call or Mail Us
                           </h2>
                           <li
                              className={`${styles.menu_item} ${styles.menu_item_type_post_type}${styles.menu_item_object_page}`}
                           >
                              <a href="mailto:work@wudav.com">work@wudav.com</a>
                           </li>
                           <li
                              className={`${styles.menu_item} ${styles.menu_item_type_post_type}${styles.menu_item_object_page}`}
                           >
                              <a href="tel:+91-9622-888-804">+91-9622-888-804</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  {/* SECTION 3 */}
               </div>
               <h2 className={`${styles.footer_menu_name} ${styles.footLinkHead}`}>
                  Connect with us
               </h2>
               <div className={`${styles.footer_social_links}`}>
                  <svg
                     className={`${styles.footer_social_amoeba_svg}`}
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 236 54"
                  >
                     <path
                        className={`${styles.footer_social_amoeba_path}`}
                        d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"
                     ></path>
                  </svg>
                  <a
                     className={`${styles.footer_social_link} ${styles.linkedin}`}
                     href="https://www.linkedin.com/company/wudavbrands"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <span className={`${styles.hidden_link_text}`}>LinkedIn</span>
                     <svg
                        className={`${styles.footer_social_icon_svg}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                     >
                        <path
                           className={`${styles.footer_social_icon_path}`}
                           d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"
                        ></path>
                     </svg>
                  </a>
                  <a
                     className={`${styles.footer_social_link} ${styles.twitter}`}
                     href="https://twitter.com/Wudavbrands"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <span className={`${styles.hidden_link_text}`}>Twitter</span>
                     <svg
                        className={`${styles.footer_social_icon_svg}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 26 26"
                     >
                        <path
                           className={`${styles.footer_social_icon_path}`}
                           d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219 "
                        ></path>
                     </svg>
                  </a>
                  <a
                     className={`${styles.footer_social_link} ${styles.youtube}`}
                     href="https://www.instagram.com/wudavbrands/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <span className={`${styles.hidden_link_text}`}>Instagram</span>
                     <svg
                        className={`${styles.footer_social_icon_svg}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                     >
                        <path
                           className={`${styles.footer_social_icon_path}`}
                           d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"
                        ></path>
                     </svg>
                  </a>
                  <a
                     className={`${styles.footer_social_link} ${styles.github}`}
                     href="https://www.facebook.com/wudavbrandstories"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <span className={`${styles.hidden_link_text}`}>Facebook</span>
                     <svg
                        className={`${styles.footer_social_icon_svg}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                     >
                        <path
                           className={`${styles.footer_social_icon_path}`}
                           d="
                        M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M19.181,11h-1.729 C16.376,11,16,11.568,16,12.718V14h3.154l-0.428,3H16v7.95C15.671,24.982,15.338,25,15,25c-0.685,0-1.354-0.07-2-0.201V17h-3v-3h3 v-1.611C13,9.339,14.486,8,17.021,8c1.214,0,1.856,0.09,2.16,0.131V11z"
                        ></path>
                     </svg>
                  </a>
               </div>
            </footer>
         </div>
      </footer>
   );
}
