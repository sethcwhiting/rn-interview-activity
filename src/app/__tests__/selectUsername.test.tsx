import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import SelectUsernameScreen from '../selectUsername';

describe('SelectUsername screen', () => {
    beforeEach(() => {
        render(<SelectUsernameScreen />);
    });

    const pressToggleButton = (name: string) => fireEvent.press(screen.getByRole('togglebutton', { name }));

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
});
