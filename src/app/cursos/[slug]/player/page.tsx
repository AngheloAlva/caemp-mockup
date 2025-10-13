"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    PlayCircle,
    CheckCircle2,
    Clock,
    FileText,
    Download,
    Menu,
    X,
    ChevronDown,
    Lock,
} from "lucide-react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function CoursePlayerPage() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [currentLesson, setCurrentLesson] = useState(0);
    const [currentModule, setCurrentModule] = useState(0);

    const slug = useParams<{ slug: string }>();

    const course = {
        title: "Control de Riesgos Eléctricos",
        progress: 35,
        modules: [
            {
                title: "Módulo 1: Fundamentos de Electricidad",
                duration: "2 horas",
                completed: true,
                lessons: [
                    {
                        title: "Conceptos básicos de electricidad",
                        duration: "15:30",
                        completed: true,
                        type: "video",
                    },
                    {
                        title: "Tipos de corriente eléctrica",
                        duration: "12:45",
                        completed: true,
                        type: "video",
                    },
                    {
                        title: "Magnitudes eléctricas fundamentales",
                        duration: "18:20",
                        completed: true,
                        type: "video",
                    },
                    {
                        title: "Ley de Ohm y circuitos eléctricos",
                        duration: "20:15",
                        completed: true,
                        type: "video",
                    },
                    {
                        title: "Evaluación Módulo 1",
                        duration: "10:00",
                        completed: true,
                        type: "quiz",
                    },
                ],
            },
            {
                title: "Módulo 2: Riesgos Eléctricos",
                duration: "3 horas",
                completed: false,
                lessons: [
                    {
                        title: "Identificación de peligros eléctricos",
                        duration: "22:30",
                        completed: true,
                        type: "video",
                    },
                    {
                        title: "Efectos de la corriente eléctrica en el cuerpo",
                        duration: "25:45",
                        completed: false,
                        type: "video",
                    },
                    {
                        title: "Factores que influyen en la gravedad del accidente",
                        duration: "18:20",
                        completed: false,
                        type: "video",
                    },
                    {
                        title: "Casos de estudio y análisis de accidentes",
                        duration: "30:15",
                        completed: false,
                        type: "video",
                    },
                    {
                        title: "Material de lectura complementario",
                        duration: "15:00",
                        completed: false,
                        type: "reading",
                    },
                    {
                        title: "Evaluación Módulo 2",
                        duration: "15:00",
                        completed: false,
                        type: "quiz",
                    },
                ],
            },
            {
                title: "Módulo 3: Normativa y Legislación",
                duration: "3 horas",
                completed: false,
                lessons: [
                    {
                        title: "Marco legal chileno en seguridad eléctrica",
                        duration: "28:30",
                        completed: false,
                        type: "video",
                    },
                    {
                        title: "Normas técnicas aplicables (NCh Elec. 4/2003)",
                        duration: "32:45",
                        completed: false,
                        type: "video",
                    },
                    {
                        title: "Responsabilidades legales del empleador",
                        duration: "22:20",
                        completed: false,
                        type: "video",
                    },
                    {
                        title: "Procedimientos de fiscalización",
                        duration: "25:15",
                        completed: false,
                        type: "video",
                    },
                    {
                        title: "Documentos legales descargables",
                        duration: "10:00",
                        completed: false,
                        type: "reading",
                    },
                    {
                        title: "Evaluación Módulo 3",
                        duration: "15:00",
                        completed: false,
                        type: "quiz",
                    },
                ],
            },
            {
                title: "Módulo 4: Medidas de Control",
                duration: "4 horas",
                completed: false,
                lessons: [
                    {
                        title: "Equipos de protección personal",
                        duration: "30:30",
                        completed: false,
                        type: "video",
                    },
                    {
                        title: "Sistemas de puesta a tierra",
                        duration: "35:45",
                        completed: false,
                        type: "video",
                    },
                    {
                        title: "Dispositivos de protección diferencial",
                        duration: "28:20",
                        completed: false,
                        type: "video",
                    },
                    {
                        title: "Señalización y delimitación de áreas",
                        duration: "25:15",
                        completed: false,
                        type: "video",
                    },
                    {
                        title: "Guía práctica de EPP",
                        duration: "15:00",
                        completed: false,
                        type: "reading",
                    },
                    {
                        title: "Evaluación Módulo 4",
                        duration: "20:00",
                        completed: false,
                        type: "quiz",
                    },
                ],
            },
            {
                title: "Módulo 5: Procedimientos de Emergencia",
                duration: "3 horas",
                completed: false,
                lessons: [
                    {
                        title: "Primeros auxilios en accidentes eléctricos",
                        duration: "32:30",
                        completed: false,
                        type: "video",
                    },
                    {
                        title: "Protocolos de rescate",
                        duration: "28:45",
                        completed: false,
                        type: "video",
                    },
                    {
                        title: "Uso de extintores en incendios eléctricos",
                        duration: "22:20",
                        completed: false,
                        type: "video",
                    },
                    {
                        title: "Simulacro práctico",
                        duration: "45:15",
                        completed: false,
                        type: "video",
                    },
                    {
                        title: "Manual de emergencias",
                        duration: "20:00",
                        completed: false,
                        type: "reading",
                    },
                    {
                        title: "Evaluación Módulo 5",
                        duration: "15:00",
                        completed: false,
                        type: "quiz",
                    },
                ],
            },
            {
                title: "Módulo 6: Evaluación Final",
                duration: "1 hora",
                completed: false,
                lessons: [
                    {
                        title: "Repaso general del curso",
                        duration: "20:00",
                        completed: false,
                        type: "video",
                    },
                    {
                        title: "Examen teórico final",
                        duration: "30:00",
                        completed: false,
                        type: "quiz",
                    },
                    {
                        title: "Evaluación práctica",
                        duration: "45:00",
                        completed: false,
                        type: "practical",
                    },
                    {
                        title: "Obtener certificado",
                        duration: "5:00",
                        completed: false,
                        type: "certificate",
                    },
                ],
            },
        ],
    };

    const currentLessonData =
        course.modules[currentModule]?.lessons[currentLesson];

    const getLessonIcon = (type: string) => {
        switch (type) {
            case "video":
                return <PlayCircle className="h-4 w-4" />;
            case "quiz":
                return <FileText className="h-4 w-4" />;
            case "reading":
                return <FileText className="h-4 w-4" />;
            default:
                return <PlayCircle className="h-4 w-4" />;
        }
    };

    const goToNextLesson = () => {
        const currentModuleLessons = course.modules[currentModule].lessons;
        if (currentLesson < currentModuleLessons.length - 1) {
            setCurrentLesson(currentLesson + 1);
        } else if (currentModule < course.modules.length - 1) {
            setCurrentModule(currentModule + 1);
            setCurrentLesson(0);
        }
    };

    const goToPreviousLesson = () => {
        if (currentLesson > 0) {
            setCurrentLesson(currentLesson - 1);
        } else if (currentModule > 0) {
            setCurrentModule(currentModule - 1);
            setCurrentLesson(
                course.modules[currentModule - 1].lessons.length - 1
            );
        }
    };

    return (
        <div className="flex h-screen flex-col bg-background">
            {/* Top Navigation */}
            <header className="border-b bg-background">
                <div className="flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            {sidebarOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>
                        <div className="flex items-center gap-2">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="h-10 w-10 rounded-full bg-primary">
                                    <Image
                                        width={40}
                                        alt="CAEMP"
                                        height={40}
                                        src="/logo.png"
                                    />
                                </div>
                                <span className="font-bold hidden sm:inline">
                                    CAEMP
                                </span>
                            </Link>
                            <ChevronRight className="h-4 w-4 text-muted-foreground hidden sm:block" />
                            <span className="text-sm font-medium hidden md:inline">
                                {course.title}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-3">
                            <span className="text-sm text-muted-foreground">
                                Progreso del curso:
                            </span>
                            <div className="flex items-center gap-2">
                                <Progress
                                    value={course.progress}
                                    className="w-32"
                                />
                                <span className="text-sm font-semibold">
                                    {course.progress}%
                                </span>
                            </div>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                            <Link href={`/cursos/${slug.slug}`}>Salir</Link>
                        </Button>
                    </div>
                </div>
            </header>

            <div className="flex flex-1 ">
                {/* Main Content */}
                <div className="flex-1 flex flex-col ">
                    {/* Video Player */}
                    <div className="bg-black aspect-video w-full flex items-center justify-center relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                        <div className="relative z-10 text-center space-y-4 p-8">
                            <PlayCircle className="h-20 w-20 text-white mx-auto opacity-80" />
                            <div className="text-white">
                                <h2 className="text-2xl font-bold mb-2">
                                    {currentLessonData?.title}
                                </h2>
                                <p className="text-white/80">
                                    Duración: {currentLessonData?.duration}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Video Controls */}
                    <div className="border-b bg-muted/30 p-4 flex-shrink-0">
                        <div className="flex items-center justify-between">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={goToPreviousLesson}
                                disabled={
                                    currentModule === 0 && currentLesson === 0
                                }
                            >
                                <ChevronLeft className="h-4 w-4 mr-1" />
                                Anterior
                            </Button>

                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm">
                                    <Download className="h-4 w-4 mr-2" />
                                    Descargar Material
                                </Button>
                            </div>

                            <Button
                                variant="default"
                                size="sm"
                                onClick={goToNextLesson}
                            >
                                Siguiente
                                <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                        </div>
                    </div>

                    {/* Lesson Content */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="p-6">
                            <div className="max-w-4xl mx-auto space-y-6">
                                <div>
                                    <h1 className="text-3xl font-bold mb-2">
                                        {currentLessonData?.title}
                                    </h1>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            <span>
                                                {currentLessonData?.duration}
                                            </span>
                                        </div>
                                        <Badge variant="secondary">
                                            Módulo {currentModule + 1} - Lección{" "}
                                            {currentLesson + 1}
                                        </Badge>
                                    </div>
                                </div>

                                <Separator />

                                <div className="prose prose-sm max-w-none">
                                    <h2 className="font-bold">
                                        Descripción de la Lección
                                    </h2>
                                    <p className="text-muted-foreground mt-1 leading-relaxed">
                                        En esta lección aprenderás sobre los
                                        conceptos fundamentales relacionados con{" "}
                                        {currentLessonData?.title.toLowerCase()}
                                        . Este contenido es esencial para
                                        comprender los módulos posteriores y
                                        aplicar correctamente las medidas de
                                        seguridad en tu lugar de trabajo.
                                    </p>

                                    <h3 className=" font-bold mt-4">
                                        Objetivos de Aprendizaje
                                    </h3>
                                    <ul className="text-muted-foreground mt-1">
                                        <li>
                                            Comprender los conceptos clave del
                                            tema
                                        </li>
                                        <li>
                                            Identificar situaciones de riesgo
                                            relacionadas
                                        </li>
                                        <li>
                                            Aplicar las medidas de control
                                            apropiadas
                                        </li>
                                        <li>
                                            Reconocer la normativa aplicable
                                        </li>
                                    </ul>

                                    <h3 className=" font-bold mt-6">
                                        Material Complementario
                                    </h3>
                                    <div className="not-prose mt-1 space-y-3">
                                        <Card className="py-0">
                                            <CardContent className="p-4 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <FileText className="h-5 w-5 text-primary" />
                                                    <div>
                                                        <div className="font-semibold">
                                                            Presentación del
                                                            Módulo
                                                        </div>
                                                        <div className="text-sm text-muted-foreground">
                                                            PDF - 2.5 MB
                                                        </div>
                                                    </div>
                                                </div>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                >
                                                    <Download className="h-4 w-4 mr-2" />
                                                    Descargar
                                                </Button>
                                            </CardContent>
                                        </Card>

                                        <Card className="py-0">
                                            <CardContent className="p-4 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <FileText className="h-5 w-5 text-primary" />
                                                    <div>
                                                        <div className="font-semibold">
                                                            Guía de Estudio
                                                        </div>
                                                        <div className="text-sm text-muted-foreground">
                                                            PDF - 1.8 MB
                                                        </div>
                                                    </div>
                                                </div>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                >
                                                    <Download className="h-4 w-4 mr-2" />
                                                    Descargar
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    <h3 className=" font-bold mt-6">
                                        Contenido Adicional
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Este módulo incluye ejemplos prácticos
                                        basados en situaciones reales de la
                                        industria chilena. Aprenderás a
                                        identificar los riesgos más comunes en
                                        diferentes entornos laborales y cómo
                                        aplicar las medidas de control más
                                        efectivas según la normativa vigente.
                                    </p>

                                    <h3 className=" font-bold mt-6">
                                        Evaluación y Certificación
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Al completar este módulo, deberás
                                        realizar una evaluación que pondrá a
                                        prueba los conocimientos adquiridos. La
                                        evaluación consta de preguntas teóricas
                                        y casos prácticos que deberás resolver
                                        aplicando lo aprendido. Una vez aprobado
                                        el curso completo, recibirás tu
                                        certificación oficial reconocida a nivel
                                        nacional.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar - Course Content */}
                {sidebarOpen && (
                    <aside className="w-80 lg:w-96 border-l bg-muted/30 flex flex-col">
                        <div className="p-4 border-b bg-background">
                            <h2 className="font-semibold mb-2">
                                Contenido del Curso
                            </h2>
                            <Progress value={course.progress} className="h-2" />
                            <p className="text-xs text-muted-foreground mt-2">
                                {course.progress}% completado
                            </p>
                        </div>

                        <ScrollArea className="flex-1">
                            <div className="p-4 space-y-2">
                                {course.modules.map((module, moduleIndex) => (
                                    <Collapsible
                                        key={moduleIndex}
                                        defaultOpen={
                                            moduleIndex === currentModule
                                        }
                                    >
                                        <Card
                                            className={
                                                moduleIndex === currentModule
                                                    ? "border-primary py-0 gap-0"
                                                    : "py-0 gap-0"
                                            }
                                        >
                                            <CollapsibleTrigger className="w-full">
                                                <CardContent className="p-4 flex gap-1 items-center justify-between hover:bg-muted/50 transition-colors">
                                                    <div className="flex items-start gap-3 text-left flex-1">
                                                        <div className="mt-1">
                                                            {module.completed ? (
                                                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                                            ) : (
                                                                <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                                                            )}
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="font-semibold text-sm leading-tight mb-1">
                                                                {module.title}
                                                            </div>
                                                            <div className="text-xs text-muted-foreground flex items-center gap-2">
                                                                <Clock className="h-3 w-3" />
                                                                {
                                                                    module.duration
                                                                }
                                                                <span>•</span>
                                                                <span>
                                                                    {
                                                                        module
                                                                            .lessons
                                                                            .length
                                                                    }{" "}
                                                                    lecciones
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                                                </CardContent>
                                            </CollapsibleTrigger>

                                            <CollapsibleContent>
                                                <div className="border-t">
                                                    {module.lessons.map(
                                                        (
                                                            lesson,
                                                            lessonIndex
                                                        ) => (
                                                            <button
                                                                key={
                                                                    lessonIndex
                                                                }
                                                                onClick={() => {
                                                                    setCurrentModule(
                                                                        moduleIndex
                                                                    );
                                                                    setCurrentLesson(
                                                                        lessonIndex
                                                                    );
                                                                }}
                                                                className={`w-full p-3 pl-8 flex items-center justify-between hover:bg-muted/50 transition-colors text-left ${
                                                                    moduleIndex ===
                                                                        currentModule &&
                                                                    lessonIndex ===
                                                                        currentLesson
                                                                        ? "bg-primary/10 border-l-2 border-primary"
                                                                        : ""
                                                                }`}
                                                            >
                                                                <div className="flex items-center gap-3 flex-1">
                                                                    <div className="text-muted-foreground">
                                                                        {getLessonIcon(
                                                                            lesson.type
                                                                        )}
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <div className="text-sm font-medium leading-tight">
                                                                            {
                                                                                lesson.title
                                                                            }
                                                                        </div>
                                                                        <div className="text-xs text-muted-foreground mt-0.5">
                                                                            {
                                                                                lesson.duration
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {lesson.completed ? (
                                                                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                                                                ) : !lesson.completed &&
                                                                  moduleIndex >
                                                                      currentModule ? (
                                                                    <Lock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                                                ) : null}
                                                            </button>
                                                        )
                                                    )}
                                                </div>
                                            </CollapsibleContent>
                                        </Card>
                                    </Collapsible>
                                ))}
                            </div>
                        </ScrollArea>
                    </aside>
                )}
            </div>
        </div>
    );
}
