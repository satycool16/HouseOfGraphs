import {User} from "../../entities/User";
import styles from "./ProfileBox.module.css";
import {getIconFromName} from "../../util/getIconFromName";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {BsPencilFill} from 'react-icons/bs';
import {FaTrashAlt, FaUser} from "react-icons/fa";
import ConfirmationModal from "../confirmation_modal/ConfirmationModal";
import api from "../../services/Api";
import {MessageResponse} from "../../entities/MessageResponse";
import {selectCurrentUser, selectIsAdmin, setCurrentUser} from "../../features/current_user/CurrentUserSlice";
import {useAppDispatch, useAppSelector} from "../../app/Hooks";
import { toast } from 'react-toastify';
import InputPassword from "../input_password/InputPassword";
import {DeleteAccountRequest} from "../../entities/Authentication";

interface Props {
  propUser: User
}

const ProfileBox = ({propUser}: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const currentUser: User|undefined = useAppSelector(selectCurrentUser);
  const isAdmin: boolean = useAppSelector(selectIsAdmin);
  const [user, setUser] = useState<User>(propUser);
  const [password, setPassword] = useState<string>("");

  const editProfile = () => {
    navigate("/edit_profile", {state: {user: user}})
  }

  const removeProfile = () => {
    let deleteAccount: DeleteAccountRequest = {
      userId: user.entity.userId,
      password: password
    }
    api.post<MessageResponse>("users/remove_account", deleteAccount)
      .then((response: any) => {
        if(response.data.success){
          if(user.entity.userId === currentUser?.entity.userId){
            navigate("/");
            toast.success("Account successfully deleted!");
            localStorage.removeItem("currentUser");
            dispatch(setCurrentUser(undefined));
          } else {
            api.get<User>("users/" + user.entity.userId)
              .then((response: any) => {
                setUser(response.data);
                toast.success("User successfully deleted!");
              })
              .catch((e: Error) => {
                console.log(e);
                toast.success("User successfully deleted!");
                navigate("/");
              });
          }
        } else {
          toast.error("Account deletion failed!");
        }
      })
      .catch((e: Error) => {
        console.log(e);
      })
  }

  return (
    <div className={"card"} style={{marginBottom: "15px", padding: "10px"}}>
      <div className={`${styles.profileBox}`}>
        <div className={`${styles.imageBox}`}>
          <img src={getIconFromName(user.fullname)} className={"img-fluid rounded-start"} alt={"..."} width={"90"} height={"90"}/>
        </div>
        <div className={"container"} style={{marginLeft: "30px"}}>
          <div className={"row"} style={{marginBottom: "5px"}}>
            <div className={"col-2"}>
              <p><b>Full name</b></p>
            </div>
            <div className={"col"}>
              <div className={`${styles.nameLine}`}><p>{user.fullname}</p>
              {user.entity.userRole === 2 && <p className={`${styles.tag}`} style={{backgroundColor: "#E74C3C"}}>Admin</p>}
              {user.entity.email === null && user.entity.password === null && <p className={`${styles.tag}`} style={{backgroundColor: "#50C878"}}>Deleted</p>}
              </div>
            </div>
          </div>
          <div className={"row"} style={{marginBottom: "5px"}}>
            <div className={"col-2"}>
              <p><b>Email</b></p>
            </div>
            <div className={"col"}>
              <p>{user.entity.email === null ? "/" : user.entity.email}</p>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-2"}>
              <p><b>Activated account</b></p>
            </div>
            <div className={"col"}>
              <p>{user.entity.activated ? "Yes" : "No"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.btnBar}`}>
        {currentUser && currentUser.entity.userId === user.entity.userId &&
          <button className={"btn btn-primary"} onClick={editProfile}><BsPencilFill style={{marginRight: "5px"}}/> Edit
          profile</button>
        }
        {((currentUser && currentUser.entity.userId === user.entity.userId) || (isAdmin)) && user.entity.email !== null &&
          <button className={"btn btn-danger"} data-bs-toggle={"modal"} data-bs-target={"#removeAccountModal"}>
            <FaTrashAlt style={{marginRight: "5px"}}/> Delete account</button>
        }
        </div>
      <div className={"modal fade"} id={"removeAccountModal"} aria-hidden={"true"}>
        <ConfirmationModal
          body={
          currentUser?.entity.userId === user.entity.userId ?
            <div>
              <p>Are you sure you want to delete your account? <b>This action can't be undone!</b></p>
              <p>By deleting your account, your personal data (e.g. name, email) will be deleted.</p>
              <p>However, graphs you uploaded and comments you made will still be visible, but your name will be anonymized (e.g. User 1568).</p>
              <br/>
              <p>Please enter your password to confirm your account deletion.</p>
              <InputPassword label={"Password*"} changeHandler={(s: string) => setPassword(s)} strength={false}/>
            </div>
            :
            <div>
              <p>Are you sure you want to delete this account? <b>This action can't be undone!</b></p>
              <p>By deleting this account, all personal data (e.g. name, email) of this user will be deleted.</p>
              <p>However, graphs uploaded by the user and comments made by the user will still be visible, but the name will be anonymized (e.g. User 1568).</p>
              <br/>
              <p>Please enter your password to confirm the account deletion.</p>
              <InputPassword label={"Password*"} changeHandler={(s: string) => setPassword(s)} strength={false}/>
            </div>
          }
          title={"Delete account"}
          confirmText={"Delete " + (currentUser?.entity.userId === user.entity.userId ? "my" : "this") + " account"}
          onConfirm={removeProfile}
          id={"deleteEmbeddingModal"}
          disabledConfirm={password.length === 0}/>
      </div>
    </div>
  );
}

export default ProfileBox;