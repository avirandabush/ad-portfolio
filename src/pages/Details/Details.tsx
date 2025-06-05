import './Details.css'
import { useLanguage } from '../../constants/LanguageContext'
import CV from '../../assets/files/AviranDabushCV.pdf'

const Details = () => {
  const { t } = useLanguage()

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = CV
    link.download = 'Aviran_Dabush_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className='details-container'>
      <h2>{t('details_title')}</h2>
      <p>{t('details_p1')}</p>
      <p>{t('details_p2')}</p>
      <p>{t('details_p3')}</p>
      <div className='download-container'>
        <h3>{t('download_title')}</h3>
        <button className='details-cv-btn' onClick={downloadCV}>{t('download_button')}</button>
      </div>
    </div>
  )
}

export default Details