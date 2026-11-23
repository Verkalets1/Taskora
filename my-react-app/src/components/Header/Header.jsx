import { useState } from 'react';
import './style.css';
import BurgerMenu from './BurgerMenu';
import { Registration } from '../Modals/Registration';
import { Modal, typeModal } from '../Modals/Modal';
const Header = () => {
  const [modal, setModal] = useState({is : false, type : null});

  const openModal = () => {
    setModal({is : true, type : typeModal.REGISTRATION});
  };
  const closeModal = () => {
    setModal({is : false, type : null});
  };
  return (
    <div className="headerNav">
      <div>
        <button
          onClick={openModal}
          className={`burger ${modal.is ? 'active' : ''}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {modal.is && <Modal close={closeModal} type={modal.type} />}
    </div>
  );
};

export default Header;
