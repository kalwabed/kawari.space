import LinkExternal from '@/parts/LinkExternal'
import { en, id } from 'lang'
import { useRouter } from 'next/router'
import siteConfig from 'site-config'

const SocialMedia = () => {
  const { locale } = useRouter()
  return (
    <>
      <h1 className="my-3">{locale === 'id' ? 'Sosial media' : 'Social media'}</h1>
      <div className="flex flex-col flex-wrap md:flex-nowrap">
        {locale === 'id' ? id.about.socialGetInTouch : en.about.socialGetInTouch}
        {Object.entries(siteConfig.socials).map(([k, v]) => (
          <div className="leading-loose" key={k}>
            {k} -{' '}
            <LinkExternal
              className="inline-flex items-center"
              icon
              href={v.replace(/^http(s?):\/\//, '')}
              label={v.replace(/^http(s?):\/\//, '')}
            />{' '}
          </div>
        ))}
      </div>
    </>
  )
}

export default SocialMedia
