"use client"

import { useRouter } from "next/navigation"
import CustomCursor from "@/components/custom-cursor"
import { useEffect, useState } from "react"

export default function LandingPage() {
  const router = useRouter()
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    // Preload the video
    const video = document.getElementById("background-video") as HTMLVideoElement
    if (video) {
      video.onloadeddata = () => setVideoLoaded(true)
    }
  }, [])

  const handleClick = () => {
    router.push("/projects")
  }

  return (
    <div className="w-full h-screen flex items-center justify-center cursor-none" onClick={handleClick}>
      {/* Placeholder video - replace with your actual video */}
      <video
        id="background-video"
        autoPlay
        muted
        loop
        playsInline
        className="video-background"
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="/placeholder-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Loading state */}
      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="text-white text-2xl">Loading...</div>
        </div>
      )}

      <CustomCursor />
    </div>
  )
}

