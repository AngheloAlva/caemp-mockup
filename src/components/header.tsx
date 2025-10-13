"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            className="h-14 w-14 bg-primary rounded-full"
                            whileHover={{ rotate: 6 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                alt="Logo"
                                width={64}
                                height={64}
                                src="/logo.png"
                            />
                        </motion.div>
                        <span className="text-xl font-bold">CAEMP</span>
                    </motion.div>
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link
                            href="/"
                            className="text-sm font-medium transition-all hover:text-primary"
                        >
                            Inicio
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link
                            href="/cursos"
                            className="text-sm font-medium transition-all hover:text-primary"
                        >
                            Cursos
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link
                            href="/nosotros"
                            className="text-sm font-medium transition-all hover:text-primary"
                        >
                            Nosotros
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link
                            href="/galeria"
                            className="text-sm font-medium transition-all hover:text-primary"
                        >
                            Galería
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link
                            href="#"
                            className="text-sm font-medium transition-all hover:text-primary"
                        >
                            Contacto
                        </Link>
                    </motion.div>
                </nav>

                <div className="flex items-center gap-4">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button asChild className="hidden md:inline-flex">
                            <Link href="#">Solicitar Cotización</Link>
                        </Button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="md:hidden border-t border-border"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="container flex flex-col gap-4 py-4">
                            <Link
                                href="/"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Inicio
                            </Link>
                            <Link
                                href="/cursos"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Cursos
                            </Link>
                            <Link
                                href="/nosotros"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Nosotros
                            </Link>
                            <Link
                                href="/galeria"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Galería
                            </Link>
                            <Link
                                href="#"
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                Contacto
                            </Link>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button asChild className="w-full">
                                    <Link href="#">Solicitar Cotización</Link>
                                </Button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
