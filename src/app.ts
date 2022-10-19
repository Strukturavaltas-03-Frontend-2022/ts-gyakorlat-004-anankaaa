// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    {
        id: 1,
        name: "Name1",
        sex: "male",
        age: 10,
        health: 5,
    },

    {
        id: 2,
        name: "Name2",
        sex: "male",
        age: 11,
        health: 8,
    },

    {
        id: 3,
        name: "Name3",
        sex: "female",
        age: 20,
        health: 2,
    }
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [

    {
        id: 1,
        name: "namee1",
        wings: 2,
        wheels: 4,
        clan: "klan1"
    },
    {
        id: 2,
        name: "namee2",
        wings: 0,
        wheels: 4,
        clan: "klan2"
    },
    {
        id: 3,
        name: "namee3",
        wings: 4,
        wheels: 6,
        clan: "klan3"
    },
];
