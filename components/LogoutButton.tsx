"use client";

import { signOut } from '@/app/actions/auth';
import { LuLogOut } from "react-icons/lu";

export default function LogoutButton() {
  return (
    <button 
      onClick={() => signOut()}
      title="Sair"
      className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
    >
      <LuLogOut className='text-xl'/>
    </button>
  );
}