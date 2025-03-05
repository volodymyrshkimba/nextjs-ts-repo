'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/app/components/header';
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
    <>
      <Header>Company {id}</Header>
    </>
  );
}
