import type { IconType } from "react-icons";

// Propiedades del componente
type Props = {
    icon: IconType;
    title: string;
    description: string;
};

export default function FeatureCard({icon: Icon, title, description,}: Props) {
    return (
        <article className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,.04)] flex items-center justify-center shrink-0">
                <Icon size={34} className="text-principal-text" />
            </div>

            <div>
                <h3 className="text-2xl font-semibold text-principal-text">
                    {title}
                </h3>

                <p className="mt-3 text-[#6B7280] leading-8">
                    {description}
                </p>
            </div>
        </article>
    );
}