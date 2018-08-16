import React from "react";
class Header extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="header-wrapper">
                <header id="header" class="container">
                    <div id="logo">
                        <h1><a href="/"><img src="/dist/images/grupo-price.png" title="GrupoPrice" /></a></h1>
                        <span>CRECI: 30620-J</span>
                    </div>
                    <nav id="nav">
                        <ul>
                            <li class="current"><a href="/">Página Inicial</a></li>
                            <li><a href="/quem-somos">Quem Somos</a></li>
                            <li>
                                <a href="#">Áreas</a>
                                <ul>
                                    <li><a href="#">Terceirização</a></li>
                                    <li><a href="#">Imobiliária</a></li>
                                    <li><a href="#">Condomínios</a></li>
                                    <li><a href="#">Contabilidade</a></li>
                                    <li><a href="#">Cobranças</a></li>
                                    <li><a href="#">Jurídico</a></li>
                                    <li><a href="#">Arquitetura e Urbanismo</a></li>
                                </ul>
                            </li>
                            <li><a href="/fale-conosco">Fale Conosco</a></li>
                        </ul>
                    </nav>

                </header>
            </div>
            );
    } 

}

export default Header;
                