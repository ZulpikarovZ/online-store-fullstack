import styled from 'styled-components';

const CategoryOptionContainer = ({ className, category }) => {
	return <option className={className}>{category.name}</option>;
};

export const CategoryOption = styled(CategoryOptionContainer)``;
