const ReadConfig = ({ readingTime = 0, locale = 'id' }) => {
  return (
    <>
      {readingTime} {locale === 'id' ? 'menit membaca' : 'mins read'}
    </>
  )
}

export default ReadConfig
