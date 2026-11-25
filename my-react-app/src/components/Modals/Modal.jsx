import React from 'react';
import { Registration } from './Registration';
import { SingIn } from './SingIn';
export const typeModal = {
  REGISTRATION: 'REGISTRATION',
  SINGIN: 'SINGIN',
};

export const Modal = ({ type, close }) => {
  const choseComponent = () => {
    switch (type) {
      case typeModal.REGISTRATION:
        return <Registration close={close} />;
      case typeModal.SINGIN:
        return <SingIn close={close} />;
    }
  };

  return (
    <div className="overlay" onClick={close}>
      <div className="modalMenu" onClick={e => e.stopPropagation()}>
        {choseComponent()}
      </div>
    </div>
  );
};
