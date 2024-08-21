type InterestMapping = {
    [interest: string]: string[];
};

export const interestWordBank: InterestMapping = {
    Basketball: ['Hoops', 'Dunk', 'Dribble'],
    Pop: ['Beat', 'Melody', 'Tune'],
    Painting: ['Brush', 'Canvas', 'Palette'],
    Jazz: ['Swing', 'Blues', 'Groove'],
    Surfing: ['Wave', 'Board', 'Swirl'],
    Rock: ['Riff', 'Chords', 'Rhythm'],
    Photography: ['Snap', 'Focus', 'Shutter'],
    EDM: ['Bass', 'Beat', 'Echo'],
    Gaming: ['Quest', 'Pixel', 'Level'],
    Biking: ['Pedal', 'Trail', 'Gear'],
    Dancing: ['Groove', 'Twirl', 'Rhythm'],
    Environmentalism: ['Green', 'Leaf', 'Eco'],
    Camping: ['Tent', 'Camp', 'Fire'],
    Romance: ['Heart', 'Love', 'Bliss'],
    'Sci-fi': ['Cosmic', 'Galactic', 'Absurd'],
};

export const interestsList = Object.keys(interestWordBank);

export const generateUsername = (interests: string[], existingUsernames: Set<string>): string => {
    if (interests.length !== 3) return '';

    // Select one word from each interest
    const selectedWords = interests.map((interest) => {
        const words = interestWordBank[interest];
        return words[Math.floor(Math.random() * words.length)];
    });

    // Randomize the order of the selected words
    const shuffleArray = (array: string[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Combine the selected words into a username
    let username = shuffleArray(selectedWords).join('');

    // Check for duplicates and add a numeric suffix if necessary
    let suffix = 1;
    while (existingUsernames.has(username)) {
        if (suffix === 1) username += suffix;
        else username = username.replace(/\d+$/, `${suffix}`);
        suffix++;
    }

    return username;
};
