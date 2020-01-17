import React from 'react';
import { render } from '@testing-library/react';
import ParentComponent from './ParentComponent';

beforeEach(() => {
	jest.mock('./ChildComponent', () => () => <mock-child-component />);
});

test('jest mock in beforeEach not work', () => {
	const { container } = render(<ParentComponent />);
	expect(container.querySelector('mock-child-component')).toBeInTheDocument();
});
