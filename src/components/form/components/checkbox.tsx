import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    labelClasses?: string
}



const Checkbox: React.FC<InputProps> = ({ label, onChange, className, labelClasses, ...props }) => {
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        if (onChange) {
            onChange(event);
        }
    };


    return (
        <>
            <label className={styles.label}>
                <span className='relative inline-flex'>
                    <input type="checkbox" className={styles.input} checked={checked} onChange={handleChange} {...props} />
                </span>
                {
                    checked ?
                        <svg className={styles.svg} viewBox="0 0 24 24" >
                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                        </svg> :
                        <svg className={styles.svg} viewBox="0 0 24 24" >
                            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                        </svg>
                }
                {label && <span className={twMerge('ml-1', labelClasses)}>{label}</span>}

            </label>
        </>
    );
};

export default Checkbox;
