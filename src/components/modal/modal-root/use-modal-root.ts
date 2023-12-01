import { MouseEvent, useEffect, useRef, useState } from 'react';
import { ModalRootProps } from './types';

export function useModalRoot(props: ModalRootProps) {
  const { open, enableBackdropClose = true, onClose } = props;

  const modalRootRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose && onClose(false);
  };

  const handleClickBackdropModal = (e: MouseEvent) => {
    e.preventDefault();
    if (!enableBackdropClose) return;

    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) document.body.classList.add('overflow-hidden');
    if (!isModalOpen) document.body.classList.remove('overflow-hidden');
  }, [isModalOpen]);

  useEffect(() => {
    setIsModalOpen(open);
  }, [open]);

  useEffect(() => {
    const actionButtonCancel = modalRootRef.current?.querySelector('[data-modal-cancel]');

    if (actionButtonCancel) {
      actionButtonCancel.addEventListener('click', closeModal);
    }

    return () => {
      if (actionButtonCancel) {
        actionButtonCancel.removeEventListener('click', closeModal);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isModalOpen, handleClickBackdropModal, modalRootRef };
}
