"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuFileMusic, LuHouse, LuList, LuListMusic } from "react-icons/lu";
import { GoGear } from "react-icons/go";

export default function Navbar() {
  const pathname = usePathname();

  // Links provisórios
  const navLinks = [
    { name: 'Início', href: '/dashboard', icon: LuHouse },
    { name: 'Setlist Completo', href: '/dashboard/setlist', icon: LuList },
    { name: 'Adicionar Música', href: '/dashboard/musicas', icon: LuListMusic },
    { name: 'Adicionar Banda', href: '/dashboard/bandas', icon: LuFileMusic },
  ];

  return (
    <nav className='h-screen w-64 bg-neutral-900 p-6 flex flex-col justify-between border-r border-neutral-800'>
      
      <div className="flex flex-col gap-10">
        <div className="px-2">
          <Image src={'/images/logo-tmr.svg'} alt='Logo TrackMyRiffs' width={100} height={50} priority />
        </div>

        {/* Links de Navegação */}
        <ul className='flex flex-col gap-2'>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={`
                    flex items-center p-3 rounded-xl gap-4 transition-all duration-200
                    ${isActive 
                      ? 'bg-neutral-700 text-white shadow-lg' 
                      : 'text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200'}
                  `}
                >
                  <Icon className="text-2xl" />
                  <span className="font-medium">{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Seção do Perfil / Rodapé */}
      <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-700">
            <Image 
              src={'/images/profile.png'} 
              alt='Foto de perfil' 
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className='text-sm font-bold text-neutral-100 truncate w-24'>Guilherme</span>
            <span className='text-xs text-neutral-500 truncate w-24'>email@exemplo.com</span>
          </div>
        </div>
        
        <button 
          title="Configurações"
          className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
        >
          <GoGear className='text-xl'/>
        </button>
      </div>

    </nav>
  );
}