import Navbar  from "./components/navbar"
import Hero from "./components/Hero"
import Highligts from "./components/Highligts"
import Model from "./components/Model"
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/footer";

import * as Sentry from '@sentry/react';

const App = () => {


  return (
    <main className="bg-black" >
      <Navbar />
      <Hero />
      <Highligts />
      <Model />
      <Features />
      <HowItWorks/>
      <Footer/>
    </main>
  )
}

export default Sentry.withProfiler(App);
