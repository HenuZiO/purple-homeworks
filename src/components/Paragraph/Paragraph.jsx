import './Paragraph.css';

const Paragraph = ({ children, bigSize }) => {
	const pStyle =
		bigSize == true
			? 'paragraph__text paragraph__text--big'
			: 'paragraph__text';

	return <p className={pStyle}>{children}</p>;
};

export default Paragraph;
