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
  TWITTER = 'twitter',
  DISCORD = 'discord',
  OPENSEA = 'opensea',
  LINKEDIN = 'linkedin',
  WEBSITE = 'website',
  INSTAGRAM = 'instagram',
  YOUTUBE = 'youtube',
  GITHUB = 'github',
}

export const SocialInfo = {
  [SocialEnums.TWITTER]: {
    'label': SocialEnums.TWITTER,
    'href': 'placeholder for future use'
  },
  [SocialEnums.DISCORD]: {
    'label': SocialEnums.DISCORD,
    'href': 'placeholder for future use'
  },
  [SocialEnums.OPENSEA]: {
    'label': SocialEnums.OPENSEA,
    'href': 'placeholder for future use'
  },
  [SocialEnums.LINKEDIN]: {
    'label': SocialEnums.LINKEDIN,
    'href': 'placeholder for future use'
  },
  [SocialEnums.WEBSITE]: {
    'label': SocialEnums.WEBSITE,
    'href': 'placeholder for future use'
  },
  [SocialEnums.INSTAGRAM]: {
    'label': SocialEnums.INSTAGRAM,
    'href': 'placeholder for future use'
  },
  [SocialEnums.YOUTUBE]: {
    'label': SocialEnums.YOUTUBE,
    'href': 'placeholder for future use'
  },
  [SocialEnums.GITHUB]: {
    'label': SocialEnums.GITHUB,
    'href': `https://github.com/mongchanghsi/ui-stockpile/tree/master/components`
  }
}