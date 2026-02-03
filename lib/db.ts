import { neon } from "@neondatabase/serverless"

if (!process.env.DATABASE_URL) {
    throw new Error ('DATABASE_URL não foi definido')
}

export const sql = neon(process.env.DATABASE_URL)

export const HOME_CARDS = [
  {
    title: 'Setlist Completa',
    description: 'Gerencie todas as suas músicas',
    href: '/dashboard/setlist',
    src: '/images/list-image.jpg',
    className: 'col-span-2 row-span-1' 
  },
  {
    title: 'Músicas',
    description: 'Adicione novas músicas',
    href: '/dashboard/musicas',
    src: '/images/add-song-image.jpg',
    className: 'col-span-1 row-span-1 aspect-video'
  },
  {
    title: 'Bandas',
    description: 'Adicione novas bandas',
    href: '/dashboard/bandas',
    src: '/images/add-band-image.jpg',
    className: 'col-span-1 row-span-1 aspect-video'
  }
]