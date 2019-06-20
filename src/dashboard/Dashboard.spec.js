// Test away
import React from 'react'
import { render, fireEvent, getByTestId, queryByText } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect'


import Dashboard from '../dashboard/Dashboard';

describe('<Dashboard />', () => {
    it('Should display close button"', () => {
        const { getByText } = render(<Dashboard />)

        const closeButton = getByText(/Close Gate/i);

        expect(closeButton).toHaveTextContent('Close Gate')
    });

    it('Should display lock button"', () => {
        const { getByText } = render(<Dashboard />)

        const lockButton = getByText(/Lock Gate/i);

        expect(lockButton).toHaveTextContent('Lock Gate');

    })

    it('Should display "unlocked" div ', () => {
        const { getByText } = render(<Dashboard />);

        const unlockedDiv = getByText(/unlocked/i);

        expect(unlockedDiv).toHaveTextContent('Unlocked')
    })

    it('Should display "open" div', () => {
        const { getByText } = render(<Dashboard />);

        const openDiv = getByText(/open/i);

        expect(openDiv).toHaveTextContent('Open')
    })


})