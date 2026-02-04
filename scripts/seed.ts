import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import { bands, musics } from '@/data/database'; 

const sql = neon(process.env.DATABASE_URL!);
const MY_USER_ID = 'ca3c294e-a82b-43bd-be0b-a9c3d8cdb346'; 

async function main() {
  console.log('Iniciando a migração dos dados...');
  try {
    // Resetar as tabelas para incluir a nova coluna
    console.log('Limpando tabelas antigas...');
    await sql`DROP TABLE IF EXISTS musics`;
    await sql`DROP TABLE IF EXISTS bands`;

    // Criar Tabela de Bandas com user_id
    console.log('Criando tabela de Bandas...');
    await sql`
      CREATE TABLE bands (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        user_id TEXT NOT NULL
      );
    `;

    // Criar Tabela de Músicas com user_id
    console.log('Criando tabela de Músicas...');
    await sql`
      CREATE TABLE musics (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        status TEXT NOT NULL,
        band_id INTEGER REFERENCES bands(id),
        user_id TEXT NOT NULL
      );
    `;

    // Inserir as Bandas
    console.log(`Inserindo ${bands.length} bandas para o usuário ${MY_USER_ID}...`);
    for (const band of bands) {
      await sql`
        INSERT INTO bands (id, name, user_id) 
        VALUES (${band.id}, ${band.name}, ${MY_USER_ID})
      `;
    }

    // Inserir as Músicas
    console.log(`Inserindo ${musics.length} músicas...`);
    for (const music of musics) {
      await sql`
        INSERT INTO musics (id, title, status, band_id, user_id) 
        VALUES (${music.id}, ${music.title}, ${music.status}, ${music.bandId}, ${MY_USER_ID})
      `;
    }

    // Ajustar sequências
    await sql`SELECT setval('bands_id_seq', (SELECT MAX(id) FROM bands));`;
    await sql`SELECT setval('musics_id_seq', (SELECT MAX(id) FROM musics));`;

    console.log('✅ Sucesso! Banco atualizado com suporte a multi-usuário.');

  } catch (error) {
    console.error('❌ Erro ao enviar dados:', error);
  }
}

main();