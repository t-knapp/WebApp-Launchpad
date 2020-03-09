import MelderViewModel from '../MelderViewModel';

describe('MelderViewModel', () => {
    test('ctor should set name', () => {
        const candidate: MelderViewModel = new MelderViewModel('My Name');
        expect(candidate.name).toBe('My Name');
    });

    test('should set name', () => {
        const candidate: MelderViewModel = new MelderViewModel('My Name');
        candidate.setName('Your Name');
        expect(candidate.name).toBe('Your Name');
    });
});
