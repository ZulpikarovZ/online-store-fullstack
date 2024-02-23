import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeCommentAsync } from '../../redux/actions';
import { Icon } from '../';

const CommentCotainer = ({ className, comment, product, setProduct }) => {
	const dispatch = useDispatch();

	const onCommentRemove = (commentId) => {
		dispatch(removeCommentAsync(product.id, commentId)).then(() =>
			setProduct({
				...product,
				comments: product.comments.filter(({ id }) => id !== commentId),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="comment">
				<div className="header">
					<div className="author">
						<Icon id="fa-user-circle-o" size="20px" margin="0 10px 0 0" />
						{comment.author}
					</div>
					<div className="calendar">
						<Icon id="fa-calendar-o" size="20px" margin="0 10px 0 0" />
						{comment.publishedAt}
					</div>
				</div>
				<div className="text">{comment.content}</div>
			</div>
			<Icon
				id="fa-trash-o"
				size="18px"
				margin="0 0 0 14px"
				onClick={() => onCommentRemove(comment.id)}
				style={{ color: '#f6a701' }}
			/>
		</div>
	);
};

export const Comment = styled(CommentCotainer)`
	display: flex;

	& .comment {
		width: 550px;
		outline: 1px solid #f6a701;
		border-radius: 5px;
		padding: 8px;
		margin-bottom: 20px;
	}

	& .header {
		margin-bottom: 10px;
	}

	& .header,
	& .author,
	& .calendar {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;
