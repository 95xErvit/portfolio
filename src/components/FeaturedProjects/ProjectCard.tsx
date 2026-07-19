// Propiedades del componente
type Props = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    url: string;
};

export default function ProjectCard({ title, description, image, technologies, url }: Props) {
    return (
        <article className="overflow-hidden rounded-4xl bg-white shadow-[0_10px_40px_rgba(0,0,0,.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,.08)]">

            {/* IMAGE */}
            <div className="aspect-16/10 overflow-hidden bg-[#F4F4F4]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* CONTENT */}
            <div className="p-8">
                <h3 className="text-[30px] font-semibold text-principal-text">
                    {title}
                </h3>

                <p className="mt-4 text-[#6B7280] leading-8">
                    {description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                    {technologies.map((technology) => (
                        <span
                            key={technology}
                            className="px-4 py-2 rounded-full bg-[#F5F5F5] text-sm font-medium text-[#5B5B5B]"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}