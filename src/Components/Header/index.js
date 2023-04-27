import React from "react";
import './styles.css';
import Logotipo from '../../Objects/Logotipo';
import Sobre from '../../Objects/Sobre';
import Menu from '../../Objects/Menu';

const Header = () => (
    <header className="header">
        <Logotipo />
        <Sobre />
        <Menu />
    </header>
);

export default Header;
