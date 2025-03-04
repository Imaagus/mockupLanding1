"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Check,
} from "lucide-react"

export function SobreNosotrosSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
  
    const stats = [
      { value: "98%", label: "Satisfacción" },
      { value: "10+", label: "Años" },
      { value: "250+", label: "Proyectos" },
      { value: "24/7", label: "Soporte" },
    ]
  
    return (
      <section id="sobre-nosotros" className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-muted transform skew-y-2"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-muted transform -skew-y-2"></div>
  
        <div className="container relative z-10">
          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 relative"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-500/10 rounded-2xl"></div>
                <div className="relative h-[400px] rounded-2xl bg-muted overflow-hidden">
                  <div className="absolute inset-0 bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Imagen Sobre Nosotros</span>
                  </div>
                </div>
              </div>
  
              <div className="absolute -bottom-10 -right-10 md:bottom-16 md:right-16 w-64 p-6 bg-background rounded-2xl shadow-lg border">
                <div className="flex flex-wrap gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex-1 min-w-[80px]">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
  
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
                <span>Sobre Nosotros</span>
              </div>
              <h2 className="text-4xl font-bold">Tu Historia Va Aquí</h2>
              <p className="text-muted-foreground">
                Aquí va la descripción de tu empresa. Explica cuándo se fundó, por qué existe y qué la hace única.
                Comparte tu misión y valores principales.
              </p>
              <p className="text-muted-foreground">
                Tu segundo párrafo va aquí. Describe los logros más importantes de tu empresa y por qué los clientes
                deberían elegirte.
              </p>
  
              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>Enfoque centrado en resultados</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>Tecnología de vanguardia</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>Equipo altamente cualificado</span>
                </div>
              </div>
  
              <Button className="rounded-full px-8 bg-gradient-to-r from-primary to-purple-600 mt-4">
                Conoce al Equipo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }