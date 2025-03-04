"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  Play,
  MousePointer,
  Sparkles,
} from "lucide-react"


export function HeroSection() {
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, -150])
    const y2 = useTransform(scrollY, [0, 500], [0, -100])
    const opacity = useTransform(scrollY, [0, 300], [1, 0])
  
    return (
      <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-purple-500/5"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
  
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary mt-10">
                <Sparkles className="h-4 w-4" />
                <span>Tu Eslogan Va Aquí</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">Tu Título Principal Va Aquí</h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Tu descripción va aquí. Explica brevemente qué hace tu empresa y qué la hace especial.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 bg-gradient-to-r from-primary to-purple-600 hover:opacity-90"
                >
                  Comenzar Ahora
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-primary text-primary hover:bg-primary/5"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Ver Demo
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center"
                    >
                      <span className="text-xs text-muted-foreground">U{i}</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold">Tu número de clientes aquí</span>
                </div>
              </div>
            </motion.div>
  
            <div className="relative h-[500px] lg:h-[700px]">
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary to-purple-600 shadow-xl"
                style={{ y: y1 }}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="absolute inset-1 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white font-bold">Imagen 1</span>
                </div>
              </motion.div>
              <motion.div
                className="absolute top-1/3 left-0 w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-white shadow-xl border"
                style={{ y: y2 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="absolute inset-0 rounded-xl bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground font-bold">Imagen 2</span>
                </div>
              </motion.div>
              <motion.div
                className="absolute bottom-0 right-1/4 w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-xl"
                style={{ y: y1 }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="absolute inset-1 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white font-bold">Imagen 3</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
  
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity }}
        >
          <span className="text-sm text-muted-foreground">Desplaza hacia abajo</span>
          <MousePointer className="h-5 w-5 text-muted-foreground animate-bounce" />
        </motion.div>
  
        {/* Diagonal divider */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-background transform -skew-y-2"></div>
      </section>
    )
  }