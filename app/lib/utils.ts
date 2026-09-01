import { CategoriaVetor } from "./api/enum";
/**
 * Regra de filtro do seletor de programa de vigilância da home.
 *
 * Com "Todos" selecionado nada é filtrado. Com um programa específico, além dos itens daquele
 * programa também entram os marcados como `Todos` (conteúdo transversal, que vale para qualquer
 * programa). Itens sem categoria definida ficam de fora do filtro específico.
 */
export function pertenceCategoria(
    categoriaItem: CategoriaVetor | undefined | null,
    categoriaSelecionada: CategoriaVetor
): boolean {
    if (categoriaSelecionada === CategoriaVetor.TODOS) return true;

    return (
        categoriaItem === categoriaSelecionada ||
        categoriaItem === CategoriaVetor.TODOS
    );
}

export function slugify(text: string): string {
    return text
        .toString()
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .toLowerCase();
}
