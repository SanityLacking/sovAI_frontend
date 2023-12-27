import Image from 'next/image'
// import bannerPic from './jan-kahanek-fVUl6kzIvLg-unsplash.png'


import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

// import { landingpage } from '@/components/component/landingpage'
export default function Home() {
    return (
        <>
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="#">
              <AppleIcon className="h-6 w-6" />
              <span className="sr-only">SovereignAI</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                Features
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                Pricing
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                About
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                Contact
              </Link>
            </nav>
          </header>
          <main className="flex-1">
            <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
              <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
                <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                  <div>
                    <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                      AI Summarizer: Your Text, Simplified
                    </h1>
                  </div>
                  <div className="flex flex-col items-start space-y-4">
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                      Leveraging cutting-edge AI to summarize complex texts, so you can focus on what matters most.
                    </p>
                    <div className="space-x-4">
                      <Link
                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="#"
                      >
                        Get Started
                      </Link>
                      <Link
                        className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                        href="#"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
                <Image
                  alt="Hero"
                  className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
                  height="300"
                  src="/jan-kahanek-fVUl6kzIvLg-unsplash.JPG"
                  width="1270"
                />
              </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container mx-auto space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                      Key Features
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      Streamline Your Reading with AI Summarizer
                    </h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Discover how AI Summarizer can help you save time, increase understanding, and stay on top of
                      information overload.
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-bold">Summarize Any Text</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        From articles to reports, AI Summarizer can condense any text into a brief, easy-to-understand
                        summary.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-bold">Quick Results</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Get instant summaries and spend less time reading through lengthy documents.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-bold">Easy to Use</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Just paste your text and click summarize. It's that simple!
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
              <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Get Started?</h2>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Sign up today and transform the way you read and digest information.
                  </p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Sign Up Now
                  </Link>
                </div>
              </div>
            </section>
          </main>
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">© SovereignAI. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Privacy
              </Link>
            </nav>
          </footer>
        </>
      )
}


function AppleIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
        <path d="M10 2c1 .5 2 2 2 5" />
      </svg>
    )
  }
  