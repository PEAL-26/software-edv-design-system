import { ElementType, HTMLProps, SVGProps } from 'react';

export interface TableEmptyProps {
  title: string;
  description?: string;
  url?: string;
  buttonText?: string;
  icon?: ElementType<SVGProps<HTMLOrSVGElement>> | ElementType<HTMLProps<HTMLImageElement>>;
  className?: string;
  onClick?(): void;
}

export interface TableEmptyButton {
  title: string;
  url?: string;
  icon?: ElementType<SVGProps<HTMLOrSVGElement>>;
  onClick?(): void;
}
