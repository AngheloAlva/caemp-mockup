"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { Search, Clock, Users, Star, Filter } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { HoverScale } from "@/components/animations/hover-scale";

const courses = [
    {
        id: "riesgos-electricos",
        title: "Control de Riesgos Eléctricos",
        category: "Prevención de Riesgos",
        description:
            "Capacitación completa en prevención y control de riesgos eléctricos según normativa chilena vigente.",
        duration: "16 horas",
        students: 450,
        rating: 4.8,
        level: "Intermedio",
        modality: "Presencial",
        image: "/electrical-safety-training.jpg",
        price: "Consultar",
    },
    {
        id: "rescate-altura",
        title: "Técnicas de Rescate en Altura",
        category: "Trabajo en Altura",
        description:
            "Entrenamiento especializado en trabajo y rescate en altura con equipamiento certificado y prácticas reales.",
        duration: "24 horas",
        students: 380,
        rating: 4.9,
        level: "Avanzado",
        modality: "Presencial",
        image: "/height-rescue-training.jpg",
        price: "Consultar",
    },
    {
        id: "primeros-auxilios",
        title: "Primeros Auxilios y Manejo del Trauma",
        category: "Salud y Emergencias",
        description:
            "Formación integral en respuesta a emergencias, primeros auxilios y manejo del trauma en el lugar de trabajo.",
        duration: "12 horas",
        students: 620,
        rating: 4.7,
        level: "Básico",
        modality: "Híbrido",
        image: "/first-aid-training.png",
        price: "Consultar",
    },
    {
        id: "brigadas",
        title: "Formación de Brigadas de Emergencia",
        category: "Gestión de Emergencias",
        description:
            "Capacitación integral para brigadas de emergencia, protocolos de evacuación y gestión de crisis.",
        duration: "20 horas",
        students: 340,
        rating: 4.8,
        level: "Intermedio",
        modality: "Presencial",
        image: "/emergency-brigade-training.jpg",
        price: "Consultar",
    },
    {
        id: "espacios-confinados",
        title: "Trabajo en Espacios Confinados",
        category: "Prevención de Riesgos",
        description:
            "Técnicas y protocolos de seguridad para trabajo en espacios confinados con certificación oficial.",
        duration: "16 horas",
        students: 280,
        rating: 4.6,
        level: "Avanzado",
        modality: "Presencial",
        image: "/placeholder.svg?height=400&width=600",
        price: "Consultar",
    },
    {
        id: "extincion-incendios",
        title: "Extinción de Incendios",
        category: "Gestión de Emergencias",
        description:
            "Capacitación práctica en uso de extintores, técnicas de extinción y prevención de incendios.",
        duration: "8 horas",
        students: 520,
        rating: 4.7,
        level: "Básico",
        modality: "Presencial",
        image: "/placeholder.svg?height=400&width=600",
        price: "Consultar",
    },
    {
        id: "izaje-cargas",
        title: "Izaje y Manipulación de Cargas",
        category: "Operaciones",
        description:
            "Técnicas seguras de izaje, manipulación y transporte de cargas pesadas con equipamiento especializado.",
        duration: "16 horas",
        students: 310,
        rating: 4.5,
        level: "Intermedio",
        modality: "Presencial",
        image: "/placeholder.svg?height=400&width=600",
        price: "Consultar",
    },
    {
        id: "rcp-dea",
        title: "RCP y Uso de DEA",
        category: "Salud y Emergencias",
        description:
            "Reanimación cardiopulmonar y uso de desfibrilador externo automático con certificación internacional.",
        duration: "8 horas",
        students: 680,
        rating: 4.9,
        level: "Básico",
        modality: "Híbrido",
        image: "/placeholder.svg?height=400&width=600",
        price: "Consultar",
    },
];

