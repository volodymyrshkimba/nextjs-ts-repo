'use client';

import React from 'react';
import Button from './components/button';

export interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <p>Something went wrong {error.message}</p>
          <Button type="button" onClick={() => reset()}>
            Click here to fix
          </Button>
        </div>
      </body>
    </html>
  );
}
