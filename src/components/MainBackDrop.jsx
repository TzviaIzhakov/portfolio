const MainBackDrop = ({ isBackDropShown, close }) => {
	return <section className={`main-backdrop ${isBackDropShown ? 'active' : ''}`} onClick={() => close()}></section>;
};

export default MainBackDrop;
