"use client";

import { useState, useRef, useEffect } from "react";
import { TbEdit, TbTrash } from "react-icons/tb";
import { updateMusicStatus, deleteMusic } from "@/app/actions/music";

interface MusicActionsProps {
    musicId: number;
    currentStatus: string;
}

export default function MusicActions({ musicId, currentStatus }: MusicActionsProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Fecha o menu de status se o usuário clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Lida com a exclusão
    const handleDelete = async () => {
        const isConfirmed = window.confirm("Tem certeza que deseja excluir esta música do seu setlist?");
        if (isConfirmed) {
            await deleteMusic(musicId);
        }
    };

    // Lida com a troca de status
    const handleStatusChange = async (newStatus: string) => {
        await updateMusicStatus(musicId, newStatus);
        setIsMenuOpen(false); // Fecha o menu após escolher
    };

    const statuses = ['Aprender', 'Aprendendo', 'Aprendido'];

    return (
        <div className="flex justify-end gap-2">
            {/* Wrapper do botão de edição e menu */}
            <div className="relative" ref={menuRef}>
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    title="Editar Status" 
                    className='p-2 hover:bg-neutral-700 rounded-lg text-neutral-400 hover:text-blue-500 transition-colors duration-300 cursor-pointer'
                >
                    <TbEdit size={20}/>
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-36 bg-neutral-800 border border-neutral-700 rounded-xl shadow-xl z-50 overflow-hidden flex flex-col py-1">
                        {statuses.map(status => (
                            <button 
                                key={status} 
                                onClick={() => handleStatusChange(status)}
                                className={`
                                    text-left px-4 py-2 text-sm transition-colors cursor-pointer
                                    ${status === currentStatus 
                                        ? 'bg-neutral-700/50 text-white font-medium cursor-default' 
                                        : 'text-neutral-400 hover:bg-neutral-700 hover:text-neutral-200'
                                    }
                                `}
                                disabled={status === currentStatus}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Botão de Excluir */}
            <button 
                onClick={handleDelete} 
                title="Excluir" 
                className='p-2 hover:bg-neutral-700 rounded-lg text-neutral-400 hover:text-red-500 transition-colors duration-300 cursor-pointer'
            >
                <TbTrash size={20} />
            </button>
        </div>
    );
}