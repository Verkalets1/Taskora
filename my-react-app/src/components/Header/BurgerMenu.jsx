import React from 'react';

const BurgerMenu = props => {
  return (
    <div className="overlay" onClick={props.createBurgerMenu}>
      <div className="modalMenu" onClick={e => e.stopPropagation()}>
        <h2>Menu</h2>
      </div>
    </div>
  );
};

export default BurgerMenu;
