"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
    Users,
    Award,
    Target,
    TrendingUp,
    BookOpen,
    Star,
    ArrowRight,
    Lightbulb,
    Heart,
    Zap,
    ArrowUpRightIcon,
} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { SlideIn } from "@/components/animations/slide-in";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { HoverScale } from "@/components/animations/hover-scale";
import { CrecimientoHeader } from "@/components/crecimiento-header";
import { CrecimientoFooter } from "@/components/crecimientofooter";

export default function CrecimientoPage() {
    const talleres = [
        {
            id: "liderazgo-efectivo",
            title: "Manejo Excel nivel avanzado",
            category: "Excel",
            description: "Curso de manejo de excel nivel avanzado.",
            duration: "16 horas",
            level: "Avanzado",
            price: "1.000.000",
            image: "/excel.png",
        },
        {
            id: "trabajo-equipo",
            title: "Manejo Excel nivel medio",
            category: "Excel",
            description: "Curso de manejo de excel nivel medio.",
            duration: "12 horas",
            level: "Medio",
            price: "1.000.000",
            image: "/excel.png",
        },
        {
            id: "coaching-empresarial",
            title: "Manejo Excel nivel básico",
            category: "Excel",
            description: "Curso de manejo de excel nivel básico.",
            duration: "20 horas",
            level: "Básico",
            price: "1.000.000",
            image: "/excel.png",
        },
        {
            id: "comunicacion-efectiva",
            title: "Curso minitiva",
            category: "Minitiva",
            description: "Curso de ejemplo para minitiva.",
            duration: "8 horas",
            level: "Básico",
            price: "1.000.000",
            image: "/placeholder.svg?height=400&width=600",
        },
    ];

    return (
        <div className="flex min-h-screen flex-col">
            <CrecimientoHeader />

            <section
                className="relative overflow-hidden text-white"
                style={{ backgroundColor: "#55206C" }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#55206C] via-[#6a2d85] to-[#55206C] opacity-90" />
                <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" />
                <div
                    className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"
                    style={{ animationDelay: "1s" }}
                />
                <div className="container relative py-24 md:py-32 lg:py-40">
                    <div className="mx-auto max-w-3xl text-center space-y-8">
                        <FadeIn delay={0.2}>
                            <Badge
                                variant="secondary"
                                className="mb-4 bg-white/20 text-white border-white/30"
                            >
                                Desarrollo profesional y personal transformador
                            </Badge>
                        </FadeIn>
                        <SlideIn delay={0.3} direction="up">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                                Crecemos contigo: aprende, lidera y alcanza tu
                                máximo potencial
                            </h1>
                        </SlideIn>
                        <SlideIn delay={0.4} direction="up">
                            <p className="text-xl text-white/90 leading-relaxed text-pretty">
                                Donde el aprendizaje se encuentra con la acción.
                                ¡Descubre cómo avanzar más allá de tus límites!
                            </p>
                        </SlideIn>
                        <SlideIn delay={0.5} direction="up">
                            <div className="flex flex-wrap gap-4 justify-center">
                                <HoverScale>
                                    <Button
                                        size="lg"
                                        className="bg-white text-[#55206C] hover:bg-white/90 group relative inline-flex items-center justify-center rounded-md  font-semibold"
                                    >
                                        <Link href="#talleres">
                                            Ver Talleres
                                        </Link>
                                        <div className="relative h-4 w-4 overflow-hidden">
                                            <div className="absolute transition-all duration-200 group-hover:-translate-y-4 group-hover:translate-x-3">
                                                <ArrowUpRightIcon className="h-4 stroke-3 w-4" />
                                                <ArrowUpRightIcon className="h-4 stroke-3 w-4 -translate-x-3" />
                                            </div>
                                        </div>
                                    </Button>
                                </HoverScale>
                                <HoverScale>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-white hover:bg-white/90 hover:text-[#55206C] text-white bg-white/10"
                                        asChild
                                    >
                                        <Link href="#">Contáctanos</Link>
                                    </Button>
                                </HoverScale>
                            </div>
                        </SlideIn>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background">
                <div className="container">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <SlideIn direction="left" delay={0.2}>
                            <div className="space-y-6">
                                <FadeIn>
                                    <Badge
                                        className="mb-2"
                                        style={{
                                            backgroundColor: "#55206C",
                                            color: "white",
                                        }}
                                    >
                                        Quiénes Somos
                                    </Badge>
                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                                        Desarrollo profesional y personal
                                        transformador
                                    </h2>
                                </FadeIn>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    En Crecimiento, parte del Grupo CAEMP,
                                    impulsa el desarrollo profesional y personal
                                    con programas de capacitación
                                    transformadores en liderazgo, coaching y
                                    trabajo en equipo.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Sus cursos, basados en metodologías
                                    modernas, convierten el potencial humano en
                                    resultados tangibles, fortaleciendo
                                    relaciones laborales y optimizando el
                                    rendimiento organizacional.
                                </p>

                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-[#55206C] hover:bg-[#55206C]/90 hover:scale-105 transition-all duration-300"
                                >
                                    <Link href="#vision-mision">
                                        Más información
                                        <ArrowRight className=" h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        </SlideIn>

                        <SlideIn direction="right" delay={0.3}>
                            <div className="relative group">
                                <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                                    <img
                                        alt="Crecimiento"
                                        src="/team-work.jpg"
                                        className="object-cover group-hover:scale-105 cursor-crosshair transition-all duration-300 w-full h-full"
                                    />
                                </div>
                                <div
                                    className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg opacity-40"
                                    style={{ backgroundColor: "#55206C" }}
                                />
                            </div>
                        </SlideIn>
                    </div>
                </div>
            </section>

            <section id="vision-mision" className="py-16 md:py-24 bg-muted/30">
                <div className="container">
                    <FadeIn>
                        <div className="mx-auto max-w-2xl text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                                Nuestra Visión y Misión
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Comprometidos con el crecimiento humano y el
                                éxito organizacional
                            </p>
                        </div>
                    </FadeIn>

                    <div>
                        <StaggerContainer
                            staggerDelay={0.15}
                            className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto"
                        >
                            <StaggerItem>
                                <HoverScale scale={1.02}>
                                    <Card className="h-full border-2 hover:shadow-lg transition-all">
                                        <CardContent className="space-y-4">
                                            <div
                                                className="h-14 w-14 rounded-full flex items-center justify-center text-white"
                                                style={{
                                                    backgroundColor: "#55206C",
                                                }}
                                            >
                                                <Target className="h-7 w-7" />
                                            </div>
                                            <h3 className="text-2xl font-semibold">
                                                Visión
                                            </h3>
                                            <ul className="space-y-3 text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <ArrowRight
                                                        className="h-5 w-5 mt-0.5 flex-shrink-0"
                                                        style={{
                                                            color: "#55206C",
                                                        }}
                                                    />
                                                    <span>
                                                        Ser reconocidos como
                                                        líderes en desarrollo de
                                                        habilidades
                                                        interpersonales
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ArrowRight
                                                        className="h-5 w-5 mt-0.5 flex-shrink-0"
                                                        style={{
                                                            color: "#55206C",
                                                        }}
                                                    />
                                                    <span>
                                                        Desarrollo de programas
                                                        de capacitación
                                                        innovadores
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ArrowRight
                                                        className="h-5 w-5 mt-0.5 flex-shrink-0"
                                                        style={{
                                                            color: "#55206C",
                                                        }}
                                                    />
                                                    <span>
                                                        Impacto positivo en el
                                                        crecimiento humano
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ArrowRight
                                                        className="h-5 w-5 mt-0.5 flex-shrink-0"
                                                        style={{
                                                            color: "#55206C",
                                                        }}
                                                    />
                                                    <span>
                                                        Contribuir al éxito
                                                        organizacional
                                                    </span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>

                            <StaggerItem>
                                <HoverScale scale={1.02}>
                                    <Card className="h-full border-2 hover:shadow-lg transition-all">
                                        <CardContent className="space-y-4">
                                            <div
                                                className="h-14 w-14 rounded-full flex items-center justify-center text-white"
                                                style={{
                                                    backgroundColor: "#55206C",
                                                }}
                                            >
                                                <Heart className="h-7 w-7" />
                                            </div>
                                            <h3 className="text-2xl font-semibold">
                                                Misión
                                            </h3>
                                            <ul className="space-y-3 text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <ArrowRight
                                                        className="h-5 w-5 mt-0.5 flex-shrink-0"
                                                        style={{
                                                            color: "#55206C",
                                                        }}
                                                    />
                                                    <span>
                                                        Acompañar a las
                                                        organizaciones en su
                                                        camino hacia el éxito
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ArrowRight
                                                        className="h-5 w-5 mt-0.5 flex-shrink-0"
                                                        style={{
                                                            color: "#55206C",
                                                        }}
                                                    />
                                                    <span>
                                                        Fortalecimiento de las
                                                        habilidades
                                                        interpersonales
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ArrowRight
                                                        className="h-5 w-5 mt-0.5 flex-shrink-0"
                                                        style={{
                                                            color: "#55206C",
                                                        }}
                                                    />
                                                    <span>
                                                        Promover el liderazgo
                                                        efectivo en todos los
                                                        niveles
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <ArrowRight
                                                        className="h-5 w-5 mt-0.5 flex-shrink-0"
                                                        style={{
                                                            color: "#55206C",
                                                        }}
                                                    />
                                                    <span>
                                                        Transformar el potencial
                                                        en resultados tangibles
                                                    </span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            <section id="talleres" className="py-16 md:py-24 bg-background">
                <div className="container">
                    <FadeIn>
                        <div className="mx-auto max-w-2xl text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                                Talleres Disponibles
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Donde el aprendizaje se encuentra con la acción.
                                ¡Descubre cómo avanzar más allá de tus límites!
                            </p>
                        </div>
                    </FadeIn>

                    <StaggerContainer staggerDelay={0.1}>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {talleres.map((taller) => (
                                <StaggerItem key={taller.id}>
                                    <HoverScale scale={1.03}>
                                        <Card className="overflow-hidden transition-all group h-full py-0 gap-0 border-2 hover:border-[#55206C]/50">
                                            <div className="aspect-video bg-muted relative overflow-hidden">
                                                <img
                                                    src={taller.image}
                                                    alt={taller.title}
                                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute top-3 right-3">
                                                    <Badge
                                                        variant="secondary"
                                                        className="bg-background/90 backdrop-blur"
                                                    >
                                                        {taller.level}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <CardContent className="p-5 space-y-3">
                                                <div className="space-y-2">
                                                    <Badge
                                                        variant="outline"
                                                        className="text-xs"
                                                        style={{
                                                            borderColor:
                                                                "#55206C",
                                                            color: "#55206C",
                                                        }}
                                                    >
                                                        {taller.category}
                                                    </Badge>
                                                    <h3 className="font-semibold text-lg leading-tight group-hover:text-[#55206C] transition-colors line-clamp-2">
                                                        {taller.title}
                                                    </h3>
                                                </div>

                                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                                    {taller.description}
                                                </p>

                                                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                                                    <div className="flex items-center gap-1">
                                                        <BookOpen className="h-4 w-4" />
                                                        <span>
                                                            {taller.duration}
                                                        </span>
                                                    </div>
                                                </div>

                                                <Button
                                                    className="w-full mt-2"
                                                    style={{
                                                        backgroundColor:
                                                            "#55206C",
                                                    }}
                                                    asChild
                                                >
                                                    <Link
                                                        href={`/talleres/${taller.id}`}
                                                    >
                                                        Más información
                                                    </Link>
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </HoverScale>
                                </StaggerItem>
                            ))}
                        </div>
                    </StaggerContainer>

                    <FadeIn delay={0.5}>
                        <div className="text-center mt-12">
                            <HoverScale>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    style={{
                                        borderColor: "#55206C",
                                        color: "#55206C",
                                    }}
                                    asChild
                                >
                                    <Link href="/talleres">
                                        Ver todos los talleres
                                        <ArrowRight className=" h-5 w-5" />
                                    </Link>
                                </Button>
                            </HoverScale>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-muted/30">
                <div className="container">
                    <FadeIn>
                        <div className="mx-auto max-w-2xl text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                                ¿Por qué elegir Crecimiento?
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Metodologías modernas que transforman el
                                potencial en resultados
                            </p>
                        </div>
                    </FadeIn>

                    <StaggerContainer staggerDelay={0.15}>
                        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                            <StaggerItem>
                                <HoverScale scale={1.03}>
                                    <Card className="border-2 hover:border-[#55206C]/50 transition-all group h-full">
                                        <CardContent className="pt-3 space-y-4">
                                            <div
                                                className="h-12 w-12 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform"
                                                style={{
                                                    backgroundColor: "#55206C",
                                                }}
                                            >
                                                <Lightbulb className="h-6 w-6" />
                                            </div>
                                            <h3 className="text-xl font-semibold group-hover:text-[#55206C] transition-colors">
                                                Metodologías Innovadoras
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Programas basados en las últimas
                                                tendencias en desarrollo humano
                                                y organizacional.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>

                            <StaggerItem>
                                <HoverScale scale={1.03}>
                                    <Card className="border-2 hover:border-[#55206C]/50 transition-all group h-full">
                                        <CardContent className="pt-3 space-y-4">
                                            <div
                                                className="h-12 w-12 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform"
                                                style={{
                                                    backgroundColor: "#55206C",
                                                }}
                                            >
                                                <Users className="h-6 w-6" />
                                            </div>
                                            <h3 className="text-xl font-semibold group-hover:text-[#55206C] transition-colors">
                                                Expertos Certificados
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Facilitadores con amplia
                                                experiencia en coaching,
                                                liderazgo y desarrollo
                                                organizacional.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>

                            <StaggerItem>
                                <HoverScale scale={1.03}>
                                    <Card className="border-2 hover:border-[#55206C]/50 transition-all group h-full">
                                        <CardContent className="pt-3 space-y-4">
                                            <div
                                                className="h-12 w-12 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform"
                                                style={{
                                                    backgroundColor: "#55206C",
                                                }}
                                            >
                                                <TrendingUp className="h-6 w-6" />
                                            </div>
                                            <h3 className="text-xl font-semibold group-hover:text-[#55206C] transition-colors">
                                                Resultados Medibles
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Impacto tangible en el desempeño
                                                individual y organizacional con
                                                métricas claras.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA Final */}
            <section
                className="py-16 md:py-24 text-white relative overflow-hidden"
                style={{ backgroundColor: "#55206C" }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#55206C] via-[#6a2d85] to-[#55206C] opacity-90" />
                <div className="container relative">
                    <FadeIn>
                        <div className="mx-auto max-w-3xl text-center space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                                ¿Listo para transformar tu organización?
                            </h2>
                            <p className="text-xl text-white/90 leading-relaxed text-pretty">
                                Contáctanos y descubre cómo nuestros programas
                                pueden impulsar el crecimiento de tu equipo.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center pt-4">
                                <HoverScale>
                                    <Button
                                        size="lg"
                                        className="bg-white text-[#55206C] hover:bg-white/90"
                                        asChild
                                    >
                                        <Link href="/cotizacion">
                                            Solicitar Información
                                            <ArrowRight className=" h-5 w-5" />
                                        </Link>
                                    </Button>
                                </HoverScale>
                                <HoverScale>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-white text-white bg-white/10 hover:bg-white/90 hover:text-[#55206C]"
                                        asChild
                                    >
                                        <Link href="tel:+56987654321">
                                            Llamar Ahora
                                        </Link>
                                    </Button>
                                </HoverScale>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <CrecimientoFooter />
        </div>
    );
}
