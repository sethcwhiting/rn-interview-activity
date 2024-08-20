import { curateToggleButtonGroup } from '@/utils/curateToggleButtonGroup';

describe('curateToggleButtonGroup utility', () => {
    it('should add an interest to the list when selected', () => {
        const prev: string[] = [];
        const result = curateToggleButtonGroup({ name: 'Basketball', state: true, prev, cap: 3 });
        expect(result).toEqual(['Basketball']);
    });

    it('should remove an interest from the list when deselected', () => {
        const prev = ['Basketball'];
        const result = curateToggleButtonGroup({ name: 'Basketball', state: false, prev, cap: 3 });
        expect(result).toEqual([]);
    });

    it('should not add an interest if the cap is reached', () => {
        const prev = ['Basketball', 'Pop', 'Painting'];
        const result = curateToggleButtonGroup({ name: 'Jazz', state: true, prev, cap: 3 });
        expect(result).toEqual(['Basketball', 'Pop', 'Painting']);
    });

    it('should allow adding an interest if below the cap', () => {
        const prev = ['Basketball', 'Pop'];
        const result = curateToggleButtonGroup({ name: 'Painting', state: true, prev, cap: 3 });
        expect(result).toEqual(['Basketball', 'Pop', 'Painting']);
    });

    it('should not add an interest that is already in the list', () => {
        const prev = ['Basketball'];
        const result = curateToggleButtonGroup({ name: 'Basketball', state: true, prev, cap: 3 });
        expect(result).toEqual(['Basketball']);
    });

    it('should handle toggling the same interest multiple times', () => {
        let prev: string[] = [];
        prev = curateToggleButtonGroup({ name: 'Basketball', state: true, prev, cap: 3 });
        expect(prev).toEqual(['Basketball']);
        
        prev = curateToggleButtonGroup({ name: 'Basketball', state: false, prev, cap: 3 });
        expect(prev).toEqual([]);
        
        prev = curateToggleButtonGroup({ name: 'Basketball', state: true, prev, cap: 3 });
        expect(prev).toEqual(['Basketball']);
    });
});
