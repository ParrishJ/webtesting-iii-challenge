// Test away!
import React from 'react'
import { render, fireEvent, getByTestId, queryByText } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect'

import Controls from '../controls/Controls'
import Dashboard from '../dashboard/Dashboard'


describe('<Controls />', () => {
    it('Should toggle text on close button', () => {
        const { getByText } = render(<Dashboard />);

        let openBtn = getByText(/Close Gate/i);

        expect(openBtn).toHaveTextContent('Close Gate');

        fireEvent.click(openBtn);

        expect(openBtn).toHaveTextContent('Open Gate')
    })

    it('Should toggle text on lock button', () => {
        const { getByText } = render(<Dashboard />);

        let openBtn = getByText(/Close Gate/i);
        let lockBtn = getByText(/lock gate/i);

        expect(lockBtn).toHaveTextContent('Lock Gate');

        fireEvent.click(openBtn);
        fireEvent.click(lockBtn);


        expect(lockBtn).toHaveTextContent('Unlock Gate')
    })

    it('Should not lock if gate is open', () => {
        const { getByText } = render(<Dashboard />);

        const lockButton = getByText(/lock gate/i);
        const unlockedDiv = getByText(/unlocked/i);

        fireEvent.click(lockButton)

        expect(unlockedDiv).toHaveTextContent(/unlocked/i)


    })
})