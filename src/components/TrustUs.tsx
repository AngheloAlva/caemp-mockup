"use client";

import { useEffect, useState } from "react";
import { FadeIn } from "./animations/fade-in";
import { HoverScale } from "./animations/hover-scale";
import { Card, CardContent } from "./ui/card";
import { Star, Users } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "./ui/carousel";

export default function TrustUs(): React.ReactElement {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const testimonials = [
        {
            company: "Empresa Traza",
            role: "Gerente de Seguridad",
            text: "Las labores de alto riesgo a las que están expuestos nuestros colaboradores requieren una capacitación teórico-práctica que cumpla con altos estándares de seguridad y que brinde conocimientos sólidos en la materia. Caemp cumple con todos los requisitos necesarios para garantizar la calidad y efectividad de nuestros programas de capacitación, asegurando que nuestros equipos estén completamente preparados para enfrentar los desafíos con seguridad y profesionalismo.",
        },
        {
            company: "Nuevo Pudahuel",
            role: "Gerente de Operaciones",
            text: "Excelente capacitación, instructores muy profesionales y con gran experiencia práctica en el campo. Nuestro equipo quedó muy bien preparado para enfrentar situaciones de riesgo eléctrico. Las instalaciones de CAEMP son de primer nivel y el material didáctico es muy completo. Sin duda, la mejor inversión en seguridad que hemos realizado este año.",
        },
        {
            company: "PSS Ingeniería",
            role: "Jefe de Prevención de Riesgos",
            text: "La mejor inversión en seguridad laboral que hemos realizado. El equipo de CAEMP es altamente profesional, con conocimientos actualizados y metodología práctica. Las instalaciones son de primer nivel y cuentan con todo el equipamiento necesario para una capacitación efectiva. Nuestros trabajadores ahora están mucho mejor preparados para identificar y controlar riesgos en altura.",
        },
        {
            company: "Zener",
            role: "Coordinador de Recursos Humanos",
            text: "Capacitación integral y práctica que superó nuestras expectativas. Los cursos están muy bien estructurados, combinando teoría con práctica de manera equilibrada. El material es excelente y los instructores demuestran un dominio completo de los temas. La certificación que obtuvieron nuestros colaboradores es reconocida en toda la industria, lo que nos da tranquilidad y cumplimiento normativo.",
        },
    ];

    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });

        // Auto-play functionality
        const autoplay = setInterval(() => {
            if (api.canScrollNext()) {
                api.scrollNext();
            } else {
                api.scrollTo(0);
            }
        }, 5000);

        return () => clearInterval(autoplay);
    }, [api]);

    return (
        <section className="py-16 md:py-24">
            <div className="container">
                <FadeIn>
                    <div className="mx-auto max-w-2xl text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance">
                            Confían en Nosotros
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                            Empresas líderes que han capacitado a su personal
                            con CAEMP.
                        </p>
                    </div>
                </FadeIn>

                <Carousel
                    setApi={setApi}
                    className="max-w-6xl mx-auto"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/2 lg:basis-1/2"
                            >
                                <HoverScale scale={1.02}>
                                    <Card className="h-full">
                                        <CardContent className="pt-8 pb-8 px-6">
                                            <div className="space-y-6">
                                                <div className="flex gap-1 justify-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className="h-5 w-5 fill-primary text-primary"
                                                        />
                                                    ))}
                                                </div>
                                                <p className="text-base text-muted-foreground leading-relaxed text-center italic">
                                                    "{testimonial.text}"
                                                </p>
                                                <div className="flex flex-col items-center gap-2 pt-4">
                                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                                        <Users className="h-6 w-6 text-primary" />
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="font-semibold text-lg">
                                                            {testimonial.company}
                                                        </div>
                                                        <div className="text-sm text-muted-foreground">
                                                            {testimonial.role}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </HoverScale>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="-left-4 md:-left-12 rounded-full shadow-lg bg-background" />
                    <CarouselNext className="-right-4 md:-right-12 rounded-full shadow-lg bg-background" />

                    {/* Custom Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: count }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={`h-2 rounded-full transition-all hover:bg-primary/70 ${
                                    index === current
                                        ? "w-8 bg-primary"
                                        : "w-2 bg-muted-foreground/30"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
