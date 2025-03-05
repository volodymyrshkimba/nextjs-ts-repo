import Link from 'next/link';
import React from 'react';

// export interface notFoundProps {}

export default function notFound({}: object) {
  return (
    <div>
      <p>Could not found company</p>
      <Link href="/companies" className="text-blue-500">
        Back to companies
      </Link>
    </div>
  );
}
