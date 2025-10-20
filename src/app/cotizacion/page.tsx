"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    CheckCircle2,
    Building2,
    Mail,
    Phone,
    User,
    Users,
    MessageSquare,
    Calendar,
    X,
} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { SlideIn } from "@/components/animations/slide-in";
import { HoverScale } from "@/components/animations/hover-scale";
import { useState } from "react";

const availableCourses = [
    {
        id: "riesgos-electricos",
        title: "Control de Riesgos Eléctricos",
        category: "Prevención de Riesgos",
    },
    {
        id: "rescate-altura",
        title: "Técnicas de Rescate en Altura",
        category: "Trabajo en Altura",
    },
    {
        id: "primeros-auxilios",
        title: "Primeros Auxilios y Manejo del Trauma",
        category: "Salud y Emergencias",
    },
    {
        id: "espacios-confinados",
        title: "Trabajo en Espacios Confinados",
        category: "Prevención de Riesgos",
    },
    {
        id: "brigada-emergencia",
        title: "Formación de Brigadas de Emergencia",
        category: "Emergencias",
    },
    {
        id: "izaje-carga",
        title: "Izaje y Manejo de Cargas",
        category: "Operaciones",
    },
    {
        id: "prevencion-incendios",
        title: "Prevención y Control de Incendios",
        category: "Emergencias",
    },
    {
        id: "ergonomia",
        title: "Ergonomía y Manejo Manual de Cargas",
        category: "Salud Ocupacional",
    },
];

