import Link from 'next/link'
import { LuArrowLeft, LuMusic, LuTrash2, LuPlus } from 'react-icons/lu'
import { getBandsWithMusicCount } from '@/utils/BandWithMusicCount'
import { bands, musics } from '@/data/database';

export default function GerenciarBandasPage() {
    const bandsWithMusicCount = getBandsWithMusicCount(bands, musics);

    return (
        <section className='flex flex-col p-8 max-w-6xl mx-auto h-dvh overflow-hidden'>
            
            {/* Header */}
            <header className="mb-8 pt-8 shrink-0">
                <Link href="/dashboard/setlist" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-4 group w-fit">
                    <LuArrowLeft className="group-hover:-translate-x-1 transition-transform"/> Voltar para o Setlist
                </Link>
                <h1 className="text-4xl font-bold tracking-tight text-white">Bandas</h1>
                <p className="text-neutral-400 mt-1">Cadastre e gerencie suas bandas favoritas</p>
            </header>

            {/* Conteúdo Principal: Grid em 2 colunas no Desktop */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-8 min-h-0">
                
                {/* Lado Esquerdo: Formulário (1 Coluna) */}
                <aside className="lg:col-span-2">
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-white mb-6">Nova Banda</h2>
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="banda" className="text-sm font-medium text-neutral-400 ml-1">
                                    Nome da Banda
                                </label>
                                <input 
                                    type="text" 
                                    name='banda' 
                                    id='banda' 
                                    placeholder='Ex: Led Zeppelin' 
                                    className='w-full bg-neutral-800/50 border border-neutral-700 rounded-xl p-3 text-neutral-200 focus:ring-2 focus:ring-neutral-600 outline-none transition-all'
                                    required
                                />
                            </div>
                            <button className="flex items-center justify-center gap-2 w-full bg-white text-neutral-900 rounded-xl p-3 hover:bg-neutral-400 transition-colors duration-300 cursor-pointer">
                                <LuPlus size={20}/> Salvar Banda
                            </button>
                        </form>
                    </div>
                </aside>

                {/* Lado Direito: Lista de Bandas (2 Colunas) */}
                <main className="lg:col-span-2 flex flex-col min-h-0 border border-neutral-800 bg-neutral-900/50 rounded-2xl overflow-hidden">
                    <div className="p-6 border-b border-neutral-800 bg-neutral-900/80 sticky top-0 z-10">
                        <h2 className="text-xl font-semibold text-white">Bandas Cadastradas</h2>
                    </div>

                    <div className="overflow-y-auto grow">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-neutral-800 bg-neutral-900/30">
                                    <th className="p-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Banda</th>
                                    <th className="p-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider text-center">Músicas</th>
                                    <th className="p-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider text-right">Ações</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-neutral-800">
                                {bandsWithMusicCount.map((bnd) => (
                                    <tr key={bnd.name} className='group hover:bg-neutral-800/40 transition-colors'>
                                        <td className="p-4 font-medium text-neutral-200">{bnd.name}</td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-center gap-2 text-neutral-400 bg-neutral-800/50 w-fit mx-auto px-3 py-1 rounded-full text-sm border border-neutral-700">
                                                <LuMusic size={14}/>
                                                {bnd.musicCount}
                                            </div>
                                        </td>
                                        <td className="p-4 text-right">
                                            <button title="Excluir banda" className='p-2 hover:bg-neutral-700 rounded-lg text-neutral-400 hover:text-red-500 transition-colors duration-300 cursor-pointer'>
                                                <LuTrash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        
                        {/* Estado Vazio */}
                        {bandsWithMusicCount.length === 0 && (
                            <div className="p-12 text-center text-neutral-500">
                                Nenhuma banda cadastrada ainda.
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </section>
    )
}