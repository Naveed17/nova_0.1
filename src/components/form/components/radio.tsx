import React, { use, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    labelClasses?: string,
    defaultChecked?: boolean,
}



const Radio: React.FC<InputProps> = ({ label, onChange, className, defaultChecked = false, labelClasses, ...props }) => {
    const [isChecked, setIsChecked] = React.useState(defaultChecked);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event);
        }


    };
    useEffect(() => {
        setIsChecked(defaultChecked);
    }, [defaultChecked]);

    return (
        <>
            <label className={`${styles.label} ${className}`}>
                <span className='relative inline-flex'>
                    <input type="radio" className={styles.input} onChange={handleChange} {...props} />
                </span>
                {
                    isChecked ?
                        <span className='relative'>
                            <svg className={`${styles.svg} absolute top-[1px]`}><path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path></svg>
                            <svg className={styles.svg} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
                        </span> :
                        <svg className={styles.svg} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
                }
                {label && <span className={twMerge('ml-1', labelClasses)}>{label}</span>}

            </label>
        </>
    );
};

export default Radio;
