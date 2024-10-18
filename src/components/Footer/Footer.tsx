"use client";
import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";
import { usePathname } from "next/navigation";

interface FooterProps {
  footerData: {
    stores: { address: string }[]; // Adjusting to match the structure
    businessPartners: string;
    awards: { src: string; alt: string }[];
    clients: string;
    careers: { career: string }[];
    links: { link: string }[];
    services: { service: string }[];
    contacts: { href: string; name: string }[];
    address: string;
    copyright: string;
    socialIcons: { src: string; alt: string; imgclass?: string }[];
    privacyPolicy: string;
  };
}

const Footer: React.FC<FooterProps> = ({ footerData }) => {
  const pathname = usePathname() || "";
  const componentCode = pathname.split("/")[2]?.toLowerCase();
  const componentCodeourCompany = pathname.split("/")[3]?.toLowerCase();

  return (
    <div className="h-full">
      <div className="border"></div>
      <footer
        className={`${
          ["knowledge-center", "clientele", "our-company"].includes(
            componentCode
          ) || ["our-company"].includes(componentCodeourCompany)
            ? "bg-[#222222] text-white"
            : "bg-white"
        } ${styles.footer}`}
      >
        <div
          style={{
            backgroundImage:
              "url('https://www.nesscoindia.com/Assets/images/shape/wmap.webp')",
          }}
          className={`${styles.bgimagefooter}`}
        ></div>
        <div className="w-full relative m-auto mt-6 lg:p-0 p-3">
          <div className="flex flex-col-reverse lg:flex-row justify-evenly items-start w-full lg:px-5 mb-[-0.10rem]">
            
            {/* Stores and Business Partners */}
            <div className="flex flex-row-reverse lg:flex-row mt-7 lg:mt-0">
              <div className={`${styles.footerlistabout} lg:order-none order-last`}>
                <h3 className={`${styles.footerdesctitle} font-poppins text-sm font-semibold`}>
                  OUR STORES
                </h3>
                <div className="flex flex-col -space-y-6 font-poppins hover:text-red-600 w-12 font-light text-xs">
                  {/* Mapping stores */}
                  {footerData.stores.map((store, index) => (
                    <p key={index}>{store.address}</p>
                  ))}
                </div>
                
                <h3 className={`${styles.footerdesctitle} font-poppins text-sm font-semibold mt-4`}>
                  BUSINESS PARTNERS
                </h3>
                <p className="mt-3 font-light text-xs font-poppins hover:text-red-600 cursor-pointer">
                  {footerData.businessPartners}
                </p>

                <h3 className={`${styles.footerdesctitle} font-poppins text-sm font-semibold mt-4`}>
                  LANGUAGE & REGION
                </h3>
                <p className="mt-3 font-light text-xs font-poppins hover:text-red-600 cursor-pointer">
                  India | English
                </p>

                <h3 className={`${styles.footerdesctitle} font-semibold font-poppins text-sm mt-8`}>
                  AWARDS & CERTIFICATIONS
                </h3>
                <div className="flex flex-row">
                  {/* Mapping awards */}
                  {footerData.awards.map((award, index) => (
                    <img key={index} src={award.src} alt={award.alt} className="w-6 h-6" />
                  ))}
                </div>
              </div>

              {/* Clients and Careers */}
              <div className="flex flex-col w-[18%] relative -left-[10rem] lg:left-16">
                <h3 className="font-semibold font-poppins text-sm">CLIENTELE</h3>
                <div className={styles.footerlistslink}>
                  <Link href="#" passHref>
                    <p className="font-poppins text-xs font-light mt-4 w-[5rem] hover:text-red-600 cursor-pointer">
                      {footerData.clients}
                    </p>
                  </Link>
                </div>

                <h3 className="font-semibold text-sm font-poppins mt-5">CAREERS</h3>
                <div className="text-xs font-light font-poppins -space-y-7 hover:text-red-600 cursor-pointer">
                  {/* Mapping careers */}
                  {footerData.careers.map((career, index) => (
                    <p key={index}>{career.career}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Links and Services */}
            <div className="flex-row flex lg:flex-none lg:mt-0 mt-6 lg:-ml-[30vw]">
              <div className="w-[20%]">
                <h3 className="font-semibold text-sm font-poppins">LINKS</h3>
                <div className="font-poppins text-xs font-light space-y-10 hover:text-red-600">
                  {/* Mapping links */}
                  {footerData.links.map((link, index) => (
                    <Link key={index} href="#" passHref>
                      <p className={styles.footeratags}>{link.link}</p>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="w-[20%] lg:ml-20 ml-10">
                <h3 className="font-semibold text-sm font-poppins">SERVICES</h3>
                <div className="font-poppins font-light text-xs hover:text-red-600 cursor-pointer">
                  {/* Mapping services */}
                  {footerData.services.map((service, index) => (
                    <Link key={index} href="#" passHref>
                      <p className={styles.footeratags}>{service.service}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact and Address */}
            <div className="lg:w-[20%]">
              <h3 className={`${styles.footerdesctitle} font-poppins text-sm font-semibold`}>
                SUBSCRIBE TO NEWSLETTER
              </h3>
              <div className="flex">
                <input
                  placeholder="Enter your email address"
                  className="lg:w-[20rem] w-[22rem] mt-2 h-[2.5rem] rounded-xl border p-2 border-black font-poppins font-light text-xs"
                />
              </div>

              <div className="flex lg:flex-col">
                <div>
                  <h3 className={`${styles.footerdesctitle} font-semibold text-sm font-poppins mt-[1.6rem]`}>
                    CONTACT US
                  </h3>
                  <div className={`${styles.footerlistslink} hover:text-red-600 cursor-pointer font-poppins text-xs`}>
                    {/* Mapping contacts */}
                    {footerData.contacts.map((contact, index) => (
                      <Link key={index} href="#" passHref>
                        <p className={styles.footeratags}>{contact.name}</p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className={`${styles.footerdesctitle} font-poppins text-sm font-semibold lg:mt-5 mt-7`}>
                    ADDRESS
                  </h3>
                  <div className="font-poppins hover:text-red-600 cursor-pointer">
                    {footerData.address}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex justify-between w-full">
            {/* Mapping social icons */}
            <div className="flex space-x-3">
              {footerData.socialIcons.map((icon, index) => (
                <img key={index} src={icon.src} alt={icon.alt} className={`${icon.imgclass || 'h-10'}`} />
              ))}
            </div>
            <div className="font-poppins text-xs mt-4">
              {footerData.copyright}
              <Link href="#" passHref>
                <p className="hover:text-red-600 cursor-pointer">{footerData.privacyPolicy}</p>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
