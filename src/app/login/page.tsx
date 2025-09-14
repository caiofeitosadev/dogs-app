import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Dogs App',
  description: 'Entre na sua conta',
};
import LoginForm from '@/components/login/loginForm';

export default async function LoginPage() {
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <LoginForm />
    </section>
  );
}
