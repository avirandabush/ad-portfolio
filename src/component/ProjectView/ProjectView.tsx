import './ProjectView.css'
import { useState } from 'react'
import { useLanguage } from '../../constants/LanguageContext'
import ProjectCell from '../ProjectCell/ProjectCell'
import Project from '../../constants/ProjectInterface'
import videoLogo from '../../assets/video/video-logo.mp4'

interface Props {
  projects: Project[]
}

const ProjectView = ({ projects }: Props) => {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)

  if (!projects || projects.length === 0) {
    const emptyProject: Project = {
      id: "0",
      title: t('no_data_title'),
      description: t('no_data_desc'),
      codeUrl: "https://github.com/avirandabush",
      videoUrl: videoLogo
    }

    return (
      <div className="project-view-container">
        <div
          className={`carousel-cell center`}
        >
          <ProjectCell
            key={emptyProject.id}
            project={emptyProject}
            isCellInTheMiddle={true}
            noData={true}
          />
        </div>
      </div>
    )
  }

  const getPosition = (index: number) => {
    const leftIndex = (activeIndex - 1 + projects.length) % projects.length
    const rightIndex = (activeIndex + 1) % projects.length;

    if (index === activeIndex) return "center"
    if (index === leftIndex) return "left"
    if (index === rightIndex) return "right"
    return "hidden"
  }

  return (
    <div className="project-view-container">
      {projects.map((project, index) => {
        const position = getPosition(index)
        return (
          <div
            key={project.id}
            className={`carousel-cell ${position}`}
            onClick={() => {
              if (position !== "center") setActiveIndex(index)
            }}
          >
            <ProjectCell
              key={project.id}
              project={project}
              isCellInTheMiddle={position === "center"}
              noData={false}
            />
          </div>
        )
      })}
    </div>
  )
}

export default ProjectView