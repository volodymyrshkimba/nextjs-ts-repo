import clsx from 'clsx';
import React from 'react';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
  disabled?: boolean;
}

export default function StatusLabel({ children, status, disabled }: StatusLabelProps) {
  return (
    <div
      className={clsx(
        'inline-flex items-center rounded-3xl px-3.5 py-1 text-sm font-medium',
        {
          ['opacity-50 cursor-not-allowed']: disabled,
        },
        status === Status.Active && 'text-green-700 bg-green-100',
        status === Status.NotActive && 'text-red-700 bg-red-100',
        status === Status.Pending && 'text-orange-700 bg-orange-100',
        status === Status.Suspended && 'text-blue-700 bg-blue-100',
      )}
    >
      <div className="w-1 h-1 mr-2 rounded-full bg-current" />
      {children}
    </div>
  );
}
