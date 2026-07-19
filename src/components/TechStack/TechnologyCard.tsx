import type { Technology } from "../../data/technologies";

// propiedades del componente
type Props = {
    technology: Technology;
};

export default function TechnologyCard({technology}: Props) {
    const Icon = technology.icon; // obtener el componente con el icono de la tecnología

    return (
        <article className="group bg-white rounded-3xl p-6 shadow-[0_10px_35px_rgba(0,0,0,.04)] border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,.08)]">
            <div className="flex flex-col items-center justify-center gap-5">
                <Icon
                    size={48}
                    color={technology.color}
                    className="transition-transform duration-300 group-hover:scale-110"
                />

                <span className="font-medium text-principal-text">
                    {technology.name}
                </span>
            </div>
        </article>
    );
}