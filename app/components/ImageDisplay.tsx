"use client"


import Image from "next/image"
import { useState } from "react"

interface ImageDisplayProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ src, alt, width, height }) => {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="bg-gray-200 flex items-center justify-center" style={{ width, height }}>
        <span className="text-gray-500">Image not available</span>
      </div>
    )
  }

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      onError={() => setError(true)}
      className="object-cover"
    />
  )
}

export default ImageDisplay

