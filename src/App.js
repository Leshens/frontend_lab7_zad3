import React from 'react';
import Article from "./components/Article"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Nav from "./components/Nav"
import browsers from "./data/browsers"

import './components/index.scss';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Nav browsers={browsers} />
                <Article browsers={browsers} />
                <Footer />
            </div>
        )
    }
}

export default App;