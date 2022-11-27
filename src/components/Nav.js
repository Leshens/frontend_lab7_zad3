import React from 'react';
import "./Navigation.scss";

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <h2>Navigation bar</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        )
    }
}
export default Nav