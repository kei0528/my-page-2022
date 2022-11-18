import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const useCompState = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [sendStatus, setSendStatus] = useState<'SUCCESS' | 'ERROR' | 'LOADING' | null>(null);

  return {
    register,
    handleSubmit,
    errors,
    sendStatus,
    setSendStatus,
  };
};
