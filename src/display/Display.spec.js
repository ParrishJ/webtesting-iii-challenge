// Test away!
import React from 'react'
import { render, fireEvent, getByTestId, queryByText } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect'

import Display from './Display'
import Controls from '../controls/Controls'
import Dashboard from '../dashboard/Dashboard';

describe('<Display />', () => {
    it('Should display either "open" or "closed"', () => {
        const { getByText } = render(<Dashboard />)

        const closeButton = getByText(/Close Gate/i);



        const openDiv = getByText(/Open/i);

        expect(openDiv).toHaveTextContent('Open');

        fireEvent.click(closeButton)

        expect(openDiv).toHaveTextContent('Closed')
    })

    /* it('Should display either "open" or "closed"', () => {
        const { getByText } = render(<Display />);
        const { getByTestId } = render(<Controls />)

        const lockButton = getByTestId(/lockBtn/i);
        const openButton = getByTestId(/openBtn/i);

        fireEvent.click(openButton)

        expect(getByText(/unlocked/i)).toBeTruthy();

        fireEvent.click(lockButton);

        expect(getByText(/locked/i)).toBeTruthy();
    }) */
})