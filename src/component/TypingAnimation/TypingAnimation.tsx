import { useEffect, useState } from "react"

interface TypingAnimationProps {
    text: string
    speed: number
}

const TypingAnimation = ({ text, speed }: TypingAnimationProps) => {
    const [displayedText, setDisplayedText] = useState("")
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < text.length) {
            const timeOut = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index])
                setIndex((prev) => prev + 1)
            }, speed)
            return () => clearTimeout(timeOut)
        }
    }, [index, text, speed])
    return <>{displayedText}</>
}

export default TypingAnimation