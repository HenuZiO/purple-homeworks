import PageTitle from '@components/PageTitle/PageTitle';
import Paragraph from '@components/Paragraph/Paragraph';
import SearchForm from '@components/Search/SearchForm';

import './PageHeader.css';

const PageHeader = ({ title, text, input }) => {
	return (
		<section className='page-header'>
			<PageTitle>{title}</PageTitle>
			<Paragraph>{text}</Paragraph>
			{input == 'search' && <SearchForm />}
		</section>
	);
};

export default PageHeader;
