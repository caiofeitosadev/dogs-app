'use client';
import { PhotoData } from '@/actions/photo-get';
import PhotoContent from '../photo/photo-content';
import styles from './feed-modal.module.css';
export default function FeedModal({ photo }: { photo: PhotoData }) {
  return (
    <div className={styles.modal}>
      <PhotoContent data={photo} single={false} />
    </div>
  );
}
