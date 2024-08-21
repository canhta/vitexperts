import { StaticImageData } from 'next/image';

export type BlogData = {
  id: string;
  number: string;
  title: string;
  image: StaticImageData;
  avatar: StaticImageData;
  name: string;
  position: string;
  comment: string;
  date: string;
};
