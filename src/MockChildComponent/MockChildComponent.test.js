import React from 'react';
import { render } from '@testing-library/react';
import ParentComponent from './ParentComponent';

beforeAll(() => {
	jest.mock('./ChildComponent', () => () => <mock-child-component />);
});

test('mock child component', () => {
	const { debug } = render(<ParentComponent />);
	debug();
});
