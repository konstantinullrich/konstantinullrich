import React from 'react';
import './GlitchText.css';

type GlitchTextProps = {
    children: string;
    glitch: string;
}

function GlitchText(props: GlitchTextProps) {
    return (
        <span className='glitch' data-text={props.glitch}>{props.children}</span>
    )
}

export default GlitchText;