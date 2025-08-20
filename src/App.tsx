import './App.css'
import { LanguageProvider, useLanguage } from './constants/LanguageContext'
import { Page, PageProvider, usePage } from './constants/PageContext'
import NavBar from './component/NavBar/NavBar'
import Home from './pages/Home/Home'
import IOS from './pages/Projects/IOS'
import Android from './pages/Projects/Android'
import ReactJS from './pages/Projects/ReactJS'
import Details from './pages/Details/Details'
import Footer from './component/Footer/Footer'

const PageContent = () => {
  const { currentPage } = usePage()
  const { language } = useLanguage()

  return (
    <div className={`app-container ${language === 'he' ? 'rtl' : ''}`}>
      <NavBar />
      <div className='page-container'>
        {currentPage == Page.Home && <Home />}
        {currentPage == Page.IOS && <IOS />}
        {currentPage == Page.Android && <Android />}
        {currentPage == Page.ReactJS && <ReactJS />}
        {currentPage == Page.Details && <Details />}
      </div>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <PageProvider>
        <PageContent />
      </PageProvider>
    </LanguageProvider>
  )
}

export default App