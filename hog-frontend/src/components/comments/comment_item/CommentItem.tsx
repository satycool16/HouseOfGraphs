import {Comment, UpdateCommentRequest} from "../../../entities/Comment";
import React, {useEffect, useState} from "react";
import {User} from "../../../entities/User";
import styles from "./CommentItem.module.css";
import {followLink} from "../../../util/followLinks";
import api from "../../../services/Api";
import {format} from "date-fns";
import {FiClock} from "react-icons/fi";
import {getIconFromName} from "../../../util/getIconFromName";
import {MessageResponse} from "../../../entities/MessageResponse";
import { FaTimes } from 'react-icons/fa';
import {BsPencilFill} from 'react-icons/bs';
import {useAppSelector} from "../../../app/Hooks";
import {selectCurrentUser, selectIsAdmin, selectLoggedIn} from "../../../features/current_user/CurrentUserSlice";
import DeleteCommentModal from "../delete_comment_modal/DeleteCommentModal";

interface Props {
  comment: Comment
  fetchComments: () => void;
}

const CommentItem = ({comment, fetchComments}:Props) => {
  const isLoggedIn: boolean = useAppSelector(selectLoggedIn);
  const isAdmin: boolean = useAppSelector(selectIsAdmin);
  const currentUser: User|undefined = useAppSelector(selectCurrentUser);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const [text, setText] = useState<string>(comment.entity.text);

  useEffect(() => {
    let commentedBy = comment._links?.commentedBy.href;
    if(commentedBy){
      api.get<User>(followLink(commentedBy))
        .then((response: any) => {
          setUser(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
  }, [comment]);

  const removeComment = () => {
    try {
      api.post<MessageResponse>("remove_comment", comment.entity.commentId)
        .then((response: any) => {
          if(response.data.success){
            fetchComments();
          }
        })
        .catch((e: Error) => {
          console.log(e);
        })
    } catch(error) {
      console.log(error)
    }
  }

  const updateComment = () => {
    let updateComment: UpdateCommentRequest = {
      commentId: comment.entity.commentId,
      newText: text
    }
    try {
      api.patch<MessageResponse>("update_comment", updateComment)
        .then((response: any) => {
          if(response.data.success){
            fetchComments();
            setEditMode(false);
          }
        })
        .catch((e: Error) => {
          console.log(e);
        })
    } catch(error) {
      console.log(error)
    }
  }

  return (
    user ?
      <>
      <div className={"card mb-3"}>
        <div className={"row g-0"}>
          <div className={`col-md-1 ${styles.imagebox}`}>
            <img src={getIconFromName(user.fullname)} className={"img-fluid rounded-start"} alt={"..."} width={"70"} height={"70"}/>
          </div>
          <div className={"col-md-11"}>
            <div className={"card-body"}>
              <div className={`${styles.header}`}>
                <h5 className={"card-title mb-0"}>{user.fullname}</h5>
                { !editMode && (isAdmin || (isLoggedIn && currentUser?.entity.userId === user.entity.userId)) &&
                  <div style={{marginLeft: "auto"}}>
                    <BsPencilFill style={{marginRight: "10px", fontSize: "15px", cursor: "pointer"}} onClick={_ => setEditMode(true)}/>
                    <FaTimes style={{color: "red", fontSize: "20px", cursor: "pointer"}} data-bs-toggle={"modal"} data-bs-target={"#deleteCommentModal-" + comment.entity.commentId}/>
                  </div>
                }
              </div>
              <p className={"card-text"} style={{marginBottom: "8px"}}><small className={"text-muted"} style={{alignItems: "center", display: "inline-flex"}}>
                <FiClock style={{marginRight: "5px", textAlign: "center"}}/>{format(new Date(comment.entity.commentTime), "d LLLL y - HH:mm")}
              </small></p>
              {
                editMode ?
                  <>
                    <textarea className={"form-control"} value={text} onChange={e => setText(e.target.value)}/>
                    <div className={`${styles.btnBar}`}>
                      <button className={"btn btn-secondary"} onClick={_ => setEditMode(false)}>Cancel</button>
                      <button className={"btn btn-primary"} onClick={updateComment}>Save changes</button>
                    </div>
                  </>
                  :
                  <p className={"card-text"}>{comment.entity.text}</p>
              }
            </div>
          </div>
        </div>
      </div>
      <div className={"modal fade"} id={"deleteCommentModal-" + comment.entity.commentId} aria-hidden={"true"}>
        <DeleteCommentModal removeComment={removeComment} comment={comment}/>
      </div>
    </>
    :
    <></>
  );
}

export default CommentItem;