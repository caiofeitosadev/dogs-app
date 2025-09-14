'use client';
import { useFormStatus } from 'react-dom';
import Button from '../forms/button';
import React, { useActionState } from 'react';
import Input from '../forms/input';
import ErrorMessage from '../helper/errorMessage';
import styles from './loginForm.module.css';
import passwordReset from '@/actions/password-reset';
function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Resetando...</Button>
      ) : (
        <Button>Resetar senha</Button>
      )}
    </>
  );
}
export default function ResetarSenhaForm({
  keyToken,
  login,
}: {
  login: string;
  keyToken: string;
}) {
  const [url, setUrl] = React.useState('');
  const [state, action] = useActionState(passwordReset, {
    ok: false,
    error: '',
    data: null,
  });
  React.useEffect(() => {
    if (state.ok) window.location.href = '/conta';
  }, [state.ok]);
  React.useEffect(() => {
    setUrl(window.location.href.replace('perdeu', 'resetar'));
  }, []);

  return (
    <form action={action} className={styles.form}>
      <Input label="Nova senha" name="password" type="password" />
      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
