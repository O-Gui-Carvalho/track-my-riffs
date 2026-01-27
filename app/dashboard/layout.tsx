import React from 'react';
import Sidenav from '@/components/Navbar';

export default function layout( { children } : { children: React.ReactNode } ) {
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
