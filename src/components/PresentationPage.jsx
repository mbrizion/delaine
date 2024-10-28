import SlideIn from './SlideIn'
import mug1 from '../assets/img/creations/mug/mug1.jpg'
import white_flower from '../assets/img/creations/white_flower/white_flower.jpg'
import { useTranslation } from 'react-i18next'

const PresentationPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SlideIn direction="right">
        <section className="w-full mt-6 flex flex-col gap-6 px-4 md:px-12 mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full">
            <img src={mug1} className="object-contain w-96 h-fit" />

            <div className="p-4 text-center md:text-left">
              <h2 className="text-3xl text-slate-800 font-semibold mb-4">
                {t('ourStory')}
              </h2>
              <p className="text-lg text-slate-800 mb-8">
                {t('ourStoryDescription')}
              </p>
            </div>
          </div>
        </section>
      </SlideIn>
      <SlideIn direction="left">
        <section className="w-full mt-6 flex flex-col gap-6 px-4 md:px-12 mx-auto">
          <div className="flex flex-col xl:flex-row-reverse items-center justify-center w-full">
            <img src={white_flower} className="object-contain w-96 h-fit" />
            <div className="p-4 text-center md:text-left">
              <h3 className="text-3xl text-slate-800 font-semibold mb-4">
                {t('ourMission')}
              </h3>
              <p className="text-lg text-slate-800 mb-8">
                {t('ourMissionDescription')}
              </p>
            </div>
          </div>
        </section>
      </SlideIn>
    </>
  )
}

export default PresentationPage
