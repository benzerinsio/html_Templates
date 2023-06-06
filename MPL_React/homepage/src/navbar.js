import React from 'react';
import './style.css';

function Navbar() {
  return (
    <nav>
      <ul class="ul-navbar">
              <li class="li-navbar"></li> {/*<img src="./imgs/logo/mplogo.png" alt="Logo da Marca" class="logotype"> */}
              <li class="li-navbar"><a class="active" href="#">PRINCIPAL</a></li>
              <li class="li-navbar"><a href="#">QUEM SOMOS</a></li>
              <li class="li-navbar dropdown">
                <a class="dropbtn" href="#">SEGUROS <i class="fa-sharp fa-solid fa-caret-down fa-2xs"></i></a>
                <div class="dropdown-menu">
                  <a href="#">Para sua empresa</a>
                  <a href="#">Para você ou sua empresa</a>
                </div>
              </li>
              <li class="li-navbar"><a href="#">PARCEIROS</a></li>
              <li class="li-navbar dropdown">
                <a class="dropbtn" href="#">SINISTROS <i class="fa-sharp fa-solid fa-caret-down fa-2xs"></i></a>
                <div class="dropdown-content">
                  <a class="dropdown-item-1" href="#">Automóveis</a>
                  <a class="dropdown-item-2" href="#">Demais produtos</a>
                </div>
              </li>
              <li class="li-navbar"><a href="#">OAB</a></li>
              <li class="li-navbar"><a href="#">FALE CONOSCO</a></li>
        </ul> 
    </nav>
  );
}

export default Navbar;
