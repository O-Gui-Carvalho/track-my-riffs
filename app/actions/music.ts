"use server";

import { sql } from "@/lib/db";
import { auth } from "@/lib/auth/server";
import { revalidatePath } from "next/cache";

// Ação para atualizar o status
export async function updateMusicStatus(musicId: number, newStatus: string) {
    const { data: session } = await auth.getSession();
    if (!session?.user) throw new Error("Não autorizado");

    await sql`
        UPDATE musics 
        SET status = ${newStatus} 
        WHERE id = ${musicId} AND user_id = ${session.user.id}
    `;
    
    // Atualiza a página do setlist para mostrar o novo status imediatamente
    revalidatePath('/dashboard/setlist');
}

// Ação para deletar a música
export async function deleteMusic(musicId: number) {
    const { data: session } = await auth.getSession();
    if (!session?.user) throw new Error("Não autorizado");

    await sql`
        DELETE FROM musics 
        WHERE id = ${musicId} AND user_id = ${session.user.id}
    `;
    
    // Atualiza a página do setlist removendo a música da lista
    revalidatePath('/dashboard/setlist');
}