import React from 'react';
import { render } from '@testing-library/react';
import ParentComponent from './ParentComponent';

jest.mock('./ChildComponent', () => () => <mock-child-component />);

test('jest mock direct in file work', () => {
	const { container } = render(<ParentComponent />);
	expect(container.querySelector('mock-child-component')).toBeInTheDocument();
});
