'use client';
import { useFormStatus } from 'react-dom';
import Button from '../forms/button';
import React, { useActionState } from 'react';
import Input from '../forms/input';
import ErrorMessage from '../helper/errorMessage';
import styles from './conta-photo-post.module.css';
import photoPost from '@/actions/photo-post';
function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Postando...</Button>
      ) : (
        <Button>Postar</Button>
      )}
    </>
  );
}
export default function PhotoPost() {
  const [state, action] = useActionState(photoPost, {
    ok: false,
    error: '',
    data: null,
  });

  const [img, setImg] = React.useState('');
  function handleImageChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setImg(URL.createObjectURL(target.files[0]));
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action} className={styles.form}>
        <Input label="Nome" name="nome" type="text" />
        <Input label="Peso" name="peso" type="number" />
        <Input label="Idade" name="idade" type="number" />
        <input
          type="file"
          name="img"
          id="img"
          className={styles.file}
          onChange={handleImageChange}
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <div>
        <div
          className={styles.preview}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </section>
  );
}
