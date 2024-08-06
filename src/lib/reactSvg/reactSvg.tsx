import React from "react";
import { ReactSVG } from "react-svg";
interface Props {
    path: string;
    onChange?: () => void;
    className?: string;
    color?: string;
    height?: number;
    width?: number;
    [key: string]: any;
}

function IconUrl({ ...props }) {
    const { path, onChange, className, color, height, width, ...rest } = props;
    const prefix = "/static/icons/";
    return path && <ReactSVG  {...rest}
        onClick={onChange}
        {...(color || height || width) ? {
            beforeInjection: ((svg) => {
                if (color) {
                    // Modify the first `g` element within the SVG.
                    const firstGElement = svg.querySelectorAll('path, rect');
                    firstGElement.forEach(path => path.setAttribute('fill', color as string))
                }

                if (height && width) {
                    svg.setAttribute('height', `${height}px`);
                    svg.setAttribute('width', `${width}px`);
                }
            })
        } : {}}
        className={`react-svg ${className ? className : ''}`}
        src={`${prefix}${path}.svg`} />;
}

export default IconUrl;
