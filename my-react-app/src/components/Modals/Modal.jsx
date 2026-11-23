import React from 'react'
import { Registration } from './Registration'


export const typeModal = {
  REGISTRATION: 'REGISTRATION',
};

export const Modal = ({type, close}) => {
    const choseComponent = () => {
        switch (type) {
          case typeModal.REGISTRATION:
            return <Registration close={close} />;
        }
    }
    

    return (
      <div className="overlay" onClick={close}>
        <div className="modalMenu" onClick={e => e.stopPropagation()}>
          {choseComponent()}
        </div>
      </div>
    );
}
