import Login from "../../components/login/Login";
import styles from "./LoginRegister.module.css";
import {useLocation, useNavigate} from "react-router-dom";
import InputPassword from "../../components/input_password/InputPassword";
import errors from "./LoginRegister.module.css";
import {useEffect, useState} from "react";
import * as EmailValidator from "email-validator";
import {SignupRequest} from "../../entities/Authentication";
import api from "../../services/Api";
import {MessageResponse} from "../../entities/MessageResponse";
import LoadingSpinner from "../../components/loading_spinner/LoadingSpinner";


const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as {oldUser: boolean};
  const [oldUser, setOldUser] = useState<boolean>(state === null || state.oldUser === null ? false : state.oldUser);
  const [email, setEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [mailSent, setMailSent] = useState<boolean>(false);

  useEffect(() => {
    if (email.length !== 0 && !EmailValidator.validate(email)) {
      setErrorMessage("Invalid email address")
    } else {
      setErrorMessage("");
      setVisible(false);
    }
  }, [email])

  const handlePasswordReset = () => {
    if(errorMessage.length === 0){
      setLoading(true);
      try {
        api.get<MessageResponse>("auth/pw_reset_email", {params:  {email: email}})
          .then(response => {
            if(response.data.success){
              console.log(response.data.message);
              setLoading(false);
              setMailSent(true);
            }
          }).catch(error => {
          setErrorMessage(error.response.data.message);
          setVisible(true);
          setLoading(false);
        });
      } catch(error) {
        console.log(error)
      }
    }
  }

  return (
    <div className={"card"} style={{width: "50%", margin: "0 auto"}}>
      { !mailSent ?
        <div className={"card-body"} style={{padding: "16px 0 0 0"}}>
        <h3 className={`${styles.title}`}>{!oldUser ? "Forgot password?" : "Welcome back!"}</h3>
        <div className={`${styles.body}`}>
          <p>{!oldUser ? "Please enter your email address. You will receive an email to reset your password."
          : "Welcome back to our upgraded House of Graphs. Due to the upgrade of our website and to guarantee your protection you will have " +
            "to reset your password to meet our new standards."}</p>
          {oldUser && <p>Please enter your email address. You will receive an email to reset your password.</p>}
          <div className={"input-group mb-3"}>
            <span className={"input-group-text"}>@</span>
            <input type={"email"} className={"form-control"} placeholder={"Email address*"}
                   onChange={e => setEmail(e.target.value)} onBlur={_ => setVisible(true)}/>
          </div>
          {visible && errorMessage !== undefined && errorMessage.length > 0 &&
              <div className={`${errors.errorBox}`}>
                  <p className={`${styles.errorMessage}`}>{errorMessage}</p>
              </div>}
          <div className={`${styles.btnBar}`}>
            {loading && <div style={{marginRight: "10px"}}><LoadingSpinner/></div>}
            <button type={"submit"} className={"btn btn-primary"} onClick={handlePasswordReset}>Send email</button>
          </div>
        </div>
        <br/>
        <div className={"card-footer"}>
          <div className={`${styles.toggleBox}`}>
            <p className={`${styles.sentence}`}>Back to login?</p>
            <p className={`${styles.toggleView}`} onClick={_ => navigate("/login")}>Login</p>
          </div>
        </div>
      </div>
        :
        <div className={`${styles.registerSuccess}`}>
        <img src={"hog.png"} alt={"logo"}/>
        <p>Your password reset request was successful!</p>
        <p>Please check your email to reset your password.</p>
        </div>}
    </div>
  );
}

export default ForgotPasswordPage;