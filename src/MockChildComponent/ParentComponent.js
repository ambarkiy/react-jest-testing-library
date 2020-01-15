import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
	return (
		<React.Fragment>
			<h1>PARENT</h1>
			<ChildComponent />
		</React.Fragment>
	);
};

export default ParentComponent;
