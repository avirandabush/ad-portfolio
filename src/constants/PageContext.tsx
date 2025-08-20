import { createContext, useContext, useState, ReactNode } from "react"

export enum Page {
  Home = "home",
  IOS = "iOS",
  Android = "android",
  ReactJS = "reactJS",
  Details = "details"
}

type PageContextType = {
  currentPage: Page
  goToNextPage: () => void
  setPage: (page: Page) => void
}

export const PageContext = createContext<PageContextType | undefined>(undefined)

export const usePage = () => {
  const context = useContext(PageContext)
  if (!context) throw new Error("usePage must be used within a PageProvider")
  return context
}

export const PageProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home)

  const setPage = (page: Page) => {
    setCurrentPage(page)
  }

  const goToNextPage = () => {
    const pages = [Page.Home, Page.IOS, Page.Android, Page.ReactJS, Page.Details]
    const currentIndex = pages.indexOf(currentPage)
    const nextIndex = (currentIndex + 1) % pages.length
    setCurrentPage(pages[nextIndex])
  }

  return (
    <PageContext.Provider value={{ currentPage, setPage, goToNextPage }}>
      {children}
    </PageContext.Provider>
  )
}