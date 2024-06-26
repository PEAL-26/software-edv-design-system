'use client';
import { ReactNode, createContext, useContext, useState } from 'react';

import { Alert, AlertTypes } from '../../components/alert';
import { AlertContextData, AlertProviderProps } from './types';

const AlertContext = createContext<AlertContextData>({} as AlertContextData);

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState<AlertTypes | null>(null);
  const [content, setContent] = useState<ReactNode | null>(null);

  const handleShow = (type: AlertTypes, content: ReactNode) => {
    setShow(true);
    setType(type);
    setContent(content);
  };

  const handleHide = () => {
    setShow(false);
    setType(null);
    setContent(null);
  };

  return (
    <AlertContext.Provider value={{ show: handleShow }}>
      {type && content && (
        <Alert show={show} type={type} onHide={handleHide}>
          {content}
        </Alert>
      )}
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);

export * from './types';
