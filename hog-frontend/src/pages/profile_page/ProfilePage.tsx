import {User} from "../../entities/User";
import {useAppSelector} from "../../app/Hooks";
import {selectCurrentUser, selectIsAdmin} from "../../features/current_user/CurrentUserSlice";
import UnauthorizedPage from "../unauthorized_page/UnauthorizedPage";
import React, {useState} from "react";
import {Comment} from "../../entities/Comment";
import ProfileBox from "../../components/profile_box/ProfileBox";
import UserGraphs from "../../components/user_graphs/UserGraphs";

const ProfilePage = () => {
  const user: User|undefined = useAppSelector(selectCurrentUser);
  const isAdmin: boolean = useAppSelector(selectIsAdmin);
  const [comments, setComments] = useState<Comment[]>();

  console.log(user);

  // TODO - Show user comments ?
  /*useEffect(() => {
    if(user){
      getComments(user._links?.listComments.href);
    }
  }, [user]);

  const getComments = (listComments: string|undefined) => {
    if(listComments) {
      api.get<CommentCollection>(followLink(listComments))
        .then((r: any) => {
          setComments(r.data._embedded.commentModelList);
        })
        .catch((e: Error) => {
          console.log(e);
        })
    }
  }*/

  return (
    user ?
    <div>
      <h3>Profile</h3>
        <ProfileBox propUser={user}/>
      <div>
        <h4>My Graphs</h4>
        <UserGraphs user={user}/>
      </div>
    </div>
      :
    <UnauthorizedPage/>
  );
}

export default ProfilePage;