export default function CotizacionPage() {
    const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        cargo: "",
        participantes: "",
        fechaPreferida: "",
        mensaje: "",
    });

    const toggleCourse = (courseId: string) => {
        setSelectedCourses((prev) =>
            prev.includes(courseId)
                ? prev.filter((id) => id !== courseId)
                : [...prev, courseId]
        );
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", { ...formData, selectedCourses });

        alert("Cotización enviada exitosamente. Nos contactaremos pronto.");
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <section className="relative overflow-hidden bg-primary text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-primary opacity-90" />
                <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" />
                <div
                    className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"
                    style={{ animationDelay: "1s" }}
                />
                <div className="container relative py-16 md:py-24">
                    <div className="mx-auto max-w-3xl text-center space-y-6">
                        <SlideIn delay={0.3} direction="up">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
                                Solicita tu Cotización
                            </h1>
                        </SlideIn>
                        <SlideIn delay={0.4} direction="up">
                            <p className="text-xl text-white/90 leading-relaxed text-pretty">
                                Completa el formulario y nos contactaremos
                                contigo en menos de 24 horas con una propuesta
                                personalizada.
                            </p>
                        </SlideIn>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-muted/30">
                <div className="container max-w-6xl">
                    <div className="grid gap-6 lg:grid-cols-3">
                        <div>
                            <SlideIn
                                direction="left"
                                delay={0.2}
                                className="lg:col-span-1 space-y-6"
                            >
                                <Card className="gap-2">
                                    <CardHeader>
                                        <CardTitle className="text-xl">
                                            ¿Por qué elegirnos?
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-medium">
                                                    Respuesta Rápida
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    Cotización en menos de 24
                                                    horas
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-medium">
                                                    Propuesta Personalizada
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    Adaptada a tus necesidades
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-medium">
                                                    Sin Compromiso
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    Cotización gratuita y sin
                                                    obligación
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-medium">
                                                    Instructores Certificados
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    Expertos en cada área
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="bg-primary text-white gap-2">
                                    <CardHeader>
                                        <CardTitle className="text-xl">
                                            ¿Necesitas ayuda?
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <p className="text-white/90 text-sm">
                                            Nuestro equipo está disponible para
                                            ayudarte
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Phone className="h-4 w-4" />
                                                <span>2 2667 6455</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Phone className="h-4 w-4" />
                                                <span>+56 9 3247 8827</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Mail className="h-4 w-4" />
                                                <span>contacto@caemp.cl</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </SlideIn>
                        </div>

                        <div className="lg:col-span-2">
                            <SlideIn direction="right" delay={0.3}>
                                <Card>
                                    <CardHeader className="gap-0">
                                        <CardTitle className="text-2xl">
                                            Completa tus datos
                                        </CardTitle>
                                        <p className="text-sm text-muted-foreground">
                                            Todos los campos son obligatorios
                                        </p>
                                    </CardHeader>

                                    <CardContent>
                                        <form
                                            onSubmit={handleSubmit}
                                            className="space-y-8"
                                        >
                                            <div className="space-y-4">
                                                <h3 className="font-semibold text-lg flex items-center gap-2">
                                                    <User className="h-5 w-5 text-primary" />
                                                    Información Personal
                                                </h3>
                                                <div className="grid gap-4 md:grid-cols-2">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="nombre">
                                                            Nombre Completo *
                                                        </Label>
                                                        <Input
                                                            id="nombre"
                                                            name="nombre"
                                                            placeholder="Juan Pérez"
                                                            value={
                                                                formData.nombre
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            required
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="email">
                                                            Email *
                                                        </Label>
                                                        <Input
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            placeholder="juan@empresa.cl"
                                                            value={
                                                                formData.email
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            required
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="telefono">
                                                            Teléfono *
                                                        </Label>
                                                        <Input
                                                            id="telefono"
                                                            name="telefono"
                                                            type="tel"
                                                            placeholder="+56 9 1234 5678"
                                                            value={
                                                                formData.telefono
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            required
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="cargo">
                                                            Cargo *
                                                        </Label>
                                                        <Input
                                                            id="cargo"
                                                            name="cargo"
                                                            placeholder="Gerente de RRHH"
                                                            value={
                                                                formData.cargo
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="font-semibold text-lg flex items-center gap-2">
                                                    <Building2 className="h-5 w-5 text-primary" />
                                                    Información de la Empresa
                                                </h3>
                                                <div className="grid gap-4 md:grid-cols-2">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="empresa">
                                                            Nombre de la Empresa
                                                            *
                                                        </Label>
                                                        <Input
                                                            id="empresa"
                                                            name="empresa"
                                                            placeholder="Mi Empresa S.A."
                                                            value={
                                                                formData.empresa
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            required
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="participantes">
                                                            Número de
                                                            Participantes *
                                                        </Label>
                                                        <Input
                                                            id="participantes"
                                                            name="participantes"
                                                            type="number"
                                                            min="1"
                                                            placeholder="10"
                                                            value={
                                                                formData.participantes
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="font-semibold text-lg flex items-center gap-2">
                                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                                    Cursos de Interés *
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Selecciona uno o más cursos
                                                    (puedes elegir varios)
                                                </p>

                                                {selectedCourses.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 p-4 bg-primary/5 rounded-lg border border-primary/20">
                                                        {selectedCourses.map(
                                                            (courseId) => {
                                                                const course =
                                                                    availableCourses.find(
                                                                        (c) =>
                                                                            c.id ===
                                                                            courseId
                                                                    );
                                                                return (
                                                                    <Badge
                                                                        key={
                                                                            courseId
                                                                        }
                                                                        className="bg-primary text-white hover:bg-primary/90 cursor-pointer"
                                                                        onClick={() =>
                                                                            toggleCourse(
                                                                                courseId
                                                                            )
                                                                        }
                                                                    >
                                                                        {
                                                                            course?.title
                                                                        }
                                                                        <X className="ml-1 h-3 w-3" />
                                                                    </Badge>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                )}

                                                <div className="grid gap-3 md:grid-cols-2">
                                                    {availableCourses.map(
                                                        (course) => {
                                                            const isSelected =
                                                                selectedCourses.includes(
                                                                    course.id
                                                                );
                                                            return (
                                                                <HoverScale
                                                                    key={
                                                                        course.id
                                                                    }
                                                                    scale={1.02}
                                                                >
                                                                    <div
                                                                        onClick={() =>
                                                                            toggleCourse(
                                                                                course.id
                                                                            )
                                                                        }
                                                                        className={`
                                                                            p-4 rounded-lg border-2 cursor-pointer transition-all
                                                                            ${
                                                                                isSelected
                                                                                    ? "border-primary bg-primary/5"
                                                                                    : "border-border hover:border-primary/50"
                                                                            }
                                                                        `}
                                                                    >
                                                                        <div className="flex items-start gap-3">
                                                                            <div
                                                                                className={`
                                                                                mt-0.5 h-5 w-5 rounded border-2 flex items-center justify-center flex-shrink-0
                                                                                ${
                                                                                    isSelected
                                                                                        ? "bg-primary border-primary"
                                                                                        : "border-muted-foreground"
                                                                                }
                                                                            `}
                                                                            >
                                                                                {isSelected && (
                                                                                    <CheckCircle2 className="h-4 w-4 text-white" />
                                                                                )}
                                                                            </div>
                                                                            <div className="flex-1 min-w-0">
                                                                                <p
                                                                                    className={`font-medium text-sm leading-tight ${
                                                                                        isSelected
                                                                                            ? "text-primary"
                                                                                            : ""
                                                                                    }`}
                                                                                >
                                                                                    {
                                                                                        course.title
                                                                                    }
                                                                                </p>
                                                                                <p className="text-xs text-muted-foreground mt-1">
                                                                                    {
                                                                                        course.category
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </HoverScale>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="font-semibold text-lg flex items-center gap-2">
                                                    <MessageSquare className="h-5 w-5 text-primary" />
                                                    Detalles Adicionales
                                                </h3>
                                                <div className="grid gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="fechaPreferida">
                                                            Fecha Preferida
                                                            (opcional)
                                                        </Label>
                                                        <Input
                                                            id="fechaPreferida"
                                                            name="fechaPreferida"
                                                            type="date"
                                                            value={
                                                                formData.fechaPreferida
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="mensaje">
                                                            Mensaje o
                                                            Requerimientos
                                                            Especiales
                                                            (opcional)
                                                        </Label>
                                                        <Textarea
                                                            id="mensaje"
                                                            name="mensaje"
                                                            placeholder="Cuéntanos más sobre tus necesidades específicas..."
                                                            rows={4}
                                                            value={
                                                                formData.mensaje
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-4">
                                                <HoverScale>
                                                    <Button
                                                        type="submit"
                                                        size="lg"
                                                        className="w-full"
                                                        disabled={
                                                            selectedCourses.length ===
                                                            0
                                                        }
                                                    >
                                                        Enviar Solicitud de
                                                        Cotización
                                                    </Button>
                                                </HoverScale>
                                                {selectedCourses.length ===
                                                    0 && (
                                                    <p className="text-sm text-muted-foreground text-center mt-2">
                                                        Debes seleccionar al
                                                        menos un curso
                                                    </p>
                                                )}
                                            </div>
                                        </form>
                                    </CardContent>
                                </Card>
                            </SlideIn>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
