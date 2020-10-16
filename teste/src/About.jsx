import React from 'react';
import './About.css';
import Header from "./Header"

function About() {
    return (
        <div className="About">
            <Header />
            <section>
                <h1>Quem Somos:</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eius vero reiciendis rerum fugiat a cumque, dignissimos consectetur 
                    temporibus sapiente illum necessitatibus dicta voluptatum, omnis ipsum 
                    veritatis possimus quam. Dolorem, maiores?
                </p>
            </section>
        </div>
    );
}

export default About;