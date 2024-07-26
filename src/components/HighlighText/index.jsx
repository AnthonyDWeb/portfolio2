import React from 'react';
import './index.css';

function HighlighText({ text }) {
    const textToUse = text.split('').join('').replace(/ /g, '\u00a0');
    return (
        <button data-text="Awesome" className="button">
            <span className="actual-text">&nbsp;{textToUse}&nbsp;</span>
            <span className="hover-text" aria-hidden="true">&nbsp;{textToUse}&nbsp;</span>
            {/* <span className="hover-text" aria-hidden="true">{!isDesktop && `\u00a0`}&nbsp;{textToUse}&nbsp;</span> */}
        </button>
    )
}

export default HighlighText;