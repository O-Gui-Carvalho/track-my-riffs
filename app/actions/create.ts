'use server'

import { sql } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createMusic(formData: FormData) {
    const title = formData.get('musica') as string
    const bandId = formData.get('banda') as string
    const status = formData.get('status') as string

    if (!title || !bandId || !status) {
        throw new Error ('Dados obrigatórios incompletos')
    }

    //Insert no banco, bandId vem como string, precisa ser convertido para int
    await sql`
        INSERT INTO musics (title, band_id, status)
        VALUES (${title}, ${parseInt(bandId)}, ${status})
    `
    //Limpar o chache
    revalidatePath('/dashboard/setlist')

    //redireciona o usuário para a lista completa
    redirect('/dashboard/setlist')
}

export async function createBand(formData: FormData) {
    const name = formData.get('banda') as string

    if (!name) {
        throw new Error('O nome da banda é obrigatório')
    }

    await sql`
        INSERT INTO bands (name) 
        VALUES (${name})
    `

    revalidatePath('/dashboard/musicas') 
    revalidatePath('/dashboard/setlist')
    
    redirect('/dashboard/setlist')
}