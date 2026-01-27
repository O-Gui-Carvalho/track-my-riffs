import Image from 'next/image'
import Link from 'next/link'

const HOME_CARDS = [
  {
    title: 'Setlist Completa',
    description: 'Gerencie todas as suas músicas',
    href: '/setlist',
    src: '/images/list-image.jpg',
    className: 'col-span-2 row-span-1' 
  },
  {
    title: 'Músicas',
    description: 'Adicione novas músicas',
    href: '/musicas',
    src: '/images/add-song-image.jpg',
    className: 'col-span-1 row-span-1 aspect-video'
  },
  {
    title: 'Bandas',
    description: 'Adicione novas bandas',
    href: '/bandas',
    src: '/images/add-band-image.jpg',
    className: 'col-span-1 row-span-1 aspect-video'
  }
]

export default function HomePage() {
  return (
    <section className="flex flex-col p-8 max-w-6xl mx-auto overflow-hidden h-dvh">
      
      <header className="mb-6 shrink-0">
        <h1 className='text-4xl font-bold tracking-tight text-white'>Início</h1>
        <p className="text-neutral-400 mt-1">O que vamos tocar hoje?</p>
      </header>

      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-6 min-h-0">
        {HOME_CARDS.map((card) => (
          <Link 
            key={card.title} 
            href={card.href}
            className={`group relative overflow-hidden rounded-2xl shadow-2xl ${card.className}`}
          >
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
            
            <div className="absolute bottom-0 left-0 z-20 p-6 w-full">
              <h2 className="text-2xl font-bold text-white leading-tight">{card.title}</h2>
              <p className="text-sm text-neutral-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 line-clamp-1">
                {card.description}
              </p>
            </div>

            <Image 
              src={card.src} 
              alt={card.title} 
              fill
              className='object-cover group-hover:scale-105 transition-transform duration-700 ease-out' 
            />
          </Link>
        ))}
      </div>
    </section>
  )
}