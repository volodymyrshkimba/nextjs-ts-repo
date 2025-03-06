'use client';

import React, { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const [id, setId] = useState('');
  useEffect(() => {
    const getId = async () => {
      const id = (await params).id;
      setId(id);
    };
    getId();

    if (Number.isNaN(Number(id))) {
      notFound();
    }
  });

  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${id})`}</p>
    </div>
  );
}
