import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <header className="max-w-7xl mx-auto mb-10">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold">SEB DACKUS</h1>
          <div className="flex gap-4">
            <Link href="/projects">
              <Button variant="ghost">Projects</Button>
            </Link>
            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
          </div>
        </div>
        <p className="text-muted-foreground mt-2">Industrial Designer | Amsterdam, 2025</p>
      </header>

      <main className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">About Me</h2>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            My name is Seb Dackus. I am a 22 year old Industrial Designer graduating from TU Delft. Within the field of
            design, I am orientating myself as a designer with a background in Artificial Intelligence.
          </p>

          <p className="mb-6">
            During my time at University I mainly developed skills around user research, sketching, 3D modeling,
            storyboarding, prototyping, coding and working with Arduino/ItsyBitsy hardware.
          </p>

          <p className="mb-6">
            Besides my design interest I like to keep myself busy with topics like culture, politics, arts, and sports.
            I strive to develop myself broadly—not only because I believe this versatility will enhance my growth as a
            designer, but also because I see it as an essential approach to my life.
          </p>

          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p>Phone number: +31614601928</p>
            <p>Email address: sebdackus@gmail.com</p>
          </div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto mt-20 pt-6 border-t">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="font-medium">Seb Dackus</p>
            <p className="text-sm text-muted-foreground">Industrial Designer | TU Delft</p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>© 2025 Seb Dackus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

