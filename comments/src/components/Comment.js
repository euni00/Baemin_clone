function Comment({ comment }) {
  return (
    <div>
      {comment.comment} {comment.date.getFullYear()}
    </div>
  );
}

export default Comment;
