"use client"

import { useRef} from "react"
import { motion} from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight} from "lucide-react"



export function GaleriaSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })
  
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    }
  
    const item = {
      hidden: { opacity: 0, scale: 0.9 },
      show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    }
  
    // Tamaños variados para las imágenes
    const imageSizes = [
      "row-span-1 col-span-1",
      "row-span-2 col-span-1",
      "row-span-1 col-span-2",
      "row-span-1 col-span-1",
      "row-span-1 col-span-1",
      "row-span-2 col-span-1",
    ]
  
    return (
      <section id="galeria" className="py-20 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <span>Nuestra Galería</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Proyectos destacados</h2>
            <p className="text-xl text-muted-foreground">
              Explora nuestra colección de trabajos recientes. Cada proyecto refleja nuestra pasión por la excelencia y la
              innovación.
            </p>
          </div>
  
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] gap-4"
          >
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className={`relative rounded-xl overflow-hidden group ${imageSizes[index]}`}
                >
                  <div className="absolute inset-0 bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Proyecto {index + 1}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl">Nombre del Proyecto</h3>
                    <p className="text-white/80 text-sm">Categoría del Proyecto</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 text-white border-white hover:bg-white/20 hover:text-white w-fit"
                    >
                      Ver Detalles
                    </Button>
                  </div>
                </motion.div>
              ))}
          </motion.div>
  
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Ver Todos los Proyectos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    )
  }