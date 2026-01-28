import Link from "next/link"
import { LuArrowLeft, LuPlus } from "react-icons/lu"
import { TbEdit, TbTrash } from "react-icons/tb"
import { musics, bands } from "@/data/database"

// Mapeamento de cores para os status
const statusStyles: { [key: string]: string } = {
    'Aprendido': 'bg-green-500/10 text-green-500 border-green-500/20',
    'Aprender': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    'Aprendendo': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
}

const bandsMap = new Map(bands.map(band => [band.id, band.name]))

export default function SetlistPage() {
    return (
        <section className='flex flex-col p-8 max-w-6xl mx-auto h-dvh overflow-hidden'>
            
            <header className="mb-8 pt-8 shrink-0">
                <Link href="/dashboard" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-4 group w-fit">
                    <LuArrowLeft className="group-hover:-translate-x-1 transition-transform"/>Voltar para o Início
                </Link>
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-white">Setlist</h1>
                        <p className="text-neutral-400 mt-1">Todo o seu repertório</p> 
                    </div>
                    <button className="flex items-center justify-center gap-2 bg-white text-neutral-900 rounded-xl p-3 hover:bg-neutral-400 transition-colors duration-300 cursor-pointer">
                        <LuPlus size={20}/>  Nova Música
                    </button>
                </div>
            </header>

            {/* Container da Tabela com scroll interno */}
            <div className="flex-1 overflow-hidden border border-neutral-800 bg-neutral-900/50 rounded-xl flex flex-col">
                <div className="overflow-y-auto grow">
                    <table className="w-full text-left border-collapse">
                        <thead className="sticky top-0 z-10 bg-neutral-900 border-b border-neutral-800">
                            <tr>
                                <th className="p-4 text-sm font-medium text-neutral-400">Música</th>
                                <th className="p-4 text-sm font-medium text-neutral-400">Banda</th>
                                <th className="p-4 text-sm font-medium text-neutral-400">Status</th>
                                <th className="p-4 text-sm font-medium text-neutral-400 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800">
                            {musics.map((msc) => (
                                <tr key={msc.title} className="group hover:bg-neutral-800 transition-colors duration-300 cursor-pointer">
                                    <td className="p-4 font-medium text-neutral-200">{msc.title}</td>
                                    <td className="p-4 text-neutral-400">
                                        {bandsMap.get(msc.bandId) ?? 'Banda não encontrada'}
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded-full text-xs border ${statusStyles[msc.status] || statusStyles['Nova']}`}>
                                            {msc.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex justify-end gap-2">
                                            <button title="Editar" className='p-2 hover:bg-neutral-700 rounded-lg text-neutral-400 hover:text-green-500 transition-colors duration-300 cursor-pointer'>
                                                <TbEdit size={20}/>
                                            </button>
                                            <button title="Excluir" className='p-2 hover:bg-neutral-700 rounded-lg text-neutral-400 hover:text-red-500 transition-colors duration-300 cursor-pointer'>
                                                <TbTrash size={20} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}