interface CategoryCardProps {
    titulo: string;
    ativa?: boolean;
    onClick?: () => void;
}

export function CategoryCard({
    titulo,
    ativa = false,
    onClick,
}: CategoryCardProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                cursor-pointer
                rounded-2xl
                border
                px-8
                py-2
                text-lg
                font-semibold
                transition-all
                duration-300
                ${
                    ativa
                        ? "border-cyan-300 bg-cyan-50 text-cyan-800 shadow-lg"
                        : "bg-white text-slate-700 hover:bg-sky-50 border-cyan-300"
                }
            `}
        >
            {titulo}
        </button>
    );
}