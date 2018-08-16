import React from 'react';

import Header from '../includes/header';
import Footer from '../includes/footer';


class Home extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="page-wrapper">
                <Header />
                    <div id="banner-wrapper">
                        <div id="banner" class="box container">
                            <div class="row">
                                <div class="col-7 col-12-medium">
                                    <h2>Hi. This is Verti.</h2>
                                    <p>It's a free responsive site template by HTML5 UP</p>
                                </div>
                                <div class="col-5 col-12-medium">
                                    <ul>
                                        <li><a href="#" class="button large icon fa-arrow-circle-right">Ok let's go</a></li>
                                        <li><a href="#" class="button alt large icon fa-question-circle">More info</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="features-wrapper">
                        <div class="container">
                            <div class="row">
                                <div class="col-4 col-12-medium">
                                    <section class="box feature">
                                        <div class="inner">
                                            <header>
                                                <h2>Put something here</h2>
                                                <p>Maybe here as well I think</p>
                                            </header>
                                            <p>Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus. Praesent sed semper amet bibendum tristique fringilla.</p>
                                        </div>
                                    </section>
                                </div>
                                <div class="col-4 col-12-medium">
                                    <section class="box feature">
                                        <div class="inner">
                                            <header>
                                                <h2>An interesting title</h2>
                                                <p>This is also an interesting subtitle</p>
                                            </header>
                                            <p>Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus. Praesent sed semper amet bibendum tristique fringilla.</p>
                                        </div>
                                    </section>
                                </div>
                                <div class="col-4 col-12-medium">
                                    <section class="box feature">
                                        <div class="inner">
                                            <header>
                                                <h2>Área Restrita</h2>
                                                <p>Atenção: você será direcionado para o site Condomínios21 - Gestão de Condomínios para ter acesso a segunda via de seu boleto</p>
                                            </header>
                                            <p><iframe src="http://www.comunidades21.com.br/clientes/fredericopricev" allowtransparency="yes" frameborder="no" scrolling="no"></iframe></p>
                                        </div>
                                    </section>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="main-wrapper">
                        <div class="container">
                            <div class="row gtr-200">
                                <div class="col-5 col-12-medium">
                                    <div id="sidebar">
                                    <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F313722798651120%2Fvideos%2F1696977343658985%2F&show_text=0&width=560" width="560" height="420"  scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
                                    </div>
                                </div>
                                <div class="col-7 col-12-medium imp-medium">
                                    <div id="content">
                                        <section class="last">
                                            <h2>Quem Somos nós?</h2>
                                            <p>Empresa especializada consultoria empresarial, focada em administração de condomínios residenciais e comerciais, com ampla experiência na implantação de condomínio, atuamos desde a contratação de síndico profissional, aos serviços especializados e adequados ao seu empreendimento, incluindo toda a assessoria imobiliária.</p>
                                            <a href="/quem-somos" class="button icon fa-arrow-circle-right">leia mais</a>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
            );
    } 

}

export default Home;
