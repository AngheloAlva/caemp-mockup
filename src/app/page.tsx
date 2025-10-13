"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
    Shield,
    Users,
    Award,
    Zap,
    TrendingUp,
    MapPin,
    ArrowRight,
    Star,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { SlideIn } from "@/components/animations/slide-in";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { HoverScale } from "@/components/animations/hover-scale";
import { motion } from "framer-motion";
import Image from "next/image";
import TrusUs from "@/components/TrustUs";
import Benefits from "@/components/Benefits";

export default function HomePage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden  bg-primary  text-primary-foreground">
                <div className="absolute inset-0 bg-[url('/hero.png')] opacity-25 bg-cover bg-center" />
                <div className="absolute top-20 left-10 w-20 h-20 bg-primary-foreground/10 rounded-full blur-xl animate-float" />
                <div
                    className="absolute bottom-20 right-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-xl animate-float"
                    style={{ animationDelay: "1s" }}
                />
                <div className="container relative py-24 md:py-32 lg:py-40">
                    <div className="mx-auto max-w-3xl text-center space-y-8">
                        <FadeIn delay={0.2}>
                            <Badge variant="secondary" className="mb-4">
                                Más de 25 años de experiencia
                            </Badge>
                        </FadeIn>
                        <SlideIn delay={0.3} direction="up">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                                Especialistas en Capacitación y Seguridad
                                Laboral
                            </h1>
                        </SlideIn>
                        <SlideIn delay={0.4} direction="up">
                            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed text-pretty max-w-2xl mx-auto">
                                Formamos profesionales en prevención de riesgos,
                                rescate en altura, primeros auxilios y formación
                                de brigadas de emergencia en todo Chile.
                            </p>
                        </SlideIn>
                        <FadeIn delay={0.5}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <HoverScale>
                                    <Button
                                        size="lg"
                                        variant="secondary"
                                        asChild
                                        className="text-base"
                                    >
                                        <Link href="/cursos">
                                            Ver Cursos
                                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </HoverScale>
                                <HoverScale>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        asChild
                                        className="text-base bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                                    >
                                        <Link href="#">
                                            Solicitar Cotización
                                        </Link>
                                    </Button>
                                </HoverScale>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="border-b bg-muted/30 py-12">
                <div className="container">
                    <StaggerContainer staggerDelay={0.15}>
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            <StaggerItem>
                                <motion.div
                                    className="text-center space-y-2 cursor-default"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.div
                                        className="text-4xl md:text-5xl font-bold text-primary"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.2,
                                            type: "spring",
                                            stiffness: 200,
                                        }}
                                    >
                                        +700
                                    </motion.div>
                                    <div className="text-sm text-muted-foreground">
                                        Empresas Capacitadas
                                    </div>
                                </motion.div>
                            </StaggerItem>
                            <StaggerItem>
                                <motion.div
                                    className="text-center space-y-2 cursor-default"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.div
                                        className="text-4xl md:text-5xl font-bold text-primary"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.3,
                                            type: "spring",
                                            stiffness: 200,
                                        }}
                                    >
                                        +15,000
                                    </motion.div>
                                    <div className="text-sm text-muted-foreground">
                                        Personas Entrenadas
                                    </div>
                                </motion.div>
                            </StaggerItem>
                            <StaggerItem>
                                <motion.div
                                    className="text-center space-y-2 cursor-default"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.div
                                        className="text-4xl md:text-5xl font-bold text-primary"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.4,
                                            type: "spring",
                                            stiffness: 200,
                                        }}
                                    >
                                        25+
                                    </motion.div>
                                    <div className="text-sm text-muted-foreground">
                                        Años de Experiencia
                                    </div>
                                </motion.div>
                            </StaggerItem>
                            <StaggerItem>
                                <motion.div
                                    className="text-center space-y-2 cursor-default"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.div
                                        className="text-4xl md:text-5xl font-bold text-primary"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.5,
                                            type: "spring",
                                            stiffness: 200,
                                        }}
                                    >
                                        100%
                                    </motion.div>
                                    <div className="text-sm text-muted-foreground">
                                        Certificación
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* Services Cards Section */}
            <section className="py-16 md:py-24 bg-background border-b">
                <div className="container">
                    <StaggerContainer staggerDelay={0.15}>
                        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
                            {/* Card 1 - Azul */}
                            <StaggerItem>
                                <motion.div
                                    className="group relative overflow-hidden rounded-lg hover:bg-primary bg-white border-2 border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="relative z-10 p-8 flex flex-col items-center text-center space-y-6">
                                        <div className="w-20 h-20 rounded-full bg-[#0066CC] group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                                            <Image
                                                src="/logo.png"
                                                alt="Logo"
                                                width={80}
                                                height={80}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        <h3 className="text-lg font-semibold text-foreground group-hover:text-white transition-colors duration-300">
                                            Capacitación, entrenamiento y
                                            respuesta ante emergencias
                                        </h3>

                                        <Button
                                            variant="outline"
                                            className="border-primary text-primary group-hover:border-white group-hover:bg-white group-hover:text-[#0066CC] transition-all duration-300"
                                            asChild
                                        >
                                            <Link href="/servicios/capacitacion">
                                                Conocer Más
                                            </Link>
                                        </Button>
                                    </div>
                                </motion.div>
                            </StaggerItem>

                            {/* Card 2 - Verde */}
                            <StaggerItem>
                                <motion.div
                                    className="group relative overflow-hidden rounded-lg hover:bg-[#52B043] bg-white border-2 border-border hover:border-[#52B043]/50 transition-all duration-300 cursor-pointer"
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="relative z-10 p-8 flex flex-col items-center text-center space-y-6">
                                        <div className="w-20 h-20 rounded-full bg-[#52B043] group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                                            <Image
                                                src="/logo-verde.png"
                                                alt="Logo Verde"
                                                width={80}
                                                height={80}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        <h3 className="text-lg font-semibold text-foreground group-hover:text-white transition-colors duration-300">
                                            Asesoría Técnica y Equipos de
                                            Protección
                                        </h3>

                                        <Button
                                            variant="outline"
                                            className="border-[#52B043] text-[#52B043] group-hover:border-white group-hover:bg-white group-hover:text-[#52B043] transition-all duration-300"
                                            asChild
                                        >
                                            <Link href="/servicios/asesoria">
                                                Conocer Más
                                            </Link>
                                        </Button>
                                    </div>
                                </motion.div>
                            </StaggerItem>

                            {/* Card 3 - Morado */}
                            <StaggerItem>
                                <motion.div
                                    className="group relative overflow-hidden rounded-lg hover:bg-[#5E2B7E] bg-white border-2 border-border hover:border-[#5E2B7E]/50 transition-all duration-300 cursor-pointer"
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="relative z-10 p-8 flex flex-col items-center text-center space-y-6">
                                        <div className="w-20 h-20 pt-2 rounded-full bg-[#5E2B7E] group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                                            <Image
                                                src="/logo-morado.png"
                                                alt="Logo Morado"
                                                width={80}
                                                height={80}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        <h3 className="text-lg font-semibold text-foreground group-hover:text-white transition-colors duration-300">
                                            Programas y talleres de habilidades
                                            interpersonales
                                        </h3>

                                        <Button
                                            variant="outline"
                                            className="border-[#5E2B7E] text-[#5E2B7E] group-hover:border-white group-hover:bg-white group-hover:text-[#5E2B7E] transition-all duration-300"
                                            asChild
                                        >
                                            <Link href="/servicios/talleres">
                                                Conocer Más
                                            </Link>
                                        </Button>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background">
                <div className="container">
                    <FadeIn>
                        <div className="mx-auto max-w-3xl text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance">
                                Nuestros Servicios
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-6">
                                Nos especializamos en la capacitación y
                                entrenamiento en trabajos de alto riesgo y
                                respuesta ante emergencias, con el propósito de
                                elevar la seguridad laboral y prevenir
                                accidentes.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                                Contamos con un centro de entrenamiento de alto
                                nivel, equipado con tecnología de vanguardia y
                                todas las herramientas necesarias para
                                complementar nuestros cursos de excelencia.
                                Formamos profesionales preparados para actuar
                                con seguridad, reducir riesgos y proteger vidas
                                en entornos desafiantes.
                            </p>
                        </div>
                    </FadeIn>

                    <StaggerContainer staggerDelay={0.1}>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
                            <StaggerItem>
                                <HoverScale scale={1.03}>
                                    <Card className="border-2 hover:border-primary/50 transition-all group h-full">
                                        <CardContent className="pt-6 space-y-4">
                                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <Shield className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                                            </div>
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                Control de Riesgos Eléctricos
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Capacitación especializada en
                                                identificación y control de
                                                riesgos eléctricos según
                                                normativa vigente.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>

                            <StaggerItem>
                                <HoverScale scale={1.03}>
                                    <Card className="border-2 hover:border-primary/50 transition-all group h-full">
                                        <CardContent className="pt-6 space-y-4">
                                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <TrendingUp className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                                            </div>
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                Rescate en Altura
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Entrenamiento práctico en
                                                técnicas de trabajo y rescate en
                                                altura con equipamiento
                                                certificado.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>

                            <StaggerItem>
                                <HoverScale scale={1.03}>
                                    <Card className="border-2 hover:border-primary/50 transition-all group h-full">
                                        <CardContent className="pt-6 space-y-4">
                                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <Award className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                                            </div>
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                Primeros Auxilios
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Formación integral en respuesta
                                                a emergencias médicas y manejo
                                                del trauma en el lugar de
                                                trabajo.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>

                            <StaggerItem>
                                <HoverScale scale={1.03}>
                                    <Card className="border-2 hover:border-primary/50 transition-all group h-full">
                                        <CardContent className="pt-6 space-y-4">
                                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <Users className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                                            </div>
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                Formación de Brigadas
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Capacitación completa para
                                                brigadas de emergencia y
                                                protocolos de evacuación
                                                empresarial.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            <Benefits />

            {/* Why Choose Us */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <FadeIn>
                        <div className="mx-auto max-w-2xl text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance">
                                ¿Por qué elegir CAEMP?
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                                Somos líderes en capacitación con
                                infraestructura de vanguardia y metodología
                                probada.
                            </p>
                        </div>
                    </FadeIn>

                    <StaggerContainer staggerDelay={0.12}>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <StaggerItem>
                                <HoverScale scale={1.03}>
                                    <Card className="border-2 hover:border-primary/50 transition-all group h-full">
                                        <CardContent className="pt-6 space-y-4">
                                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <Zap className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                                            </div>
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                Respuesta Rápida
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Capacitación híbrida de alto
                                                nivel con respuesta ágil a las
                                                necesidades de tu empresa.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>

                            <StaggerItem>
                                <HoverScale scale={1.03}>
                                    <Card className="border-2 hover:border-primary/50 transition-all group h-full">
                                        <CardContent className="pt-6 space-y-4">
                                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <Users className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                                            </div>
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                Instructores Certificados
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Equipo de profesionales
                                                actualizados y certificados para
                                                una formación efectiva.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>

                            <StaggerItem>
                                <HoverScale scale={1.03}>
                                    <Card className="border-2 hover:border-primary/50 transition-all group h-full">
                                        <CardContent className="pt-6 space-y-4">
                                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <Shield className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                                            </div>
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                Campo Propio
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Entrenamiento práctico en
                                                nuestras instalaciones con
                                                equipamiento de vanguardia.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>

                            <StaggerItem>
                                <HoverScale scale={1.03}>
                                    <Card className="border-2 hover:border-primary/50 transition-all group h-full">
                                        <CardContent className="pt-6 space-y-4">
                                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <MapPin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                                            </div>
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                Cobertura Nacional
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Capacitación en todo el
                                                territorio nacional, llegamos
                                                donde nos necesites.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>

                            <StaggerItem>
                                <HoverScale scale={1.03}>
                                    <Card className="border-2 hover:border-primary/50 transition-all group h-full">
                                        <CardContent className="pt-6 space-y-4">
                                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <Award className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                                            </div>
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                Certificación Oficial
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Certificados reconocidos que
                                                cumplen con todas las normativas
                                                vigentes.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>

                            <StaggerItem>
                                <HoverScale scale={1.03}>
                                    <Card className="border-2 hover:border-primary/50 transition-all group h-full">
                                        <CardContent className="pt-6 space-y-4">
                                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <TrendingUp className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                                            </div>
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                Mejora Continua
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Metodología actualizada
                                                constantemente según las últimas
                                                normativas y tecnologías.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* Featured Courses */}
            <section className="py-16 md:py-24 bg-muted/30">
                <div className="container">
                    <FadeIn>
                        <div className="mx-auto max-w-2xl text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance">
                                Cursos Destacados
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                                Programas de capacitación diseñados para las
                                necesidades de tu empresa.
                            </p>
                        </div>
                    </FadeIn>

                    <StaggerContainer staggerDelay={0.15}>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            <StaggerItem>
                                <HoverScale scale={1.02}>
                                    <Card className="overflow-hidden transition-all group h-full py-0 gap-0">
                                        <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
                                            <img
                                                src="/electrical-safety-training.jpg"
                                                alt="Control de Riesgos Eléctricos"
                                                className="object-cover w-full h-full opacity-80 group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <CardContent className="p-6 space-y-4">
                                            <div className="flex items-center gap-2">
                                                <Badge variant="secondary">
                                                    Presencial
                                                </Badge>
                                                <Badge variant="outline">
                                                    16 horas
                                                </Badge>
                                            </div>
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                Control de Riesgos Eléctricos
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Capacitación en prevención y
                                                control de riesgos eléctricos
                                                según normativa vigente.
                                            </p>
                                            <Button asChild className="w-full">
                                                <Link href="/cursos/riesgos-electricos">
                                                    Ver Detalles
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>

                            <StaggerItem>
                                <HoverScale scale={1.02}>
                                    <Card className="overflow-hidden transition-all group h-full py-0 gap-0">
                                        <div className="aspect-video bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
                                            <img
                                                src="/height-rescue-training.jpg"
                                                alt="Rescate en Altura"
                                                className="object-cover w-full h-full opacity-80 group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <CardContent className="p-6 space-y-4">
                                            <div className="flex items-center gap-2">
                                                <Badge variant="secondary">
                                                    Presencial
                                                </Badge>
                                                <Badge variant="outline">
                                                    24 horas
                                                </Badge>
                                            </div>
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                Técnicas de Rescate en Altura
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Entrenamiento especializado en
                                                trabajo y rescate en altura con
                                                equipamiento certificado.
                                            </p>
                                            <Button asChild className="w-full">
                                                <Link href="/cursos/rescate-altura">
                                                    Ver Detalles
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>

                            <StaggerItem>
                                <HoverScale scale={1.02}>
                                    <Card className="overflow-hidden transition-all group h-full py-0 gap-0">
                                        <div className="aspect-video bg-gradient-to-br from-red-500 to-red-600 relative overflow-hidden">
                                            <img
                                                src="/first-aid-training.png"
                                                alt="Primeros Auxilios"
                                                className="object-cover w-full h-full opacity-80 group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <CardContent className="p-6 space-y-4">
                                            <div className="flex items-center gap-2">
                                                <Badge variant="secondary">
                                                    Híbrido
                                                </Badge>
                                                <Badge variant="outline">
                                                    12 horas
                                                </Badge>
                                            </div>
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                Primeros Auxilios y Trauma
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Formación en respuesta a
                                                emergencias y manejo del trauma
                                                en el lugar de trabajo.
                                            </p>
                                            <Button asChild className="w-full">
                                                <Link href="/cursos/primeros-auxilios">
                                                    Ver Detalles
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>

                            <StaggerItem>
                                <HoverScale scale={1.02}>
                                    <Card className="overflow-hidden transition-all group h-full py-0 gap-0">
                                        <div className="aspect-video bg-gradient-to-br from-green-500 to-green-600 relative overflow-hidden">
                                            <img
                                                src="/emergency-brigade-training.jpg"
                                                alt="Formación de Brigadas"
                                                className="object-cover w-full h-full opacity-80 group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <CardContent className="p-6 space-y-4">
                                            <div className="flex items-center gap-2">
                                                <Badge variant="secondary">
                                                    Presencial
                                                </Badge>
                                                <Badge variant="outline">
                                                    20 horas
                                                </Badge>
                                            </div>
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                Formación de Brigadas
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Capacitación integral para
                                                brigadas de emergencia y
                                                protocolos de evacuación.
                                            </p>
                                            <Button asChild className="w-full">
                                                <Link href="/cursos/brigadas">
                                                    Ver Detalles
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>
                        </div>
                    </StaggerContainer>

                    <FadeIn delay={0.3}>
                        <div className="text-center mt-12">
                            <HoverScale>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    asChild
                                    className="bg-transparent"
                                >
                                    <Link href="/cursos">
                                        Ver Todos los Cursos
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </HoverScale>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <TrusUs />

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
                <div className="absolute top-10 left-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl animate-float" />
                <div
                    className="absolute bottom-10 right-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-2xl animate-float"
                    style={{ animationDelay: "1.5s" }}
                />
                <div className="container relative">
                    <FadeIn delay={0.2}>
                        <div className="mx-auto max-w-3xl text-center space-y-8">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
                                ¿Listo para capacitar a tu equipo?
                            </h2>
                            <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
                                Solicita una cotización personalizada y descubre
                                cómo podemos ayudarte a mejorar la seguridad
                                laboral en tu empresa.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <HoverScale>
                                    <Button
                                        size="lg"
                                        variant="secondary"
                                        asChild
                                        className="text-base"
                                    >
                                        <Link href="#">
                                            Solicitar Cotización
                                        </Link>
                                    </Button>
                                </HoverScale>
                                <HoverScale>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        asChild
                                        className="text-base bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                                    >
                                        <Link href="/cursos">
                                            Explorar Cursos
                                        </Link>
                                    </Button>
                                </HoverScale>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </div>
    );
}
