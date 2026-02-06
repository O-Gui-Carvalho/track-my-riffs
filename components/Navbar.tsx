import { auth } from '@/lib/auth/server';
import Sidebar from './Sidebar';

export default async function Navbar() {
  // O servidor busca os dados
  const { data: session } = await auth.getSession();

  // Passado os dados limpos para o componente cliente
  const user = {
    name: session?.user?.name,
    email: session?.user?.email
  };

  return <Sidebar user={user} />;
}