export default function CursosPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            {/* Page Header */}
            <section className="border-b bg-muted/30 py-12">
                <div className="container">
                    <FadeIn>
                        <div className="mx-auto max-w-3xl text-center space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
                                Catálogo de Cursos
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                                Descubre nuestra amplia oferta de capacitaciones
                                en prevención de riesgos y seguridad laboral.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Filters and Search */}
            <section className="border-b bg-background py-6">
                <div className="container">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between animate-slide-up">
                        <div className="flex-1 max-w-md">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    placeholder="Buscar cursos..."
                                    className="pl-10 hover:border-primary/50 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Select defaultValue="all">
                                <SelectTrigger className="w-full sm:w-[180px] hover:border-primary/50 transition-colors">
                                    <Filter className="h-4 w-4 mr-2" />
                                    <SelectValue placeholder="Categoría" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        Todas las categorías
                                    </SelectItem>
                                    <SelectItem value="prevencion">
                                        Prevención de Riesgos
                                    </SelectItem>
                                    <SelectItem value="altura">
                                        Trabajo en Altura
                                    </SelectItem>
                                    <SelectItem value="salud">
                                        Salud y Emergencias
                                    </SelectItem>
                                    <SelectItem value="emergencias">
                                        Gestión de Emergencias
                                    </SelectItem>
                                    <SelectItem value="operaciones">
                                        Operaciones
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            <Select defaultValue="all">
                                <SelectTrigger className="w-full sm:w-[180px] hover:border-primary/50 transition-colors">
                                    <SelectValue placeholder="Nivel" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        Todos los niveles
                                    </SelectItem>
                                    <SelectItem value="basico">
                                        Básico
                                    </SelectItem>
                                    <SelectItem value="intermedio">
                                        Intermedio
                                    </SelectItem>
                                    <SelectItem value="avanzado">
                                        Avanzado
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            <Select defaultValue="all">
                                <SelectTrigger className="w-full sm:w-[180px] hover:border-primary/50 transition-colors">
                                    <SelectValue placeholder="Modalidad" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        Todas las modalidades
                                    </SelectItem>
                                    <SelectItem value="presencial">
                                        Presencial
                                    </SelectItem>
                                    <SelectItem value="hibrido">
                                        Híbrido
                                    </SelectItem>
                                    <SelectItem value="online">
                                        Online
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between animate-slide-up animate-delay-100">
                        <p className="text-sm text-muted-foreground">
                            Mostrando {courses.length} cursos
                        </p>
                        <Select defaultValue="popular">
                            <SelectTrigger className="w-[180px] hover:border-primary/50 transition-colors">
                                <SelectValue placeholder="Ordenar por" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="popular">
                                    Más populares
                                </SelectItem>
                                <SelectItem value="rating">
                                    Mejor valorados
                                </SelectItem>
                                <SelectItem value="recent">
                                    Más recientes
                                </SelectItem>
                                <SelectItem value="duration">
                                    Duración
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </section>

            {/* Course Grid */}
            <section className="py-12">
                <div className="container">
                    <StaggerContainer staggerDelay={0.08}>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {courses.map((course, index) => (
                                <StaggerItem key={course.id}>
                                    <HoverScale scale={1.02}>
                                        <Card className="overflow-hidden transition-all group h-full py-0 gap-0">
                                            <Link href={`/cursos/${course.id}`}>
                                                <div className="aspect-video bg-muted relative overflow-hidden">
                                                    <img
                                                        src={
                                                            course.image ||
                                                            "/placeholder.svg"
                                                        }
                                                        alt={course.title}
                                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute top-3 right-3">
                                                        <Badge
                                                            variant="secondary"
                                                            className="bg-background/90 backdrop-blur"
                                                        >
                                                            {course.modality}
                                                        </Badge>
                                                    </div>
                                                </div>
                                                <CardContent className="p-5 space-y-3">
                                                    <div className="space-y-2">
                                                        <Badge
                                                            variant="outline"
                                                            className="text-xs"
                                                        >
                                                            {course.category}
                                                        </Badge>
                                                        <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                                            {course.title}
                                                        </h3>
                                                    </div>

                                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                                        {course.description}
                                                    </p>

                                                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                                                        <div className="flex items-center gap-1">
                                                            <Clock className="h-4 w-4" />
                                                            <span>
                                                                {
                                                                    course.duration
                                                                }
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Users className="h-4 w-4" />
                                                            <span>
                                                                {
                                                                    course.students
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between pt-2 border-t">
                                                        <div className="flex items-center gap-1">
                                                            <Star className="h-4 w-4 fill-primary text-primary" />
                                                            <span className="font-semibold">
                                                                {course.rating}
                                                            </span>
                                                            <span className="text-sm text-muted-foreground">
                                                                (
                                                                {
                                                                    course.students
                                                                }
                                                                )
                                                            </span>
                                                        </div>
                                                        <Badge variant="secondary">
                                                            {course.level}
                                                        </Badge>
                                                    </div>

                                                    <Button
                                                        className="w-full mt-2"
                                                        asChild
                                                    >
                                                        <span>
                                                            Ver Detalles
                                                        </span>
                                                    </Button>
                                                </CardContent>
                                            </Link>
                                        </Card>
                                    </HoverScale>
                                </StaggerItem>
                            ))}
                        </div>
                    </StaggerContainer>

                    {/* Pagination */}
                    <FadeIn delay={0.3}>
                        <div className="mt-12 flex justify-center">
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    disabled
                                    className="hover-lift bg-transparent"
                                >
                                    Anterior
                                </Button>
                                <Button
                                    variant="default"
                                    size="sm"
                                    className="hover-lift"
                                >
                                    1
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="hover-lift bg-transparent"
                                >
                                    2
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="hover-lift bg-transparent"
                                >
                                    3
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="hover-lift bg-transparent"
                                >
                                    Siguiente
                                </Button>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-muted/30 border-t">
                <div className="container">
                    <FadeIn>
                        <div className="mx-auto max-w-3xl text-center space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight text-balance">
                                ¿No encuentras el curso que buscas?
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                                Contáctanos y diseñaremos un programa de
                                capacitación personalizado para las necesidades
                                específicas de tu empresa.
                            </p>
                            <HoverScale>
                                <Button size="lg" asChild>
                                    <Link href="/cotizacion">
                                        Solicitar Capacitación Personalizada
                                    </Link>
                                </Button>
                            </HoverScale>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </div>
    );
}
