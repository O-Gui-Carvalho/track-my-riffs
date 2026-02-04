import Image from 'next/image';
import { auth } from '@/lib/auth/server';
import NavLinks from './NavLinks';
import LogoutButton from './LogoutButton';

export default async function Navbar() {
  const { data: session } = await auth.getSession();

  return (
    <nav className='h-screen w-64 bg-neutral-900 p-6 flex flex-col justify-between border-r border-neutral-800'>
      
      <div className="flex flex-col gap-10">
        <div className="px-2">
          <Image src={'/images/logo-tmr.svg'} alt='Logo TrackMyRiffs' width={100} height={50} priority />
        </div>

        {/* Componente de Cliente para os Links */}
        <NavLinks />
      </div>

      {/* Seção do Perfil / Rodapé */}
      <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="relative shrink-0 w-10 h-10 rounded-full overflow-hidden border border-neutral-700">
            <Image 
              src={'/images/profile.png'} 
              alt='Foto de perfil' 
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className='text-sm font-bold text-neutral-100 truncate'>
              {session?.user.name || "Usuário"}
            </span>
            <span className='text-xs text-neutral-500 truncate'>
              {session?.user.email}
            </span>
          </div>
        </div>
        
        {/* Componente de Cliente para o Logout */}
        <LogoutButton />
      </div>

    </nav>
  );
}