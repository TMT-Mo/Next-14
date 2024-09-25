declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module "*.svg?icon" {
  const component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default component;
}
