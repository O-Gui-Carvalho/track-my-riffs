"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuHouse, LuList, LuListMusic, LuFileMusic } from "react-icons/lu";

const navLinks = [
  { name: 'Início', href: '/dashboard', icon: LuHouse },
  { name: 'Setlist Completo', href: '/dashboard/setlist', icon: LuList },
  { name: 'Adicionar Música', href: '/dashboard/musicas', icon: LuListMusic },
  { name: 'Adicionar Banda', href: '/dashboard/bandas', icon: LuFileMusic },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
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
  );
}