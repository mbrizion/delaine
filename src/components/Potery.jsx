import Header from './Header'
import Carousel from './Carousel'
import categories from '../config/potery.js'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Potery = () => {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t('potteryPageTitle')
  }, [t])

  return (
    <div className="flex flex-col items-center bg-white p-2">
      <div className="sm:w-4/5 w-full">
        <Header logoClassnames="w-40" />
      </div>
      <h1 className="text-3xl font-medium w-3/5 mt-20">{t('pottery')}</h1>
      <div className="sm:w-3/5 text-left mt-6">
        <p className="text-xl pb-2">{t('potteryDescription')}</p>
        <p className="text-lg">{t('potteryDescriptionP2')}</p>
      </div>
      <div className="sm:w-4/5 mt-8 flex flex-col sm:flex-row gap-8 justify-center">
        {Object.entries(categories).map(([key]) => (
          <div key={key} className="mb-8">
            <Carousel category={categories[key]} />
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-medium w-3/5 mt-20">{t('process')}</h1>
    </div>
  )
}

export default Potery
