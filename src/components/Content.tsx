import React from 'react'

interface ContentProps {
  className?: string
}

const Content: React.FC<ContentProps> = ({ children, className }) => {
  return <main className={className}>{children}</main>
}

export default Content
