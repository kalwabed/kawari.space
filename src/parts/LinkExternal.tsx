import React from 'react'

const LinkExternal = ({ href = '#', label = 'unknown', className = '' }) => {
  return (
    <a
      href={`https://${href}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-external hover:border-primary hover:text-info ${className} `}
    >
      {label}
    </a>
  )
}

export default LinkExternal
