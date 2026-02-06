"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LuMenu, LuX } from "react-icons/lu";
import NavLinks from "./NavLinks";
import LogoutButton from "./LogoutButton";

// Definindo a interface para as props
interface SidebarProps {
  user: {
    name?: string | null;
    email?: string | null;
  };
}

export default function Sidebar({ user }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Fecha a sidebar automaticamente ao clicar em um link
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* --- BOTÃO MOBILE --- */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 bg-neutral-800 text-white rounded-lg shadow-lg md:hidden hover:bg-neutral-700 transition-colors cursor-pointer"
      >
        <LuMenu size={24} />
      </button>

      {/* --- OVERLAY --- */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* --- SIDEBAR PRINCIPAL --- */}
      <aside
        className={`
          fixed md:relative z-50 
          inset-y-0 left-0 
          h-dvh w-64 
          bg-neutral-900 border-r border-neutral-800 
          flex flex-col justify-between p-6
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
        `}
      >
        {/* Cabeçalho da Sidebar */}
        <div className="flex flex-col gap-10">
          <div className="px-2 flex items-center justify-between">
            <Image
              src={"/images/logo-tmr.svg"}
              alt="Logo TrackMyRiffs"
              width={100}
              height={50}
              priority
            />
            
            {/* Botão de Fechar */}
            <button 
              onClick={() => setIsOpen(false)}
              className="md:hidden text-neutral-400 hover:text-white"
            >
              <LuX size={24} />
            </button>
          </div>

          <NavLinks />
        </div>

        {/* Rodapé da Sidebar */}
        <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="relative shrink-0 w-10 h-10 rounded-full overflow-hidden border border-neutral-700">
              <Image
                src={"/images/profile.png"}
                alt="Foto de perfil"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-bold text-neutral-100 truncate">
                {user.name || "Usuário"}
              </span>
              <span className="text-xs text-neutral-500 truncate">
                {user.email}
              </span>
            </div>
          </div>

          <LogoutButton />
        </div>
      </aside>
    </>
  );
}