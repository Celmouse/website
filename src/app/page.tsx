import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {  Mouse, PresentationIcon, Gamepad2, Keyboard, SquarePlus, Speech } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Page() {

  const winServerVersion = '1.1.0';
  const macServerVersion = '1.0.4';
  // const appVersion = '1.0.2';

  const urls = {
    win: `https://gyromouse.s3.sa-east-1.amazonaws.com/Celmouse+Setup+${winServerVersion}.exe`,
    linux: "",
    macOS: `https://gyromouse.s3.sa-east-1.amazonaws.com/Celmouse-${macServerVersion}.dmg`,
    macOSm1: `https://gyromouse.s3.sa-east-1.amazonaws.com/Celmouse-${macServerVersion}-arm64.dmg`,
    android: "https://play.google.com/store/apps/details?id=com.gyromouse.app",
    iPhone: "https://apps.apple.com/br/app/gyromouse/id6736866466",
  }


  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Image width={32} height={32} src={"/logo.svg"} alt="Logo" />
          <span className="ml-2 text-2xl font-bold">Celmouse</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#download">
            Download
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="https://api.whatsapp.com/send?phone=5533997312898">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Control Your Mouse with Your Phone
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Use your phone&apos;s gyroscope to control your computer&apos;s mouse. Perfect for presentations, gaming, and more.
                </p>
              </div>
              <div className="space-x-4">
                <Button><Link href="#download" >Get Started</Link></Button>
                <Button variant="outline"><Link href="#features" >Learn More</Link></Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Gyroscope Control</CardTitle>
                  <Mouse className="w-8 h-8" />
                </CardHeader>
                <CardContent>
                  <p>Control your mouse with precision using your phone&apos;s gyroscope.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Presentation Mode</CardTitle>
                  <PresentationIcon className="w-8 h-8" />
                </CardHeader>
                <CardContent>
                  <p>Navigate through slides effortlessly during presentations.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Gaming Enhancement (Beta)</CardTitle>
                  <Gamepad2 className="w-8 h-8" />
                </CardHeader>
                <CardContent>
                  <p>Enhance your gaming experience with intuitive motion controls.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Keyboard Control</CardTitle>
                  <Keyboard className="w-8 h-8" />
                </CardHeader>
                <CardContent>
                  <p>Control your keyboard by typing on your phone.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Hotkeys</CardTitle>
                  <SquarePlus className="w-8 h-8" />
                </CardHeader>
                <CardContent>
                  <p>Easy acess hotkeys to improve performance at work.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Speech to text</CardTitle>
                  <Speech className="w-8 h-8" />
                </CardHeader>
                <CardContent>
                  <p>Speak instead of type.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="download" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Download Celmouse</h2>
            <Tabs defaultValue="mobile" className="w-full max-w-2xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="windows">Windows {"(BETA)"}</TabsTrigger>
                <TabsTrigger value="mac">Mac</TabsTrigger>
                <TabsTrigger value="linux">Linux</TabsTrigger>
                <TabsTrigger value="mobile">Apps</TabsTrigger>
              </TabsList>
              <TabsContent value="windows" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Windows Download {"(BETA)"}</CardTitle>
                    <CardDescription>WARNING: Download Celmouse for Windows. Currently on BETA and is beeing tested. Please use with caution!</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Button asChild><Link href={urls.win}>Download for Windows</Link></Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="mac" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Apple MacOS Download</CardTitle>
                    <CardDescription>Download Celmouse for Mac</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-start items-start space-y-4">
                    <Button asChild><Link href={urls.macOS}>Download for Apple Mac Intel Chip</Link></Button>
                    <Button asChild><Link href={urls.macOSm1}>Download for Apple Mac Sillicon Chip</Link></Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="linux" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Linux Download</CardTitle>
                    <CardDescription>Download Celmouse for Linux</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Button disabled>Download for Linux</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="mobile" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>iOS and Android Download</CardTitle>
                    <CardDescription>Download Celmouse for Android or iOS</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center space-x-4">
                    <Button asChild><Link href={urls.android}>Download for Android</Link></Button>
                    <Button asChild><Link href={urls.iPhone}>Download for iOS</Link></Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Celmouse. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="https://www.instagram.com/celmouseoficial/">
            Instagram
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="/terms-of-use">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="/privacy">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}