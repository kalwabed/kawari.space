/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/heading-has-content */
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/oceanicNext'

export const H2 = ({ children }) => {
  return <h2 className="mb-5 text-red-400">{children}</h2>
}

export const Code = ({ children = '', lang = 'javascript' }: { lang: Language; children: string }) => {
  return (
    <Highlight {...defaultProps} code={children} language={lang} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

const MDXComponents = { H2, Code }

export default MDXComponents
