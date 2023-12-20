import { Hedvig_Letters_Sans } from "next/font/google"
const hedvigLettersSans = Hedvig_Letters_Sans({ subsets: ['latin'], weight: ['400'] })

export default function notFound() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <main className="relative isolate min-h-full">
          <img
            src="https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black opacity-70" aria-hidden="true" />
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-56 lg:px-8">
            <p className="text-base font-semibold leading-8 text-[#f3f1e9]/90">404</p>
            <h1 className="mt-4 text-3xl font-bold text-[#f3f1e9]/90 sm:text-5xl">Page Not Found</h1>
            <p className="mt-4 text-base text-[#f3f1e9]/70 sm:mt-6"><span className={hedvigLettersSans.className}>Sorry, we couldn’t find the page you’re looking for.</span></p>
            <div className="mt-6 flex justify-center">
              <a href="/" className="text-sm font-semibold leading-7 text-[#f3f1e9]/90">
                <span aria-hidden="true">&larr;</span> Back to home
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }
  