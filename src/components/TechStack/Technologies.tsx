import TechnologyCard from "./TechnologyCard";
import { technologies } from "../../data/technologies";

export default function Technologies() {
    return (
        <section className="px-6 md:px-12 xl:px-24 py-24">
            <div className="max-w-360 mx-auto">
                <div className="grid grid-cols-1 xl:grid-cols-[300px_1fr] gap-12 items-start">

                    {/* LEFT */}
                    <div>
                        <span className="uppercase text-sm font-semibold tracking-wider text-[#59B400]">
                            Tecnologías
                        </span>

                        <h2 className="mt-4 text-5xl leading-[1.08] font-bold text-principal-text">
                            Herramientas
                            <br />
                            que uso
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
                        {technologies.map((technology) => (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}