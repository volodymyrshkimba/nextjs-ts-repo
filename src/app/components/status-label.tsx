import clsx from 'clsx';
import React from 'react';
import { CompanyStatus } from '@/lib/api';

export interface StatusLabelProps {
  status: CompanyStatus;
  disabled?: boolean;
}

const labelByStatus = {
  [CompanyStatus.Active]: 'Active',
  [CompanyStatus.NotActive]: 'Not Active',
  [CompanyStatus.Pending]: 'Pending',
  [CompanyStatus.Suspended]: 'Suspended',
};

export default function StatusLabel({ status, disabled }: StatusLabelProps) {
  return (
    <div
      className={clsx(
        'inline-flex items-center rounded-3xl px-3.5 py-1 text-sm font-medium',
        {
          ['opacity-50 cursor-not-allowed']: disabled,
        },
        status === CompanyStatus.Active && 'text-green-700 bg-green-100',
        status === CompanyStatus.NotActive && 'text-red-700 bg-red-100',
        status === CompanyStatus.Pending && 'text-orange-700 bg-orange-100',
        status === CompanyStatus.Suspended && 'text-blue-700 bg-blue-100',
      )}
    >
      <div className="w-1 h-1 mr-2 rounded-full bg-current" />
      {labelByStatus[status]}
    </div>
  );
}
