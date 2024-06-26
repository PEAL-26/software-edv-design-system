import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';

import { Link } from '../link';
import { MenuLinkProps } from './types';

export function MenuLink(props: MenuLinkProps) {
  const {
    title,
    children,
    type = 'link',
    sizeIcon = 28,
    href = '',
    className,
    icon: Icon,
    onClick,
    ...rest
  } = props;

  const router = useRouter();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();

    if (type === 'button' && href) {
      return router.push(href);
    }

    onClick?.();
  };

  if (type === 'button') {
    return (
      <button
        onClick={handleClick}
        className={twMerge(
          'flex w-full items-center gap-2 bg-white p-3 text-sm font-normal text-black hover:cursor-pointer hover:bg-gray-light/50 hover:no-underline',
          className,
        )}
      >
        {Icon && <Icon size={sizeIcon} className="inline-block max-sm:h-5 max-sm:w-5" />}
        {title || children}
      </button>
    );
  }

  return (
    <Link
      href={href}
      onClick={!href && handleClick}
      className={twMerge(
        'flex  w-full items-center gap-2 bg-white p-3 text-sm text-black hover:cursor-pointer hover:bg-gray-light/50 hover:no-underline',
        className,
      )}
      {...rest}
    >
      {Icon && <Icon size={sizeIcon} className="inline-block max-sm:h-5 max-sm:w-5" />}
      {title || children}
    </Link>
  );
}

export * from './types';
