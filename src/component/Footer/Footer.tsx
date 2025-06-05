import './Footer.css'
import { useLanguage } from '../../constants/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="footer-view">
      <div className="footer-content">
        <small>
          © {new Date().getFullYear()} {t('footer_title')}
        </small>
      </div>
    </footer>
  )
}

export default Footer