'use client';

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import makeStore from '../../../store';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ReduxProvider store={makeStore()}>{children}</ReduxProvider>;
};
