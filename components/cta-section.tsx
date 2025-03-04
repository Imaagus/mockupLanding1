"use client"

import { useRef} from "react"
import { motion} from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

import { ChevronRight} from "lucide-react"


export function CtaSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
  
    return (
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 transform skew-y-3"></div>
  
        <div ref={ref} className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¿Listo para transformar tu negocio?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Comienza hoy mismo y lleva tu presencia digital al siguiente nivel. Nuestro equipo está listo para ayudarte.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 bg-white text-primary hover:bg-white/90">
                Comenzar Ahora
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-black hover:bg-white/90">
                Agendar una Llamada
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }