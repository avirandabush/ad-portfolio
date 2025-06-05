import './ProjectCell.css'
import Project from '../../constants/ProjectInterface'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../constants/LanguageContext'
import playButton from '../../assets/icons/play-button.png'

interface Props {
  project: Project
  isCellInTheMiddle: boolean
  noData: boolean
}

const ProjectCell = ({ project, isCellInTheMiddle, noData }: Props) => {
  const { t } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showReplay, setShowReplay] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isCellInTheMiddle) {
      video.play()
        .then(() => setShowReplay(false))
        .catch((e) => {
          console.warn(t('error_play_video'), e)
        })
    } else {
      video.pause()
      video.currentTime = 0
      setShowReplay(false)
    }
  }, [isCellInTheMiddle])

  const handleReplay = () => {
    const video = videoRef.current
    if (!video) return

    video.currentTime = 0
    video.play()
    setShowReplay(false)
  }

  const handleEnded = () => {
    setShowReplay(true)
  }

  return (
    <div className="project-cell-container">
      <video
        ref={videoRef}
        className="project-cell-video"
        src={project.videoUrl}
        muted
        playsInline
        onEnded={handleEnded}
      />

    {
      showReplay && isCellInTheMiddle && (
        <button className='replay-button' onClick={handleReplay}>
          <img src={playButton} alt='Play Button' />
        </button>
      )
    }

      <div className="project-cell-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
          {noData ? t('visit_git') : t('view_code')}
        </a>
      </div>
    </div>
  )
}

export default ProjectCell