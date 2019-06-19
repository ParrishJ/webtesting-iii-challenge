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
    });

    it('Should display either "locked" or "unlocked"', () => {
        const { getByText } = render(<Dashboard />)

        const lockButton = getByText(/Lock Gate/i);
        const closeButton = getByText(/Close Gate/i);



        const lockDiv = getByText(/unlocked/i);

        expect(lockDiv).toHaveTextContent('Unlocked');

        fireEvent.click(closeButton)
        fireEvent.click(lockButton)

        expect(lockDiv).toHaveTextContent('Locked')
    })

    it('Should display "closed" if passed closed prop=true', () => {
        const { getByText } = render(<Display closed={true} />);

        const closedDiv = getByText(/closed/i);

        expect(closedDiv).toHaveTextContent('Closed')
    })

    it('Should display "open" if passed closed prop=false', () => {
        const { getByText } = render(<Display closed={false} />);

        const closedDiv = getByText(/open/i);

        expect(closedDiv).toHaveTextContent('Open')
    })
})