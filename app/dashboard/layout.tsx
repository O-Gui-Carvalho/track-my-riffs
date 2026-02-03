import React from 'react'
import Sidenav from '@/components/Navbar'
import { auth } from '@/lib/auth/server'
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic'

export default async function layout( { children } : { children: React.ReactNode } ) {
  const { data: session } = await auth.getSession();

  if (!session?.user) {
    redirect ('/')
  }

  return (
    <div className='h-dvh flex flex-col md:flex-row md:overflow-hidden'>
        <div className='w-full flex-none md:w-64'>
            <Sidenav />
        </div>
        <div className="grow md:overflow-y-auto">
            {children}
        </div>
    </div>
  );
}
