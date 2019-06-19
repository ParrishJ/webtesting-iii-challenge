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

        /* const lockButton = getByTestId(/lockBtn/i); */

        let openBtn = getByText(/Close Gate/i);
        /* const lockDiv = getByTestId(/lockDiv/i); */

        expect(openBtn).toHaveTextContent('Close Gate');

        fireEvent.click(openBtn);

        expect(openBtn).toHaveTextContent('Open Gate')
    })
})