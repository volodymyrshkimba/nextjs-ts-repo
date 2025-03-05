'use client';

import Button from '@/app/components/button';
import React from 'react';

export interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <p>Something went wrong inside slot sales {error.message}</p>
      <Button type="button" onClick={() => reset()}>
        Click here to fix
      </Button>
    </div>
  );
}
