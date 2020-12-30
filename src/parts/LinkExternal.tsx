import { IcExternal } from './Icon'

const LinkExternal = ({ href = '#', label = 'unknown', className = '', icon = false }) => {
  return (
    <a href={`https://${href}`} target="_blank" rel="noopener noreferrer" className={`link-external ${className}`}>
      {label}
      {icon && <IcExternal className="w-3 h-3 ml-1" />}
    </a>
  )
}

export default LinkExternal
