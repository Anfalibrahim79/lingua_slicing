import React from 'react'

export default function Button({ type = 'primary', size = 'large', className = '', children, ...props }) {
    return (
        <button className={`
            rounded-full font-bold 
            ${type === 'primary' ? 'bg-primary-200 text-white hover:bg-primary-300' :
                type === 'secondary' ? 'bg-white text-primary-200' : "text-primary-200"}
            ${size === "large" ? 'px-8 py-4 text-lg' : 'px-8 py-3 text-sm leading-7'}
            ${className}
        `}
            {...props}>
            {children}
        </button>
    )
}
