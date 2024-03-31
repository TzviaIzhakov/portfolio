import { useState } from 'react';

const useHeader = () => {
	const [headerBackground, setHeaderBackground] = useState('transparent');

	return {
		headerBackground,
		setHeaderBackground,
	};
};

export default useHeader;
