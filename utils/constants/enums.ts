export enum ComponentTypeNames {
  ERROR404 = "404",
  ACCORDTIONV1 = "accordionv1",
  ACCORDTIONV2 = "accordionv2",
  AZUKIGRID = "azukigrid",
  MULTILEVELDROPDOWN = "multilevel-dropdown",
  RANDOMCOLORTEXTSELECTION = "random-color-text-selection",
  PROGRESSBAR = "progress-bar",
}

export const ComponentNames = {
  [ComponentTypeNames.ACCORDTIONV1]: {
    label: "Accordion V1",
    href: ComponentTypeNames.ACCORDTIONV1,
    title: "Accordion List",
    desc: `Accordion Items where you can have multiple items to be opened at one
    time`,
    url: "Accordion",
  },
  [ComponentTypeNames.ACCORDTIONV2]: {
    label: "Accordion V2",
    href: ComponentTypeNames.ACCORDTIONV2,
    title: "Accordion List Version 2",
    desc: `Accordion Items where you can only strictly have one item opened at
    any point in time`,
    url: "AccordionVer2",
  },
  [ComponentTypeNames.AZUKIGRID]: {
    label: "Azuki Grid Display",
    href: ComponentTypeNames.AZUKIGRID,
    title: "Azuki Grid Display - Not Clickable",
    desc: `Azuki Grid Display is inspired from https://www.azuki.com/mindmap and
    strictly note that it is limited to only 5 items. If you want to fit
    more items, you should manually adjust the grid to your requirements.`,
    url: "AzukiGridDisplay",
  },
  [ComponentTypeNames.MULTILEVELDROPDOWN]: {
    label: "Multilevel Dropdown",
    href: ComponentTypeNames.MULTILEVELDROPDOWN,
    title: "Multilevel Dropdown",
    desc: `Multilevel Dropdown Menu that allows user to navigate through items in each level of menu`,
    url: "Multilevel-Dropdown",
  },
  [ComponentTypeNames.RANDOMCOLORTEXTSELECTION]: {
    label: "Random Color Text Selection",
    href: ComponentTypeNames.RANDOMCOLORTEXTSELECTION,
    title: "Random Color Text Selection",
    desc: `A random background highlight color will be used when you highlight a text`,
    url: "Random-Color-Text-Selection",
  },
  [ComponentTypeNames.PROGRESSBAR]: {
    label: "Progress Bar",
    href: ComponentTypeNames.PROGRESSBAR,
    title: "Progress Bar",
    desc: `Progress bar which includes animation on load`,
    url: "Progress-Bar",
  },
  [ComponentTypeNames.ERROR404]: {
    label: "Error 404",
    href: ComponentTypeNames.ERROR404,
    title: "Error 404",
    desc: `Error 404 is a page for losted souls`,
    url: "Error404",
  },
};

export enum SocialEnums {
  TWITTER = "twitter",
  DISCORD = "discord",
  OPENSEA = "opensea",
  LINKEDIN = "linkedin",
  WEBSITE = "website",
  INSTAGRAM = "instagram",
  YOUTUBE = "youtube",
  GITHUB = "github",
}

export const SocialInfo = {
  [SocialEnums.TWITTER]: {
    label: SocialEnums.TWITTER,
    href: "placeholder for future use",
  },
  [SocialEnums.DISCORD]: {
    label: SocialEnums.DISCORD,
    href: "placeholder for future use",
  },
  [SocialEnums.OPENSEA]: {
    label: SocialEnums.OPENSEA,
    href: "placeholder for future use",
  },
  [SocialEnums.LINKEDIN]: {
    label: SocialEnums.LINKEDIN,
    href: "placeholder for future use",
  },
  [SocialEnums.WEBSITE]: {
    label: SocialEnums.WEBSITE,
    href: "placeholder for future use",
  },
  [SocialEnums.INSTAGRAM]: {
    label: SocialEnums.INSTAGRAM,
    href: "placeholder for future use",
  },
  [SocialEnums.YOUTUBE]: {
    label: SocialEnums.YOUTUBE,
    href: "placeholder for future use",
  },
  [SocialEnums.GITHUB]: {
    label: SocialEnums.GITHUB,
    href: `https://github.com/mongchanghsi/ui-stockpile/tree/master/components`,
  },
};
