import React, {useEffect, useState} from "react";
import CommentItem from "../comment_item/CommentItem";
import {AddCommentRequest, Comment, CommentCollection} from "../../../entities/Comment";
import {useAppSelector} from "../../../app/Hooks";
import {selectCurrentUser, selectLoggedIn} from "../../../features/current_user/CurrentUserSlice";
import api from "../../../services/Api";
import {followLink} from "../../../util/followLinks";
import {MessageResponse} from "../../../entities/MessageResponse";
import styles from "./CommentSection.module.css";
import DeleteCommentModal from "../delete_comment_modal/DeleteCommentModal";

interface Props {
  commentLink:string|undefined,
  graphId: number
}

const CommentSection = ({commentLink, graphId}: Props) => {
  const isLoggedIn = useAppSelector(selectLoggedIn);
  const currentUser = useAppSelector(selectCurrentUser);
  const [text, setText] = useState<string>("");
  const [commentList, setCommentList] = useState<Comment[]>([]);

  useEffect(() => {
    getComments();
  }, [])

  const getComments = () => {
    if(commentLink) {
      api.get<CommentCollection>(followLink(commentLink))
        .then((r: any) => {
          console.log(r.data._embedded.commentModelList);
          setCommentList(r.data._embedded.commentModelList);
        })
        .catch((e: Error) => {
          console.log(e);
        })
    }
  }

  const addComment = () => {
    if(currentUser){
      let newComment: AddCommentRequest = {
        graphId: graphId,
        userId: currentUser.entity.userId,
        text: text.trim()
      }
      try {
        api.post<MessageResponse>("comments", newComment)
        .then(response => {
          if(response.data.success){
            setText("");
            getComments();
          }
        });
      } catch(error) {
        console.log(error)
      }
    }
  }

  return (
    <div>
      {commentList.map(comment =>
        <CommentItem key={comment.entity.commentId} fetchComments={getComments} comment={comment}/>
      )}
      {isLoggedIn &&
        <div>
          <textarea className={"form-control"} placeholder={"Write comment..."} rows={3} value={text} onChange={e => setText(e.target.value)}/>
          <div className={`${styles.btnBar}`}>
              <button className={"btn btn-primary"} onClick={addComment} disabled={text.trim().length === 0}>Comment</button>
          </div>
        </div>
      }
    </div>
  );
}

export default CommentSection;