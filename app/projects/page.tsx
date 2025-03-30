"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// Project data based on the portfolio
const projects = [
  {
    id: "knee-brace",
    title: "Push Knee Braces for Universal Fit",
    description: "Redesigning medical support products for a broader range of body types",
    image: "/placeholder.svg?height=600&width=800",
    shortDescription:
      "A modular knee brace design that adapts to different body shapes while maintaining standardized production.",
    fullDescription: `When designing medical support products for a commercial market, addressing unique body shapes while working with standardized production poses a significant challenge. This paradox was central to the project assigned by Nea International, a company specializing in braces designed to support various ligament-related issues.

  The project aimed to reduce or maintain the current number of available sizes for a medical knee brace, while providing support to a broader range of body types, ultimately making the knee braces more universally adaptable and inclusive.

  Modular knee brace existing of an upper part, lower part and an adjustable support system the modular brace allows users to sort what suits their body extending the choice further than solely size range. The adjustable system allows to make little adjustments to body types recognizing every individual needs different support.
  
  Essential working of the knee brace is that all motion gets stabilized. The support system on the side follows the contour of the leg to stabilize the counteracting of muscles, joints and bones around the knee.`,
  },
  {
    id: "circular-keyboard",
    title: "Circular Keyboard Design",
    description: "Redesigning one of Logitech's high-end keyboards for the circular economy",
    image: "/placeholder.svg?height=600&width=800",
    shortDescription:
      "A sustainable redesign of Logitech's TKL G913 keyboard focused on circularity and repairability.",
    fullDescription: `With environmental pressures rising, it becomes a challenge to get everyone on the same page when it comes to circularity. Change is required not only on individual levels, but also from companies and governments to make a difference.

    For a company like Logitech, that makes an annual profit of 836 million per year in the Keyboard and Mouse segment, preparing a good strategy for a circular future can make a lot of difference. In the period of 10 weeks I made an attempt to provide such a strategy for their Logitech TKL G913 keyboard.
    
    Based on an analysis using three complementary methodologies: Hotspot Mapping, a Business Model Canvas, and a Circularity Calculator, I reevaluated the construction of their product and business model on its fit for the circular economy.`,
  },
  {
    id: "rotterdam-trust",
    title: "Exposition of Opportunity",
    description: "Regaining Political trust in Rotterdam through a broadcast of change",
    image: "/placeholder.svg?height=600&width=800",
    shortDescription:
      "A project addressing low political participation in Rotterdam Zuid through showcasing local initiatives.",
    fullDescription: `"Echte Rotterdammers denken mee, doen mee" a motto that encapsulates the essence of the project "exposition of Opportunity". This initiative tries to address the contrast between Rotterdam's proactive culture and its low political participation rates, particularly in Rotterdam Zuid, where only 28% of residents voted in recent municipal elections.
    
    Doing research in this neighborhood revealed that many residents in this area feel unheard by politics and express a strong desire for autonomy. Despite this, numerous government-funded projects exist in the neighborhood, though they often go unnoticed by the public.
    
    The Exposition of Opportunity aims to bridge this gap by showcasing impactful local initiatives and resources, such as subsidies, food banks, and employment programs. By highlighting these opportunities in an art-inspired format, the project tries to connect residents with the tools and knowledge needed to take action, supporting an improved sense of autonomy and community involvement.`,
  },
  {
    id: "robot-competition",
    title: "TU Delft Robot Competition 2024",
    description: "First place winner",
    image: "/placeholder.svg?height=600&width=800",
    shortDescription:
      "A high-performing robot capable of stacking blocks, winning first place in the 2024 TU Delft competition.",
    fullDescription: `Humming stepper motors, squeaking tires, unique lifting mechanisms, and personalized controllers to tie it all together—these were the sounds and sights of the 2024 TU Delft robot competition. While design often prioritizes aesthetics, this competition focused solely on performance.
    
    Over the course of seven weeks, participants were tasked with building a high-performing robot to compete on the final day. The challenge? To construct a robot capable of stacking as many blocks as possible within a limited amount of time.
    
    Competing against 12 other contestants, I can proudly say my robot secured first place, outperforming the other robots. Each contestant was provided with a bag of objects to design and build their robot. These included a frame of wood, some screws, two stepper motors, two servo motors and some elastics. Besides that it was allowed to 3D print parts.
    
    Capabilities of the Robot:
    - High-speed movement: Enabled fast navigation across the area field
    - Encoded precision movement: Allowed careful adjustments while stacking blocks
    - Effective turning on its axis because of omniwheels
    - Grabbing mechanism: allowed picking up blocks
    - X-bow firing mechanism: secret weapon of the robot
    - Large falling arm to collects blocks`,
  },
  {
    id: "iot-shower",
    title: "IoT Shower Device",
    description: "Collecting data on our shower habits",
    image: "/placeholder.svg?height=600&width=800",
    shortDescription:
      "A dynamo-powered shower device that provides insights about water usage to improve daily habits.",
    fullDescription: `In the world of the Internet of Things (IoT), the devices in our homes form interconnected networks powered by sensors, software, and data. Tasked with designing a product for this environment, I developed the dynamo-powered shower device.
    
    One of the key benefits of receiving data from smart home devices is the ability to gain insights that help improve our daily habits. In the case of a showering device, it could provide valuable information about our water usage.
    
    Although a hard reality for people in the Netherlands, for places with seasons of extreme droughts it is essential we think carefully about water usage. Over time, managing our water usage will be increasingly important. As a simple nudge, this device gives us some insights to how much water we are actually using in a day. Just so that our awareness that fresh water is not an unlimited resource.`,
  },
  {
    id: "copycat-machine",
    title: "Copycat Machine",
    description: "From G-code to drawn image, the 2D pen-plotter",
    image: "/placeholder.svg?height=600&width=800",
    shortDescription:
      "A 2D pen-plotter that can reproduce almost any shape on paper, inspired by 3D printer mechanics.",
    fullDescription: `From G-code to drawn image, the 2D pen-plotter can reproduce almost any shape on paper. The Copycat project was as much a design challenge as it was an engineering challenge.
    
    While many copycat designs exist online, the first and foremost difficulty lay in creating one with reliable functionality. The robust design of this Copycat takes inspiration from the mechanics of 3D printers. Powered by two DC motors working together through a CoreXY mechanism, this device precisely maneuvers a pen across the paper to achieve accuracy drawings.
    
    To show how the copycat is made I present you with this diagram above:
    - The turquoise parts are 3D modeled and printed
    - The dark grey parts are cut to length aluminum beams
    - The light grey parts are cut to length aluminum tubes
    - The black blocks represent the stepper motors
    - And the purple dots represent the pulleys`,
  },
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId)
  }

  const handleBackClick = () => {
    setSelectedProject(null)
  }

  const selectedProjectData = projects.find((p) => p.id === selectedProject)

  return (
    <div className="min-h-screen bg-background">
      <main className="h-screen w-full">
        {selectedProject ? (
          <div className="animate-in fade-in duration-300 p-6">
            <Button
              variant="ghost"
              onClick={handleBackClick}
              className="mb-6 flex items-center gap-2 uppercase tracking-wide font-normal"
            >
              <ArrowLeft size={16} />
              Back to all projects
            </Button>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Image
                  src={selectedProjectData?.image || "/placeholder.svg?height=600&width=800"}
                  alt={selectedProjectData?.title || ""}
                  width={800}
                  height={600}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tight">
                  {selectedProjectData?.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-4 font-normal">{selectedProjectData?.description}</p>
                <div className="prose max-w-none font-normal">
                  {selectedProjectData?.fullDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-screen animate-in fade-in duration-300">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card cursor-pointer h-full"
                onClick={() => handleProjectClick(project.id)}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="project-overlay">
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{project.title}</h3>
                  <p className="font-normal">{project.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className={`max-w-7xl mx-auto mt-20 pt-6 border-t ${!selectedProject ? "hidden" : ""}`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="font-medium uppercase tracking-wide">Seb Dackus</p>
            <p className="text-sm text-muted-foreground font-normal">Industrial Designer | TU Delft</p>
          </div>
          <div className="text-sm text-muted-foreground font-normal">
            <p>Phone: +31614601928</p>
            <p>Email: sebdackus@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

