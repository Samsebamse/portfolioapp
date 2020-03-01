import React from 'react';
import { icons, iconsbw } from '../assets/icons/icons';
import './footer.css';

export const footer = () => {
    return (
        <div className="footer">
            {iconsbw.map((item, key) =>
                <img 
                    onClick={() => clickHandler(item)}
                    onMouseOver={(element) => onMouseOver(element, item, key)}
                    onMouseOut={(element) => onMouseOut(element, item, key)}
                    src={item.src} alt={item.alt} key={key}
                />
            )}
        </div>
    );
};

const clickHandler = (item) => {
    window.open(item.website);
};

const onMouseOver = (element, item, key) => {
    element.target.src = icons[key].src;
};

const onMouseOut = (element, item, key) => {
    element.target.src = iconsbw[key].src;
};


