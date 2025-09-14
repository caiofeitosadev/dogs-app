import ResetarSenhaForm from '@/components/login/resetarSenhaForm';
import { Metadata } from 'next';

interface Params {
  searchParams: Promise<{ key: string; login: string }>;
}

export const metadata: Metadata = {
  title: 'Alterar senha | Dogs App',
  description: 'Altere a sua senha',
};

export default async function ResetarSenha({ searchParams }: Params) {
  const { key, login } = await searchParams;
  return (
    <div className="animeLeft">
      <h1 className="title">Resetar senha</h1>
      <ResetarSenhaForm keyToken={key} login={login} />
    </div>
  );
}
