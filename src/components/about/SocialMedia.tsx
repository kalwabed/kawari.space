import LinkExternal from '@/parts/LinkExternal'
import siteConfig from 'site-config'

const SocialMedia = () => {
  return (
    <>
      <h1>Social media</h1>
      <div className="flex flex-col flex-wrap md:flex-nowrap">
        Get in touch with me on various platform and social media.
        {Object.entries(siteConfig.socials).map(([k, v]) => (
          <div className="leading-loose" key={k}>
            {k} - <LinkExternal href={v.replace(/^http(s?):\/\//, '')} label={v.replace(/^http(s?):\/\//, '')} />{' '}
          </div>
        ))}
      </div>
    </>
  )
}

export default SocialMedia
