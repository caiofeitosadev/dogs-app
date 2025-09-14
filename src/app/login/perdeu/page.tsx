import PerdeuSenhaForm from '@/components/login/perdeuSenhaForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Esqueci minha senha | Dogs App',
  description: 'Recupere a sua senha',
};

export default async function PerdeuSenhaPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      <PerdeuSenhaForm />
    </div>
  );
}
