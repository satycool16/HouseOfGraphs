import {useNavigate, useSearchParams} from "react-router-dom";
import styles from "./LoginRegister.module.css";
import errors from "./LoginRegister.module.css";
import InputPassword from "../../components/input_password/InputPassword";
import {useEffect, useState} from "react";
import * as EmailValidator from "email-validator";
import api from "../../services/Api";
import {MessageResponse} from "../../entities/MessageResponse";
import {PasswordResetRequest} from "../../entities/Authentication";
import PasswordChecker from "../../components/password_checker/PasswordChecker";
import LoadingSpinner from "../../components/loading_spinner/LoadingSpinner";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const token: string = searchParams.get("token") || "";
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [displayError, setDisplayError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [successfulPasswordReset, setSuccessfulPasswordReset] = useState(false);

  useEffect(() => {
    let passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");
    let validPassword = passwordPattern.test(password) && password.length >= 10;
    if (email.length !== 0 && !EmailValidator.validate(email)) {
      setErrorMessage("Invalid email address")
    } else if(password.length !== 0 && !validPassword){
      setErrorMessage("Invalid password");
    } else if(passwordConfirm.length !== 0 && password !== passwordConfirm){
      setErrorMessage("Passwords do not match")
      setDisplayError(true);
    } else {
      setErrorMessage("")
      setDisplayError(false);
    }
  }, [email, password, passwordConfirm])

  const handleBlur = () => {
    setDisplayError(errorMessage !== undefined && errorMessage.length > 0);
  }

  const handlePasswordReset = () => {
    if(token.length > 0){
      let passwordReset: PasswordResetRequest = {
        token: token,
        email: email.trim(),
        password: password
      }
      setLoading(true);
      try {
        api.post<MessageResponse>("auth/reset_password", passwordReset)
          .then(response => {
            if(response.data.success){
              setLoading(false);
              setSuccessfulPasswordReset(true);
            }
          }).catch(error => {
          setErrorMessage(error.response.data.message);
          setDisplayError(true);
          setLoading(false);
        });
      } catch(error) {
        console.log(error)
      }
    }
  }

  return (
    <div className={"card"} style={{width: "50%", margin: "0 auto"}}>
      { !successfulPasswordReset ?
        <div className={"card-body"} style={{padding: "16px 0 0 0"}}>
        <h3 className={`${styles.title}`}>Reset password</h3>
        <div className={`${styles.body}`}>
          <p>Please enter your email address and pick a new password.</p>
          <div className={"input-group mb-3"}>
            <span className={"input-group-text"}>@</span>
            <input type={"email"} className={"form-control"} placeholder={"Email address*"}
                   onChange={e => setEmail(e.target.value)} onBlur={handleBlur}/>
          </div>
          <div>
            <InputPassword label={"Password*"} changeHandler={(s: string) => setPassword(s)} blurHandler={handleBlur}
                           strength/>
            <InputPassword label={"Confirm password*"} changeHandler={(s: string) => setPasswordConfirm(s)} strength/>
          </div>
          {displayError && errorMessage !== undefined && errorMessage.length > 0 &&
              <div className={`${errors.errorBox}`}>
                {errorMessage === "Invalid password" ? <PasswordChecker password={password}/> : <p>{errorMessage}</p>}
              </div>}
          <div className={`${styles.btnBar}`}>
            {loading && <div style={{marginRight: "10px"}}><LoadingSpinner/></div>}
            <button type={"submit"} className={"btn btn-primary"} onClick={handlePasswordReset}>Reset password</button>
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
        <p>Your password has been reset successfully.</p>
        <p className={`${styles.toggleView}`} onClick={_ => navigate("/login")}>Log in</p>
        </div>}
    </div>
  );
}

export default ResetPasswordPage;