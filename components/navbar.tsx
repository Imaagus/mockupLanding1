"use client"

import {useState } from "react"
import Link from "next/link"
import { motion,  AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

import { Menu, X} from "lucide-react"



export function Navbar (){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
            <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <span className="text-xs text-white font-bold">TM</span>
            </div>
            <span className="text-xl font-bold">Tu Marca</span>
            </div>

            <nav className="hidden md:flex gap-6">
            <Link href="#inicio" className="text-sm font-medium hover:text-primary relative group">
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#servicios" className="text-sm font-medium hover:text-primary relative group">
                Servicios
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#sobre-nosotros" className="text-sm font-medium hover:text-primary relative group">
                Sobre Nosotros
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#galeria" className="text-sm font-medium hover:text-primary relative group">
                Galería
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:text-primary relative group">
                Contacto
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            </nav>

            <div className="hidden md:flex">
            <Button className="rounded-full px-6 bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 hover:from-primary hover:to-purple-700">
                Contáctanos
            </Button>
            </div>

            <button className="flex md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
            </button>
        </div>

        <AnimatePresence>
            {isMenuOpen && (
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="container md:hidden overflow-hidden"
            >
                <nav className="flex flex-col gap-4 py-6">
                <Link
                    href="#inicio"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Inicio
                </Link>
                <Link
                    href="#servicios"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Servicios
                </Link>
                <Link
                    href="#sobre-nosotros"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Sobre Nosotros
                </Link>
                <Link
                    href="#galeria"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Galería
                </Link>
                <Link
                    href="#contacto"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Contacto
                </Link>
                <Button
                    className="w-full mt-2 rounded-full bg-gradient-to-r from-primary to-purple-600"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Contáctanos
                </Button>
                </nav>
            </motion.div>
            )}
        </AnimatePresence>
      </div>
    )
}
