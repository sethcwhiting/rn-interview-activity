import { generateUsername, interestWordBank } from './generateUsername';

function generateAllCombinations(interests: string[]): string[] {
    const combinations = [];
    for (let i = 0; i < interests.length; i++) {
        for (let j = 0; j < interests.length; j++) {
            if (j !== i) {
                for (let k = 0; k < interests.length; k++) {
                    if (k !== i && k !== j) {
                        combinations.push([interests[i], interests[j], interests[k]].join(''));
                    }
                }
            }
        }
    }
    return combinations;
}

describe('generateUsername', () => {
    it('should generate a username containing a word relating to each of the given interests', () => {
        const interests = ['Photography', 'Dancing', 'Sci-fi'];
        const existingUsernames = new Set<string>();

        const username = generateUsername(interests, existingUsernames);
        // Extract Pascal cased words from the username
        const wordsInUsername = username.match(/([A-Z][a-z]+)/g);

        expect(username).toBeTruthy();
        expect(wordsInUsername).toHaveLength(3);
        expect(wordsInUsername!.every((word) => interests.some((interest) => interestWordBank[interest].includes(word)))).toBeTruthy();
    });

    it('should throw an error if fewer or more than three interests are passed', () => {
        const errorMessage = 'Three interests must be selected to generate a username.';
        expect(() => generateUsername(['Photography'], new Set<string>())).toThrow(errorMessage);
        expect(() => generateUsername(['Photography', 'Dancing'], new Set<string>())).toThrow(errorMessage);
        expect(() => generateUsername(['Photography', 'Dancing', 'Sci-fi', 'Art'], new Set<string>())).toThrow(errorMessage);
    });

    it('should generate different usernames with different interests', () => {
        const interests1 = ['Photography', 'Dancing', 'Sci-fi'];
        const interests2 = ['Basketball', 'Rock', 'Gaming'];

        const username1 = generateUsername(interests1, new Set<string>());
        const username2 = generateUsername(interests2, new Set<string>());

        expect(username1).not.toEqual(username2);
    });

    it('should shuffle the order of words in the username', () => {
        const interests = ['Photography', 'Dancing', 'Sci-fi'];

        const username1 = generateUsername(interests, new Set<string>());
        const username2 = generateUsername(interests, new Set<string>());

        expect(username1).not.toEqual(username2);
    });

    it('should append a numeric suffix if a duplicate username is generated', () => {
        const interests = ['Photography', 'Dancing', 'Sci-fi'];
        const combos = generateAllCombinations(interests.flatMap((interest) => interestWordBank[interest]));
        const existingUsernames = new Set<string>(combos);

        const username = generateUsername(interests, existingUsernames);
        expect(new Set(combos.map((combo) => combo + '1')).has(username)).toBeTruthy();
    });

    it('should increment the numeric suffix correctly if multiple duplicates exist', () => {
        const interests = ['Photography', 'Dancing', 'Sci-fi'];
        const combos = generateAllCombinations(interests.flatMap((interest) => interestWordBank[interest]));
        const existingUsernames = new Set<string>([...combos, ...combos.map((combo) => `${combo}1`)]);

        const username = generateUsername(interests, existingUsernames);
        expect(new Set(combos.map((combo) => combo + '2')).has(username)).toBeTruthy();
    });

    it('should generate an infinite number of unique usernames', () => {
        const interests = ['Photography', 'Dancing', 'Sci-fi'];
        const existingUsernames = new Set<string>();

        for (let i = 0; i < 1000; i++) {
            const username = generateUsername(interests, existingUsernames);
            expect(existingUsernames.has(username)).toBe(false);
            existingUsernames.add(username);
        }
    });
});
