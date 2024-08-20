import generateUsername from './generateUsername';

describe('generateUsername utility', () => {
    it('should throw an error if fewer than three interests are provided', () => {
        expect(() => generateUsername(['Basketball', 'Pop'])).toThrow('At least three interests are required to generate a username.');
    });

    it('should generate a unique username each time it is called', () => {
        const interests = ['Basketball', 'Pop', 'Painting'];
        const username1 = generateUsername(interests);
        const username2 = generateUsername(interests);

        expect(username1).not.toEqual(username2);
    });
});
