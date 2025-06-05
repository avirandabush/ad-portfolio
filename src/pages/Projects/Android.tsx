import './Projects.css'
import { useEffect, useState } from 'react'
import { fetchProjectsFromCollection } from '../../utils/ProjectUtils'
import { useLanguage } from '../../constants/LanguageContext'
import ProjectView from '../../component/ProjectView/ProjectView'
import Project from '../../constants/ProjectInterface'

function Android() {
  const { t } = useLanguage()
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true)
      setError(null)

      try {
        const fetched = await fetchProjectsFromCollection("projectss")
        setProjects(fetched)
      } catch (err) {
        setError(t('error_loading_android'))
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  if (loading) return <div className="loading">{t('loading_android')}</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className='projects-container'>
      <ProjectView projects={projects} />
    </div>
  )
}

export default Android