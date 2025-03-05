'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

export interface MagicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export default function MagicButton({ disabled, ...rest }: MagicButtonProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 2) {
      throw Error('Unexpected error');
    }
  }, [count]);
  return (
    <button
      {...rest}
      onClick={() => {
        setCount(count + 1);
      }}
      className={clsx(
        'py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded',
        !disabled && 'hover:bg-gray-800 active:bg-gray-950',
        disabled && 'text-zinc-100',
      )}
    />
  );
}
