'use server'

import { auth } from "@/lib/auth/server";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  // 1. Extrair dados
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // 2. Tentar logar usando Neon Auth (Credenciais)
  const result = await auth.signIn.email({
    email,
    password,
  });

  // 3. Verificar sucesso/erro
  if (result.error) {
    console.error("Erro no login:", result.error);
    return; 
  }

  // 4. Redirecionar após sucesso
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