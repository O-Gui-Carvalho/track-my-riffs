import 'dotenv/config'; // Carrega as variáveis do seu arquivo .env
import { neon } from '@neondatabase/serverless';
import { bands, musics } from '@/data/database'; 

const sql = neon(process.env.DATABASE_URL!);

async function main() {
  console.log('🌱 Iniciando a migração dos dados...');

  try {
    // 1. Criar Tabela de Bandas (Bands)
    // O banco precisa saber que 'id' é número e chave primária
    console.log('🔨 Criando tabela de Bandas...');
    await sql`
      CREATE TABLE IF NOT EXISTS bands (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL
      );
    `;

    // 2. Criar Tabela de Músicas (Musics)
    // O 'band_id' é uma Chave Estrangeira (Foreign Key) que aponta para a tabela bands
    console.log('🔨 Criando tabela de Músicas...');
    await sql`
      CREATE TABLE IF NOT EXISTS musics (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        status TEXT NOT NULL,
        band_id INTEGER REFERENCES bands(id)
      );
    `;

    // 3. Inserir as Bandas
    console.log(`📤 Inserindo ${bands.length} bandas...`);
    for (const band of bands) {
      await sql`
        INSERT INTO bands (id, name) 
        VALUES (${band.id}, ${band.name})
        ON CONFLICT (id) DO NOTHING; 
      `;
      // 'ON CONFLICT DO NOTHING' impede erro se você rodar o script 2 vezes
    }

    // 4. Inserir as Músicas
    console.log(`📤 Inserindo ${musics.length} músicas...`);
    for (const music of musics) {
      await sql`
        INSERT INTO musics (id, title, status, band_id) 
        VALUES (${music.id}, ${music.title}, ${music.status}, ${music.bandId})
        ON CONFLICT (id) DO NOTHING;
      `;
    }

    console.log('🔄 Sincronizando os contadores de ID...');
    
    // Ajusta sequência de bandas
    await sql`SELECT setval('bands_id_seq', (SELECT MAX(id) FROM bands));`;
    
    // Ajusta sequência de músicas
    await sql`SELECT setval('musics_id_seq', (SELECT MAX(id) FROM musics));`;

    console.log('✅ Sucesso! Banco pronto e contadores sincronizados.');

  } catch (error) {
    console.error('❌ Erro ao enviar dados:', error);
  }
}

main();