// Test away!
import React from 'react'
import { render, fireEvent, getByTestId, queryByText } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect'

import Display from './Display'
import Controls from '../controls/Controls'
import Dashboard from '../dashboard/Dashboard';

describe('<Display />', () => {
    it('Should display either "open" or "closed" and is initiated with "open"', () => {
        const { getByText } = render(<Dashboard />)

        const closeButton = getByText(/Close Gate/i);



        const openDiv = getByText(/Open/i);

        expect(openDiv).toHaveTextContent('Open');

        fireEvent.click(closeButton)

        expect(openDiv).toHaveTextContent('Closed')
    });

    it('Should display either "locked" or "unlocked" and is initiated with "closed" ', () => {
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

    it('Should display "unlocked" if passed locked prop=false', () => {
        const { getByText } = render(<Display locked={false} />);

        const unlockedDiv = getByText(/unlocked/i);

        expect(unlockedDiv).toHaveTextContent('Unlocked')
    })

    it('Should display "locked" if passed locked prop=true', () => {
        const { getByText } = render(<Display locked={true} />);

        const lockedDiv = getByText(/locked/i);

        expect(lockedDiv).toHaveTextContent('Locked')
    })



    it('Should display the color red if passed closed=true', () => {
        const { getByText } = render(<Display closed={true} />);

        const closedDiv = getByText(/closed/i);

        expect(closedDiv).toHaveClass('red-led')
    })

    it('Should display the color red if passed locked=true', () => {
        const { getByText } = render(<Display locked={true} />);

        const lockedDiv = getByText(/locked/i);

        expect(lockedDiv).toHaveClass('red-led')
    })

    it('Should display the color green if passed closed=false', () => {
        const { getByText } = render(<Display closed={false} />);

        const openDiv = getByText(/open/i);

        expect(openDiv).toHaveClass('green-led')
    })

    it('Should display the color green if passed locked-false', () => {
        const { getByText } = render(<Display locked={false} />);

        const lockedDiv = getByText(/unlocked/i);

        expect(lockedDiv).toHaveClass('green-led')
    })

    it('Should not open if locked', () => {
        const { getByText } = render(<Dashboard />);


        const closeButton = getByText(/close gate/i);
        const lockButton = getByText(/lock gate/i);
        const closedDiv = getByText(/open/i);

        fireEvent.click(closeButton)
        fireEvent.click(lockButton)
        fireEvent.click(closeButton)

        expect(closedDiv).toHaveTextContent(/closed/i)


    })

})