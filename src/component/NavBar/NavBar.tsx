import './NavBar.css'
import logo from '../../assets/icons/logo.png'
import israel from '../../assets/icons/israel.png'
import usa from '../../assets/icons/united-states.png'
import france from '../../assets/icons/france.png'
import { Page, usePage } from './../../constants/PageContext'
import { useLanguage } from '../../constants/LanguageContext'
import { useState } from 'react'

const NavBar = () => {
  const { currentPage, setPage } = usePage()
  const { setLanguage, language, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  return (
    <div className={`nav-bar-view ${language === 'he' ? 'rtl' : ''}`}>
      {/* <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button> */}

      <ul className={`nav-left ${menuOpen ? 'show' : ''}`}>
        <li><button onClick={() => setPage(Page.Home)}><img className='nav-bar-logo' src={logo} /></button></li>
        <li><button className={currentPage === Page.IOS ? 'is-on' : ''} onClick={() => setPage(Page.IOS)}>{t('ios_button')}</button></li>
        <li><button className={currentPage === Page.Android ? 'is-on' : ''} onClick={() => setPage(Page.Android)}>{t('android_button')}</button></li>
        <li><button className={currentPage === Page.ReactJS ? 'is-on' : ''} onClick={() => setPage(Page.ReactJS)}>{t('reactJS_button')}</button></li>
        <li><button className={currentPage === Page.Details ? 'is-on' : ''} onClick={() => setPage(Page.Details)}>{t('details_button')}</button></li>
      </ul>

      {/* <div className="nav-right">
        <button className="lang-button" onClick={() => setLangOpen(!langOpen)}>
          <img className='nav-bar-logo lang-img' src={
            language === 'he' ? israel :
              language === 'fr' ? france : usa
          } />
        </button>

        {langOpen && (
          <ul className="lang-dropdown">
            <li><button onClick={() => { setLanguage('en'); setLangOpen(false) }}><img className='nav-bar-logo lang-img' src={usa} /></button></li>
            <li><button onClick={() => { setLanguage('fr'); setLangOpen(false) }}><img className='nav-bar-logo lang-img' src={france} /></button></li>
            <li><button onClick={() => { setLanguage('he'); setLangOpen(false) }}><img className='nav-bar-logo lang-img' src={israel} /></button></li>
          </ul>
        )}
      </div> */}
    </div>
  )
}

export default NavBar