import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Icon } from '../icon/icon';
import { addCommentAsync } from '../../redux/actions';
import { Comment } from '../comment/comment';
import { ROLE } from '../../constants';
import { selectUserRoleId } from '../../redux/selectors';

const CommentsContainer = ({ className, product, setProduct }) => {
	const [newComment, setNewComment] = useState('');
	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRoleId);
	const isUserOrAdmin = [ROLE.USER, ROLE.ADMIN].includes(userRole);

	const onNewCommentAdd = (productId, content) => {
		if (!newComment.trim()) {
			setNewComment('');
			return;
		}

		dispatch(addCommentAsync(productId, content)).then((res) =>
			setProduct({ ...product, comments: [...product.comments, res.data] }),
		);
		setNewComment('');
	};

	return (
		<div className={className}>
			<h2>Отзывы</h2>
			{isUserOrAdmin && (
				<div className="new-comment">
					<textarea
						value={newComment}
						type="textarea"
						placeholder="Комментарий..."
						onChange={({ target }) => setNewComment(target.value)}
					></textarea>
					<Icon
						id="fa-paper-plane-o"
						margin="0 0 0 10px"
						size="18px"
						onClick={() => onNewCommentAdd(product.id, newComment)}
						style={{ color: '#f6a701' }}
					/>
				</div>
			)}
			<div className="comments">
				{product.comments?.map((comment) => (
					<Comment
						key={comment.id}
						comment={comment}
						product={product}
						setProduct={setProduct}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;

	& .new-comment {
		display: flex;
		margin: 0 0 20px 0;

		& textarea {
			width: 550px;
			height: 120px;
			font-size: 16px;
			resize: none;
			border-radius: 5px;
			padding: 20px;
			outline: 1px solid #f6a701;
			border: 1px solid #f6a701;
		}
	}

	& .comments {
		width: 578px;
	}
`;
