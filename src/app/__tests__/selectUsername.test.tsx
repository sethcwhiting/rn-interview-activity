import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import SelectUsernameScreen from '../selectUsername';

const pressToggleButton = async (name: string) => fireEvent.press(screen.getByRole('togglebutton', { name }));

describe('SelectUsername screen', () => {
    beforeEach(async () => {
        render(<SelectUsernameScreen />);

        const bBallBtn = await screen.findByRole('togglebutton', { name: 'Basketball' });
        expect(bBallBtn).toBeDefined();
    });

    it('should not allow more than three interests to be selected', () => {
        pressToggleButton('Basketball');
        pressToggleButton('Pop');
        pressToggleButton('Painting');
        pressToggleButton('Jazz');

        expect(screen.getByRole('togglebutton', { name: 'Basketball' })).toBeSelected();
        expect(screen.getByRole('togglebutton', { name: 'Pop' })).toBeSelected();
        expect(screen.getByRole('togglebutton', { name: 'Painting' })).toBeSelected();
        expect(screen.getByRole('togglebutton', { name: 'Jazz' })).not.toBeSelected();
    });

    it('should disable any non-selected ToggleButtons once three interests have been selected', () => {
        pressToggleButton('Basketball');
        pressToggleButton('Pop');
        pressToggleButton('Painting');
        expect(screen.getByRole('togglebutton', { name: 'Jazz' })).toBeDisabled();
    });

    it('should disable "Regenerate" button unless exactly three interests have been selected', () => {
        const regenerateButton = screen.getByRole('button', { name: 'Regenerate' });
        expect(regenerateButton).toBeDisabled();

        pressToggleButton('Basketball');
        expect(regenerateButton).toBeDisabled();
        pressToggleButton('Pop');
        expect(regenerateButton).toBeDisabled();
        pressToggleButton('Painting');
        expect(regenerateButton).toBeEnabled();

        pressToggleButton('Jazz');
        expect(regenerateButton).toBeEnabled();
    });

    it('should disable "Next" button unless exactly three interests have been selected', () => {
        const nextButton = screen.getByRole('button', { name: 'Next' });
        expect(nextButton).toBeDisabled();

        pressToggleButton('Basketball');
        expect(nextButton).toBeDisabled();
        pressToggleButton('Pop');
        expect(nextButton).toBeDisabled();
        pressToggleButton('Painting');
        expect(nextButton).toBeEnabled();

        pressToggleButton('Jazz');
        expect(nextButton).toBeEnabled();
    });
});
