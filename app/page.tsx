import Image from "next/image";
import Link from "next/link";
import { LoginForm } from "@/components/LoginForm"

export default function Home() {
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

          <LoginForm/>

          <div className="text-center text-sm text-neutral-500">
            Não tem conta?{' '}
            <Link href="/signup" className="text-white hover:underline underline-offset-4">
              Cadastre-se
            </Link>
          </div>

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