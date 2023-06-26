import React from 'react'

export default function IconButton({ type = 'primary', size = 'large', className = '', children, ...props }) {
    return (
        <button className={`
      rounded-full
      ${type === 'primary' ? 'bg-primary-200 text-white' : type === 'secondary' ? 'bg-white border border-outline text-outline' : 'text-outline'}
      ${size === 'large' ? 'w-14 h-14' : 'w-8 h-8'} ${className}
      `}
            {...props}>
            {children}
        </button>
    )
}
