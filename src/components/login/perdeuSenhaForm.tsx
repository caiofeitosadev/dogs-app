'use client';
import { useFormStatus } from 'react-dom';
import Button from '../forms/button';
import React, { useActionState } from 'react';
import Input from '../forms/input';
import ErrorMessage from '../helper/errorMessage';
import styles from './loginForm.module.css';
import passwordLost from '@/actions/password-lost';
function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Enviar e-mail</Button>
      )}
    </>
  );
}
export default function PerdeuSenhaForm() {
  const [url, setUrl] = React.useState('');
  const [state, action] = useActionState(passwordLost, {
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
      <Input label="E-mail / Usuário" name="login" type="text" />
      <input type="hidden" name="url" value={url} />
      <ErrorMessage error={state.error} />
      {state.ok ? (
        <p style={{ color: '#4c1' }}>E-mail enviado.</p>
      ) : (
        <FormButton />
      )}
    </form>
  );
}
