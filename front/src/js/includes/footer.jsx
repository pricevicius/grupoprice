import React from "react";
class Footer extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
        <div id="footer-wrapper">
            <footer id="footer" class="container">
                <div class="row">
                    <div class="col-3 col-6-medium col-12-small">
                        <section class="widget links">
                            <h3>Random Stuff</h3>
                            <ul class="style2">
                                <li><a href="#">Etiam feugiat condimentum</a></li>
                                <li><a href="#">Aliquam imperdiet suscipit odio</a></li>
                                <li><a href="#">Sed porttitor cras in erat nec</a></li>
                                <li><a href="#">Felis varius pellentesque potenti</a></li>
                                <li><a href="#">Nullam scelerisque blandit leo</a></li>
                            </ul>
                        </section>
                    </div>
                    <div class="col-3 col-6-medium col-12-small">
                        <section class="widget links">
                            <h3>Random Stuff</h3>
                            <ul class="style2">
                                <li><a href="#">Etiam feugiat condimentum</a></li>
                                <li><a href="#">Aliquam imperdiet suscipit odio</a></li>
                                <li><a href="#">Sed porttitor cras in erat nec</a></li>
                                <li><a href="#">Felis varius pellentesque potenti</a></li>
                                <li><a href="#">Nullam scelerisque blandit leo</a></li>
                            </ul>
                        </section>
                    </div>
                    <div class="col-3 col-6-medium col-12-small">
                        <section class="widget links">
                            <h3>Random Stuff</h3>
                            <ul class="style2">
                                <li><a href="#">Etiam feugiat condimentum</a></li>
                                <li><a href="#">Aliquam imperdiet suscipit odio</a></li>
                                <li><a href="#">Sed porttitor cras in erat nec</a></li>
                                <li><a href="#">Felis varius pellentesque potenti</a></li>
                                <li><a href="#">Nullam scelerisque blandit leo</a></li>
                            </ul>
                        </section>
                    </div>
                    <div class="col-3 col-6-medium col-12-small">
                        <section class="widget contact last">
                            <h3>Entre em Contato</h3>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/GRUPO-PRICE-313722798651120/" target="_blank" class="icon fa-facebook">
                                        <span class="label">Facebook</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://api.whatsapp.com/send?phone=55112312-1996" target="_blank" class="icon fa-whatsapp">
                                        <span class="label">Whatsapp</span>
                                    </a>
                                </li>
                            </ul>
                            <p>
                                Rua Presidente Nereu Ramos, 371 <br />
                                Jardim Santa Helena - Suzano/SP <br />
                                Fone: (11) 2312.1996
                            </p>
                        </section>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div id="copyright">
                            <ul class="menu">
                                <li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div> );
    } 

}

export default Footer;