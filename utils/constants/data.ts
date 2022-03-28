import Image1 from '../../public/assets/image_1.png';
import Image2 from '../../public/assets/image_2.png';
import Image3 from '../../public/assets/image_3.png';
import Image4 from '../../public/assets/image_4.png';
import Image5 from '../../public/assets/image_5.png';
import Image6 from '../../public/assets/image_6.png';
export interface IFiveItemList {
  number: number;
  title: string;
  content: string;
}

export const FiveItemLists: IFiveItemList[] = [
  {
    number: 1,
    title: 'Title 1',
    content: 'Content 1',
  },
  {
    number: 2,
    title: 'Title 2',
    content: 'Content 2',
  },
  {
    number: 3,
    title: 'Title 3',
    content: 'Content 3',
  },
  {
    number: 4,
    title: 'Title 4',
    content: 'Content 4',
  },
  {
    number: 5,
    title: 'Title 5',
    content: 'Content 5',
  },
];

export interface ISixImageList {
  image: any;
  title: string;
  content: string;
}

export const SixImageLists: ISixImageList[] = [
  {
    image: Image1,
    title: 'Title 1',
    content: 'Content 1',
  },
  {
    image: Image2,
    title: 'Title 2',
    content: 'Content 2',
  },
  {
    image: Image3,
    title: 'Title 3',
    content: 'Content 3',
  },
  {
    image: Image4,
    title: 'Title 4',
    content: 'Content 4',
  },
  {
    image: Image5,
    title: 'Title 5',
    content: 'Content 5',
  },
  {
    image: Image6,
    title: 'Title 6',
    content: 'Content 6',
  },
];

export const SixImageLists2: ISixImageList[] = [
  {
    image: Image6,
    title: 'Title 6',
    content: 'Content 6',
  },
  {
    image: Image1,
    title: 'Title 1',
    content: 'Content 1',
  },
  {
    image: Image4,
    title: 'Title 4',
    content: 'Content 4',
  },

  {
    image: Image2,
    title: 'Title 2',
    content: 'Content 2',
  },
];

export const SixImageLists3: ISixImageList[] = [
  {
    image: Image4,
    title: 'Title 4',
    content: 'Content 4',
  },
  {
    image: Image5,
    title: 'Title 5',
    content: 'Content 5',
  },
];
