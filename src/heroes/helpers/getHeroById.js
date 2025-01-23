import { heroes } from "../data"

export const getHeroById = (id) => {
    return heroes.find(heroe => heroe.id === id);
};
