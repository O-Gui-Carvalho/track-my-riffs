import React from 'react'
import Navbar from '@/components/Navbar'
import { auth } from '@/lib/auth/server'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function layout({ children }: { children: React.ReactNode }) {
  const { data: session } = await auth.getSession();

  if (!session?.user) {
    redirect('/');
  }

  return (
    <div className='h-dvh flex flex-row overflow-hidden bg-neutral-950'>
        <div className='flex-none w-0 md:w-64'>
            <Navbar />
        </div>

        {/* Conteúdo principal */}
        <div className="grow overflow-y-auto h-full relative">
            {children}
        </div>
    </div>
  );
}