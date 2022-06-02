export enum ComponentTypeNames {
  ERROR404 = '404',
  ACCORDTIONV1 = 'accordionv1',
  ACCORDTIONV2 = 'accordionv2',
  AZUKIGRID = 'azukigrid',
}

export const ComponentNames = {
  [ComponentTypeNames.ACCORDTIONV1]: {
    label: 'Accordion V1',
    href: ComponentTypeNames.ACCORDTIONV1,
    title: '',
    desc: '',
    url: '',
  },
  [ComponentTypeNames.ACCORDTIONV2]: {
    label: 'Accordion V2',
    href: ComponentTypeNames.ACCORDTIONV2,
    title: '',
    desc: '',
    url: '',
  },
  [ComponentTypeNames.AZUKIGRID]: {
    label: 'Azuki Grid Display',
    href: ComponentTypeNames.AZUKIGRID,
    title: '',
    desc: '',
    url: '',
  },
};

export enum SocialEnums {
  TWITTER,
  DISCORD,
  OPENSEA,
  LINKEDIN,
  WEBSITE,
  INSTAGRAM,
  YOUTUBE,
  GITHUB,
}
