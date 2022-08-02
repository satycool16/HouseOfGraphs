import {User} from "../entities/User";
import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Comment, CommentCollection} from "../entities/Comment";
import {Graph, GraphCollection} from "../entities/Graph";
import {followLink} from "../util/followLinks";
import api from "../services/Api";
import ProfileBox from "../components/profile_box/ProfileBox";
import UserGraphs from "../components/user_graphs/UserGraphs";


const UserDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState<User>();
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if(id){
      api.get<User>(`users/${id}`)
        .then((response: any) => {
          setUser(response.data);
          getComments(response.data._links?.listComments.href);
        })
        .catch((e: Error) => {
          console.log(e);
          navigate("/notfound");
        });
    }

  }, [id]);

  const getComments = (listComments: string) => {
    if(listComments) {
      api.get<CommentCollection>(followLink(listComments))
        .then((r: any) => {
          setComments(r.data._embedded.commentModelList);
        })
        .catch((e: Error) => {
          console.log(e);
        })
    }
  }

  return (
    user ?
    <div>
      <h3>User Details</h3>
      <ProfileBox propUser={user}/>
      <h4>Graphs</h4>
        <UserGraphs user={user}/>
      <h4>Comments</h4>
      <ul>
        {comments.map(comment =>
          <li key={comment.entity.commentId}>
              {comment.entity.text}
          </li>
        )}
      </ul>
    </div>
      :
      <></>
  );
}

export default UserDetail