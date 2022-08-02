import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {UpdateNameRequest, UpdatePasswordRequest, User} from "../../entities/User";
import styles from "./EditProfile.module.css";
import {getIconFromName} from "../../util/getIconFromName";
import api from "../../services/Api";
import {MessageResponse} from "../../entities/MessageResponse";
import {useAppDispatch} from "../../app/Hooks";
import {setCurrentUser} from "../../features/current_user/CurrentUserSlice";
import InputPassword from "../../components/input_password/InputPassword";
import {FaUser} from "react-icons/fa";
import {IoArrowUndo} from "react-icons/all"
import PasswordChecker from "../../components/password_checker/PasswordChecker";
import {BsPencilFill} from "react-icons/bs";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const state = location.state as {user: User};
  const [user, setUser] = useState<User>(state.user);
  const [editingName, setEditingName] = useState<boolean>(false);
  const [editingPassword, setEditingPassword] = useState<boolean>(false);
  const [firstname, setFirstname] = useState<string>(user.entity.firstname);
  const [firstnameError, setFirstnameError] = useState<boolean>(false);
  const [lastname, setLastname] = useState<string>(user.entity.lastname);
  const [lastnameError, setLastnameError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [showPasswordError, setShowPasswordError] = useState<boolean>(false);
  const [failedError, setFailedError] = useState<boolean>(false);

  useEffect(() => {
    if(failedError){
      setFailedError(false);
    }
  }, [password, newPassword, confirmNewPassword])

  useEffect(() => {
    let passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");
    let validPassword = passwordPattern.test(newPassword) && newPassword.length >= 10;
    if(newPassword.length !== 0 && !validPassword){
      setPasswordError("Invalid password");
    } else if(confirmNewPassword.length !== 0 && newPassword !== confirmNewPassword){
      setPasswordError("Passwords do not match")
    } else {
      setPasswordError("")
    }
  }, [newPassword, confirmNewPassword])

  useEffect(() => {
    setShowPasswordError(false);
  }, [newPassword])

  useEffect(() => {
    setFirstnameError(firstname.trim() === "");
  }, [firstname])

  useEffect(() => {
    setLastnameError(lastname.trim() === "");
  }, [lastname])

  const fetchUser = () => {
    api.get<User>("users/" + user.entity.userId)
      .then((response: any) => {
        setUser(response.data);
        dispatch(setCurrentUser(response.data as User));
        localStorage.setItem("currentUser", JSON.stringify(response.data));
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  const saveEdit = () => {
    if(editingName){
      let updateName: UpdateNameRequest = {
        userId: user.entity.userId,
        firstname: firstname,
        lastname: lastname
      }
      api.patch<MessageResponse>("users/update_name", updateName)
        .then((response: any) => {
          if(response.data.success){
            fetchUser();
            setEditingName(false);
          }
        })
        .catch((e: Error) => {
          console.log(e);
        })
    } else if (editingPassword){
      let updatePassword: UpdatePasswordRequest = {
        userId: user.entity.userId,
        oldPassword: password,
        newPassword: newPassword
      }
      api.patch<MessageResponse>("users/update_password", updatePassword)
        .then((response: any) => {
          if(response.data.success){
            fetchUser();
            setEditingPassword(false);
          } else {
            setFailedError(true);
            setShowPasswordError(true);
          }
        })
        .catch((e: Error) => {
          console.log(e);
        })
    }
  }

  const cancelEdit = () => {
    if(editingName){
      setEditingName(false);
      setFirstname(user.entity.firstname);
      setLastname(user.entity.lastname);
    }
    if(editingPassword){
      setPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      setEditingPassword(false);
    }
  }

  const disableSave = () => {
    if(editingName){
      return (firstname.trim() === "" || lastname.trim() === "");
    } else if (editingPassword){
      return (password === "" || newPassword === "" || confirmNewPassword === "" || newPassword !== confirmNewPassword || passwordError !== "");
    }
    return false;
  }

  const onBlur = () => {
    setShowPasswordError(true);
  }

  return (
    <div>
      <button className={"btn btn-primary"} onClick={_ => navigate("/profile")}><IoArrowUndo style={{margin: "0 5px 4px 0"}}/> Return to Profile</button>
      <br/>
      <br/>
      <div className={"card"} style={{marginBottom: "15px", padding: "10px"}}>
        <div className={`${styles.profileBox}`}>
          <div className={`${styles.imageBox}`}>
            <img src={getIconFromName(user.fullname)} className={"img-fluid rounded-start"} alt={"..."} width={"90"} height={"90"}/>
          </div>
          <div className={"container"} style={{marginLeft: "30px"}}>
            <div className={"row"} style={{marginBottom: "5px"}}>
              <div className={"col-2"}>
                <p><b>First name</b></p>
              </div>
              <div className={"col"}>
                { !editingName ?
                  <p>{user.entity.firstname}</p>
                  :
                  <div>
                    <div className={"input-group"}>
                      <span className={"input-group-text"}><FaUser/></span>
                      <input type={"text"} className={"form-control"} placeholder={"First name*"} value={firstname} onChange={e => setFirstname(e.target.value)}/>
                    </div>
                    { firstnameError && <p style={{color: "red", marginTop: "2px"}}>First name can't be empty</p>}
                  </div>
                }
              </div>
            </div>
            <div className={"row"} style={{marginBottom: "5px"}}>
              <div className={"col-2"}>
                <p><b>Last name</b></p>
              </div>
              <div className={"col"}>
                { !editingName ?
                  <p>{user.entity.lastname}</p>
                  :
                  <div>
                    <div className={"input-group"}>
                      <span className={"input-group-text"}><FaUser/></span>
                      <input type={"text"} className={"form-control"} placeholder={"Last name*"} value={lastname} onChange={e => setLastname(e.target.value)}/>
                    </div>
                    { lastnameError && <p style={{color: "red", marginTop: "2px"}}>Last name can't be empty</p>}
                  </div>
                }
              </div>
            </div>
            <div className={"row"} style={{marginBottom: "5px"}}>
              <div className={"col-2"}>
                <p><b>Email</b></p>
              </div>
              <div className={"col"}>
                <p>{user.entity.email}</p>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col-2"}>
                <p><b>Password</b></p>
              </div>
              <div className={"col"}>
                { !editingPassword ?
                  <p>●●●●●●●●</p>
                  :
                  <div>
                    <InputPassword label={"Current password*"} changeHandler={(s: string) => setPassword(s)} strength={false}/>
                    <InputPassword label={"New password*"} changeHandler={(s: string) => setNewPassword(s)} blurHandler={onBlur} strength/>
                    <InputPassword label={"Confirm new password*"} changeHandler={(s: string) => setConfirmNewPassword(s)} strength/>
                    { passwordError.length > 0 && showPasswordError &&
                        <div className={`${styles.errorBox}`}>
                          {passwordError === "Invalid password" ? <PasswordChecker password={newPassword}/> : <p>{passwordError}</p>}
                        </div>
                    }
                    { failedError && <div className={`${styles.errorBox}`}> <p>Failed to update password</p> </div> }
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
        <div>
          {editingName || editingPassword ?
            <div className={`${styles.btnBar}`}>
              <button className={"btn btn-secondary"} onClick={cancelEdit}>Cancel</button>
              <button className={"btn btn-primary"} onClick={saveEdit} disabled={disableSave()}>Save</button>
            </div>
            :
            <div className={`${styles.btnBar}`}>
              <button className={"btn btn-primary"} onClick={_ => setEditingName(true)}><BsPencilFill style={{marginRight: "5px"}}/> Edit name</button>
              <button className={"btn btn-primary"} onClick={_ => setEditingPassword(true)}><BsPencilFill style={{marginRight: "5px"}}/> Edit password</button>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default EditProfile;