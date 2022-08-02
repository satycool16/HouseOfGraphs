import {useState} from "react";
import InputPassword from "../input_password/InputPassword";
import {useNavigate} from "react-router-dom";
import {LoginRequest} from "../../entities/Authentication";
import {User} from "../../entities/User";
import {useAppDispatch} from "../../app/Hooks";
import {setCurrentUser} from "../../features/current_user/CurrentUserSlice";
import api from "../../services/Api";
import PasswordChecker from "../password_checker/PasswordChecker";
import styles from "../../pages/account_page/LoginRegister.module.css";
import {MessageResponse} from "../../entities/MessageResponse";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>();

  const canSignin = () => {
    if(email.trim().length === 0 || password.trim().length === 0){
      return true;
    }
    return false;
  }

  const handleErrorStatus = (status: string) => {
    if(status === "UNACTIVATED"){
      setErrorMessage("This account hasn't been activated yet. Please visit your mailbox to activate your account.")
    } else if (status === "OLD_USER") {
      navigate("/forgot_password", {state: {oldUser: true}});
      setErrorMessage("MD5 User");
    } else {
      setErrorMessage("Incorrect email address or password.");
    }
  }

  const handleSignin = () => {
    let signIn: LoginRequest = {
      email: email.trim(),
      password: password.trim()
    }
    try {
      api.post("auth/login", signIn)
        .then(_ => {
          fetchProfile();
      }).catch(error => {
        // TODO - temporary fix
        checkOldUser();
        //handleErrorStatus(error.response.data.status);
      });
    } catch(error) {
      console.log(error)
    }
  }

  const checkOldUser = () => {
    try {
      api.get<MessageResponse>("users/old_user", {params: {email: email}})
        .then(response => {
          if(response.data.success){
            navigate("/forgot_password", {state: {oldUser: true}});
          }
        }).catch(error => {
        handleErrorStatus(error.response.data.status);
      });
    } catch(error) {
      console.log(error)
    }
  }

  const fetchProfile = () => {
    api.get("auth/me")
      .then((response: any) => {
        console.log(response);
        let user = response.data as User;
        localStorage.setItem("currentUser", JSON.stringify(user));
        dispatch(setCurrentUser(user));
        navigate("/");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  return (
    <div>
      <h3 className={`${styles.title}`}>Log in</h3>
      <div className={`${styles.body}`}>
        <div className={"input-group mb-3"}>
          <span className={"input-group-text"}>@</span>
          <input type={"email"} className={"form-control"} placeholder={"Email address*"} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
          <InputPassword label={"Password*"} changeHandler={(s: string) => setPassword(s)} strength={false}/>
        </div>
        { errorMessage !== undefined && errorMessage.length > 0 &&
            <div className={`${styles.errorBox}`}>
                <p className={`${styles.errorMessage}`}>{errorMessage}</p>
            </div>}
        <div className={`${styles.btnBar}`}>
          <div className={`${styles.loginForgot}`}>
            <button type={"submit"} className={"btn btn-primary"} onClick={handleSignin} disabled={canSignin()}>Log in</button>
            <p onClick={_ => navigate("/forgot_password", {state: {oldUser: false}})}>Forgot password?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;