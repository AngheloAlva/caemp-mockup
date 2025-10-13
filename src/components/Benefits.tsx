import Image from "next/image";
import { FadeIn } from "./animations/fade-in";
import { Award, Shield, Zap } from "lucide-react";

export default function Benefits(): React.ReactElement {
    return (
        <section className="py-16 md:py-24 bg-muted/30">
            <div className="container">
                <FadeIn>
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance">
                            Algunos Beneficios
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                            Trabajamos con los más altos estándares de calidad
                            para garantizar la mejor experiencia de
                            capacitación.
                        </p>
                    </div>
                </FadeIn>

                <div className="text-gray-600 body-font">
                    <div className="container px-5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                            <Image
                                width={460}
                                height={500}
                                alt="feature"
                                src="/electrical-safety-training.jpg"
                                className="object-cover object-center h-full w-full"
                            />
                        </div>
                        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                            <div className="flex flex-col mb-10 lg:items-start items-center">
                                <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                        Flexibilidad y Rapidez
                                    </h2>
                                    <p className="leading-relaxed text-base">
                                        Minimización de tiempos de atención y
                                        ejecución en cada curso, adaptándonos a
                                        las necesidades de su operación con
                                        soluciones ágiles y personalizadas.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col mb-10 lg:items-start items-center">
                                <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
                                    <Shield className="w-8 h-8" />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                        Cumplimiento Normativo
                                    </h2>
                                    <p className="leading-relaxed text-base">
                                        Cursos alineados con la legislación
                                        vigente, normativas y altos estándares
                                        de seguridad y salud laboral específicos
                                        de cada cliente.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col mb-10 lg:items-start items-center">
                                <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
                                    <Award className="w-8 h-8" />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                        Soporte y Certificación Inmediata
                                    </h2>
                                    <p className="leading-relaxed text-base">
                                        Soporte continuo durante el proceso de
                                        capacitación y entrega de certificados
                                        en línea al finalizar y aprobar los
                                        cursos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
