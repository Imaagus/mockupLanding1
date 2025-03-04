"use client"

import { useRef, useState, useEffect } from "react"
import { motion,AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { Star} from "lucide-react"
import { HeroSection } from "@/components/hero"
import { ServiciosSection } from "@/components/services-section"
import { SobreNosotrosSection } from "@/components/about"
import { GaleriaSection } from "@/components/gallery"
import { CtaSection } from "@/components/cta-section"
import { ContactoSection } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function LandingPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <header className="fixed top-0 z-40 w-full backdrop-blur-md bg-background/80">
      <Navbar />
      </header>

      <main className="flex-1 pt-16">
        <HeroSection />
        <ServiciosSection />
        <SobreNosotrosSection />
        <TestimonialsSection activeTestimonial={activeTestimonial} setActiveTestimonial={setActiveTestimonial} />
        <GaleriaSection />
        <CtaSection />
        <ContactoSection />
      </main>

      <Footer />

      {/* Floating elements */}
      <div
        className="fixed w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10"
        style={{
          top: `${Math.sin(scrollY * 0.001) * 30 + 50}%`,
          left: `${Math.cos(scrollY * 0.001) * 30 + 20}%`,
        }}
      ></div>
      <div
        className="fixed w-96 h-96 rounded-full bg-purple-500/10 blur-3xl -z-10"
        style={{
          top: `${Math.cos(scrollY * 0.002) * 40 + 30}%`,
          right: `${Math.sin(scrollY * 0.002) * 30 + 10}%`,
        }}
      ></div>
    </div>
  )
}






function TestimonialsSection({
  activeTestimonial,
  setActiveTestimonial,
}: {
  activeTestimonial: number
  setActiveTestimonial: (index: number) => void
}) {
  const testimonials = [
    {
      text: "Tu testimonio va aquí. Incluye comentarios reales de clientes satisfechos.",
      author: "Nombre del Cliente",
      position: "Cargo, Empresa",
    },
    {
      text: "Tu testimonio va aquí. Incluye comentarios reales de clientes satisfechos.",
      author: "Nombre del Cliente",
      position: "Cargo, Empresa",
    },
    {
      text: "Tu testimonio va aquí. Incluye comentarios reales de clientes satisfechos.",
      author: "Nombre del Cliente",
      position: "Cargo, Empresa",
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-purple-500/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-background transform -skew-y-2"></div>

      <div ref={ref} className="container relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Star className="h-4 w-4" />
            <span>Testimonios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Lo que dicen nuestros clientes</h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-background rounded-2xl p-8 md:p-12 shadow-lg border relative z-10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mb-6 flex items-center justify-center">
                  <span className="text-primary font-bold">{testimonials[activeTestimonial].author.charAt(0)}</span>
                </div>
                <p className="text-xl md:text-2xl italic mb-8">&quot;{testimonials[activeTestimonial].text}&quot;</p>
                <h4 className="font-bold text-lg">{testimonials[activeTestimonial].author}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].position}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeTestimonial === index ? "bg-primary w-6" : "bg-primary/30"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}