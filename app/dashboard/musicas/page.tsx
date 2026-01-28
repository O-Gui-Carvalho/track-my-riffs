import Link from 'next/link'
import { LuArrowLeft, LuPlus } from "react-icons/lu"

export default function AddMusicPage() {
    const fieldStyles = "w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:border-transparent transition-all"

    return (
        <section className="flex flex-col p-8 max-w-6xl mx-auto h-dvh overflow-hidden">
            
            <header className="mb-8 pt-8 shrink-0">
                <Link href="/dashboard/setlist" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-4 group">
                    <LuArrowLeft className="group-hover:-translate-x-1 transition-transform"/> Voltar para a lista
                </Link>
                <div>
                    <h1 className='text-4xl font-bold tracking-tight text-white'>Nova Música</h1>
                    <p className="text-neutral-400 mt-1">Adicione músicas ao seu repertório</p>
                </div>
            </header>

            <div className="border border-neutral-800 bg-neutral-900/50 rounded-2xl p-8 overflow-y-auto">
                <form action="" className="flex flex-col gap-6 mx-auto">
                    
                    {/* Campo: Nome */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="musica" className="text-sm font-medium text-neutral-300 ml-1">
                            Nome da Música
                        </label>
                        <input 
                            type="text" 
                            name="musica" 
                            id="musica" 
                            placeholder="Ex: Stairway to Heaven"
                            className={fieldStyles}
                            required
                        />
                    </div>

                    {/* Campo: Banda */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="banda" className="text-sm font-medium text-neutral-300 ml-1">
                            Banda
                        </label>
                        <select name="banda" id="banda" className={fieldStyles}>
                            <option value="">Selecione uma banda</option>
                            <option value="aliceinchains">Alice In Chains</option>
                            <option value="soundgarden">Soundgarden</option>
                        </select>
                    </div>

                    {/* Campo: Status */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="status" className="text-sm font-medium text-neutral-300 ml-1">
                            Status de Aprendizado
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                            {['Aprender', 'Aprendendo', 'Aprendido'].map((status) => (
                                <label key={status} className="cursor-pointer">
                                    <input type="radio" name="status" value={status} className="peer sr-only" />
                                    <div className="p-3 text-center rounded-lg border border-neutral-700 bg-neutral-800 text-neutral-400 peer-checked:bg-neutral-200 peer-checked:text-neutral-900 peer-checked:border-transparent transition-all">
                                        {status}
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 mt-auto">
                        <button 
                            type="submit" 
                            className="flex items-center justify-center gap-2 w-full bg-white text-neutral-900 rounded-xl p-3 hover:bg-neutral-400 transition-colors duration-300 cursor-pointer"
                        >
                            <LuPlus size={20}/> Salvar Música
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}