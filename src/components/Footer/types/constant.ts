export type FooterProps = {
    Footer: Array<{
      footerContent: {
        storeTitle: string;
        businessTitle: string;
        languageTitle: string;
        awarTitle: string;
        clienteleTitle: string;
        carrersTitle: string;
        linkTitle: string;
        linkSecond: string;
        serviceTitle: string;
        subscribeTitle: string;
        contactusTitle: string;
        addressTitle: string;
        stores: Array<Record<string, string>>;
        businessPartners: string;
        awards: Array<{
          src: string;
          alt: string;
        }>;
        clients: string;
        careers: Array<Record<string, string>>;
        links: Array<Record<string, string>>;
        services: Array<Record<string, string>>;
        address: string;
        contacts: Array<{
          name: string;
          href: string;
        }>;
        socialIcons: Array<{
          src: string;
          alt: string;
          imgclass?: string; // optional
        }>;
        copyright: string;
        privacyPolicy: string;
      };
    }>;
  };
  