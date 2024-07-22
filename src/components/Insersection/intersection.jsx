import React from 'react';
import "./intersection.css";

export default function Intersection({children, idObserver, refObserver, animation, addStyle }) {
    const classname = `observer ${animation}`;
    return (
        <div id={idObserver} ref={refObserver} className={classname} style={addStyle}>{children}</div>
    )
}
