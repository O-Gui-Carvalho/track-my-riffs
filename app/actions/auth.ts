'use server'

import { auth } from "@/lib/auth/server";
import { redirect } from "next/navigation";

type FormState = {
  message: string;
} | null;

export async function login(prevState: FormState, formData: FormData): Promise<FormState> {
  // Extrair dados
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    // Tentar logar usando Neon Auth (Credenciais)
    const result = await auth.signIn.email({
      email,
      password,
    });

    // Verificar sucesso/erro
    if (result.error) {
       // Retorna o erro para o frontend ler
       return { message: 'Email ou senha incorretos.' };
    }
  } catch (err) {
      // Captura erros inesperados de conexão
      return { message: 'Erro ao conectar com o servidor.' };
  }

  // Redirecionar após sucesso
  redirect('/dashboard');
}

export async function signup(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const name = formData.get('name') as string

    const { data, error } = await auth.signUp.email({
        email,
        password,
        name,
    })

    if (error) {
        console.error('Error ao cadastrar:', error)
        return
    }

    redirect('/dashboard')
}

export async function signOut() {
  await auth.signOut();
  redirect('/');
}