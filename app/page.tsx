import Image from "next/image";

export default function Home() {
  // Estilo reutilizável para os inputs
  const inputStyles = "bg-[#1A1A1A] border border-[#404040] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-neutral-500 transition-all";

  return (
    <section className="flex min-h-dvh">
      {/* Lado Esquerdo - Imagem */}
      <div className="relative hidden w-1/2 md:flex">
        <Image 
          src="/images/login-image.jpg" 
          alt="Login background" 
          fill 
          priority
          className="object-cover"
        />
        <div className="absolute mt-8 ml-8">
          <Image src="/images/logo-tmr.svg" alt="TrackMyRiffs Logo" width={82} height={40} />
        </div>
      </div>

      {/* Lado Direito - Formulário */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-sm flex flex-col gap-6">
          
          <header className="space-y-1 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold tracking-tight">Bem Vindo(a)</h1>
            <p className="text-neutral-400">Faça login para continuar praticando!</p>
          </header>

          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input 
                id="email"
                type="email" 
                placeholder="email@exemplo.com" 
                className={inputStyles}
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="password" title="Senha" className="text-sm font-medium">Senha</label>
              <input 
                id="password"
                type="password" 
                placeholder="••••••••" 
                className={inputStyles}
                required
              />
            </div>

            <button type="submit" className="mt-2 bg-neutral-200 text-neutral-900 font-semibold rounded-lg p-2 hover:bg-neutral-400 transition-colors duration-300 cursor-pointer">
              Entrar
            </button>
          </form>

          <div className="flex items-center gap-4">
            <hr className="flex-1 border-neutral-700"/>
            <span className="text-sm text-neutral-500 whitespace-nowrap">Ou continue com</span>
            <hr className="flex-1 border-neutral-700"/>
          </div>
          
          <button className="flex items-center justify-center gap-2 bg-transparent border border-neutral-700 text-neutral-200 rounded-lg p-2 hover:bg-neutral-800 transition-colors cursor-pointer">
            Google
          </button>
        
        </div>
      </div>
    </section>
  );
}