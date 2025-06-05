import './NavBar.css'
import logo from '../../assets/icons/logo.png'
import israel from '../../assets/icons/israel.png'
import usa from '../../assets/icons/united-states.png'
import france from '../../assets/icons/france.png'
import { Page, usePage } from './../../constants/PageContext'
import { useLanguage } from '../../constants/LanguageContext'

const NavBar = () => {
  const { currentPage, setPage } = usePage()
  const { setLanguage, language, t } = useLanguage()

  return (
    <div className={`nav-bar-view ${language === 'he' ? 'rtl' : ''}`}>
      <ul className={`nav-left`}>
        <li><button onClick={() => setPage(Page.Home)}><img className='nav-bar-logo' src={logo} /></button></li>
        <li><button className={currentPage === Page.IOS ? 'is-on' : ''} onClick={() => setPage(Page.IOS)}>{t('ios_button')}</button></li>
        <li><button className={currentPage === Page.Android ? 'is-on' : ''} onClick={() => setPage(Page.Android)}>{t('android_button')}</button></li>
        <li><button className={currentPage === Page.ReactJS ? 'is-on' : ''} onClick={() => setPage(Page.ReactJS)}>{t('reactJS_button')}</button></li>
        <li><button className={currentPage === Page.Details ? 'is-on' : ''} onClick={() => setPage(Page.Details)}>{t('details_button')}</button></li>
      </ul>
      <ul className="nav-right">
        <li><button onClick={() => setLanguage('en')}><img className='nav-bar-logo lang-img' src={usa} /></button></li>
        <li><button onClick={() => setLanguage('fr')}><img className='nav-bar-logo lang-img' src={france} /></button></li>
        <li><button onClick={() => setLanguage('he')}><img className='nav-bar-logo lang-img' src={israel} /></button></li>
      </ul>
    </div>
  )
}

export default NavBar