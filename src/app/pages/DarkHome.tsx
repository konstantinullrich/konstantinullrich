import React from 'react';
import './DarkHome.css';
import GlitchText from '../components/GlitchText';

function DarkHome() {
    return (
        <div className='App'>
            <section className='grid-container'>
                <header className='App-header'>
                    <h3>
                        <GlitchText glitch='Konstantin Ullrich'>Konstantin Ullrich</GlitchText>
                    </h3>
                    <p>
                        Cryptography Engineer
                    </p>
                </header>
            </section>
        </div>
    );
}

export default DarkHome;
