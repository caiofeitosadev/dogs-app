'use server';

import { USER_POST } from '@/functions/api';
import apiError from '@/functions/api-error';
import login from './login';

export default async function userPost(
  state: { ok: boolean; error: string },
  formdata: FormData,
) {
  const username = formdata.get('username') as string | null;
  const email = formdata.get('email') as string | null;
  const password = formdata.get('password') as string | null;

  try {
    if (!username || !email || !password) throw new Error('Preencha os dados.');
    if (password.length < 6)
      throw new Error('A senha deve ter mais de 6 caracteres.');
    const { url } = USER_POST();
    const response = await fetch(url, {
      method: 'POST',
      body: formdata,
    });
    if (!response.ok) throw new Error('E-mail ou usuário já cadastrado.');
    const { ok } = await login({ ok: true, error: '' }, formdata);
    if (!ok) throw new Error('Erro ao logar.');
    return {
      data: null,
      ok: true,
      error: '',
    };
  } catch (error: unknown) {
    return apiError(error);
  }
}
