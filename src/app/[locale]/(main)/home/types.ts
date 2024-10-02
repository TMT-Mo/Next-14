import { StaticImageData } from "next/image";

export interface IVietNamData {
  image: StaticImageData;
  title: string;
  brief: string;
  description: string;
  id: number;
  createdAt: number;
}
