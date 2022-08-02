import React from "react";
import {Comment} from "../../../entities/Comment";
import styles from "./DeleteCommentModal.module.css";

interface Props {
  comment: Comment,
  removeComment: () => void
}

const DeleteCommentModal = ({comment, removeComment}: Props) => {
  return (
    <div className={"modal-dialog"}>
      <div className={"modal-content"}>
        <div className={"modal-header"}>
          Remove comment
          <button type={"button"} className={"btn-close"} data-bs-dismiss={"modal"} aria-label={"Close"}/>
        </div>
        <div className={"modal-body"}>
          Are you sure you want to remove the following comment? This action can't be undone.
          <p className={`${styles.commentText}`}>{comment.entity.text}</p>
        </div>
        <div className={"modal-footer"}>
          <button className={"btn btn-secondary"} data-bs-dismiss={"modal"}>Cancel</button>
          <button className={"btn btn-primary"} data-bs-dismiss={"modal"} onClick={removeComment}>Remove comment</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteCommentModal;