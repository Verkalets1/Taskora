import { useState } from 'react';
import './style.css';
import BurgerMenu from './BurgerMenu';
const Header = () => {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);

  const createBurgerMenu = () => {
    setIsBurgerMenu(!isBurgerMenu);
  };
  return (
    <div className="headerNav">
      <div>
        <button
          onClick={createBurgerMenu}
          className={`burger ${isBurgerMenu ? 'active' : ''}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {isBurgerMenu && <BurgerMenu createBurgerMenu={createBurgerMenu} />}
    </div>
  );
};

export default Header;
