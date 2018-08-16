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
                Ola
                <Footer />
            </div>
            );
    } 

}

export default Home;
