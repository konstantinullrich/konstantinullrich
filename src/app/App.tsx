import React from 'react';
import DarkHome from './pages/DarkHome';
import GlitchText from './components/GlitchText';
import './App.css';

function App() {
    const isDark = true;
    if (isDark) {
        return <DarkHome/>;
    }
    return (
        <div className='App'>
            <header className='App-header'>
                <h3>
                    <GlitchText glitch='Konstantin Ullrich'>Konstantin Ullrich</GlitchText>
                </h3>
                <p>
                    Cryptography Engineer
                </p>
            </header>
        </div>
    );
}

export default App;
