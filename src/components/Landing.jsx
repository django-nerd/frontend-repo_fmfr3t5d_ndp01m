import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import HowItWorks from './HowItWorks'
import UseCases from './UseCases'
import MiniDashboard from './MiniDashboard'
import Pricing from './Pricing'
import Footer from './Footer'

export default function Landing() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <MiniDashboard />
      <Pricing />
      <section className="py-20 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Ready to never write manual meeting notes again?</h3>
        <a href="/app" className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-6 py-3 font-medium dark:bg-white dark:text-slate-900">Launch App</a>
      </section>
      <Footer />
    </div>
  )
}
