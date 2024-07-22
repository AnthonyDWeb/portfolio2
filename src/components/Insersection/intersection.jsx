import React from 'react';
import "./intersection.css";

export default function Intersection({children, refObserver, animation }) {
    const classname = `observer ${animation}`;
    return (
        <div ref={refObserver} className={classname}>{children}</div>
    )
}
