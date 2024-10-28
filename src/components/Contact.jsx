import { useEffect } from 'react'
import Header from './Header'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()

  useEffect(() => {
    const loadInstagramScript = () => {
      if (!document.querySelector('#instagram-embed-script')) {
        const script = document.createElement('script')
        script.id = 'instagram-embed-script'
        script.src = 'https://www.instagram.com/embed.js'
        script.async = true
        document.body.appendChild(script)
      } else {
        window.instgrm.Embeds.process() // Reload the Instagram embeds if the script already exists
      }
    }

    loadInstagramScript()
  }, [])

  return (
    <div className="flex flex-col items-center bg-white p-2">
      <div className="sm:w-4/5 w-full">
        <Header logoClassnames="w-40" />
        <div className="flex flex-col items-center p-6 space-y-6">
          <h1 className="text-3xl font-semibold">{t('contactMe')}</h1>
          <p className="text-lg">{t('inquiries')}</p>
          <div className="text-lg text-blue-500">
            <a href="mailto:delaineetdargile@gmail.com">
              delaineetdargile@gmail.com
            </a>
          </div>
          <p className="text-lg">{t('dmInsta')}</p>
          {/* Instagram Embed */}
          <div className="w-full max-w-md">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/delaine.et.dargile/"
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '1px solid #dbdbdb',
                borderRadius: '4px',
                padding: '16px',
                width: '100%',
              }}
            >
              <a href="https://www.instagram.com/delaine.et.dargile/">
                {t('checkInstagram')}
              </a>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
