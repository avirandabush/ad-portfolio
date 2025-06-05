import './Home.css'
import logo from './../../assets/icons/logo.png'
import TypingAnimation from '../../component/TypingAnimation/TypingAnimation'
import { useLanguage } from '../../constants/LanguageContext'

function Home() {
  const { t } = useLanguage()

  return (
    <div className='home-container'>
      <img className='home-logo' src={logo} />
      <h1>{t('author_name')}</h1>
      <h2>{t('author_title')}</h2>
      <h3>
        <TypingAnimation key={t('author_desc')} text={t('author_desc')} speed={80} />
      </h3>
    </div>
  )
}

export default Home