import {useEffect, useState} from "react";
import InputPassword from "../input_password/InputPassword";
import {SignupRequest} from "../../entities/Authentication";
import {FaUser} from "react-icons/all";
import api from "../../services/Api";
import * as EmailValidator from 'email-validator';
import {MessageResponse} from "../../entities/MessageResponse";
import LoadingSpinner from "../loading_spinner/LoadingSpinner";
import styles from "../../pages/account_page/LoginRegister.module.css";
import PasswordChecker from "../password_checker/PasswordChecker";

const SITE_KEY = "6LeQQ-weAAAAAPixM_eZduD-LGr-K2RnCVSWyL8i";

interface Props {
  handleSuccessfulRegister: () => void
}

const RegisterAccount = ({handleSuccessfulRegister}: Props) => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [displayError, setDisplayError] = useState<boolean>(false);

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

  // Dynamically load the JavaScript API
  useEffect(() => {
    const loadScriptByURL = (id: string, url: string, callback: () => void) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    }

    // load the script by passing the URL
    loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`, function () {
      console.log("Script loaded!");
    });
  }, []);

  const handleRegister = () => {
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(token => {
        submitData(token);
      });
    });
  }

  const submitData = (token: string) => {
    let signUp: SignupRequest = {
      firstname: firstname.trim(),
      lastname: lastname.trim(),
      email: email.trim(),
      password: password,
      recaptcha_response: token
    }
    setLoading(true);
    try {
      api.post<MessageResponse>("auth/register", signUp)
        .then(response => {
          if(response.data.success){
            handleSuccessfulRegister();
            setLoading(false);
          }
        }).catch(error => {
        setErrorMessage(error.response.data.message)
        setDisplayError(true);
        setLoading(false);
      });
    } catch(error) {
      console.log(error)
    }
  }

  const canRegister = (): boolean => {
    if(firstname.trim().length === 0 || lastname.trim().length === 0 || email.trim().length === 0){
      return true;
    }
    if(errorMessage !== undefined && errorMessage.length > 0){
      return true;
    }
    return false;
  }

  return (
    <div>
      <div className={`${styles.title}`}>
        <h3>Register</h3>
      </div>
        <div className={`${styles.body}`}>
        <div className={"row" }>
          <div className={"col-6"}>
            <div className={"input-group mb-3"}>
              <span className={"input-group-text"}><FaUser/></span>
              <input type={"text"} className={"form-control"} placeholder={"First name*"} onChange={e => setFirstname(e.target.value)}/>
            </div>
          </div>
          <div className={"col-6"}>
            <div className={"input-group mb-3"}>
              <span className={"input-group-text"}><FaUser/></span>
              <input type={"text"} className={"form-control"} placeholder={"Last name*"} onChange={e => setLastname(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className={"input-group mb-3"}>
          <span className={"input-group-text"}>@</span>
          <input type={"email"} className={"form-control"} placeholder={"Email address*"} onChange={e => setEmail(e.target.value)} onBlur={handleBlur} />
        </div>
        <div>
          <InputPassword label={"Password*"} changeHandler={(s: string) => setPassword(s)} blurHandler={handleBlur} strength/>
          <InputPassword label={"Confirm password*"} changeHandler={(s: string) => setPasswordConfirm(s)} strength/>
        </div>
        { errorMessage !== undefined && errorMessage.length > 0 && displayError &&
          <div className={`${styles.errorBox}`}>
            {errorMessage === "Invalid password" ? <PasswordChecker password={password}/> : <p>{errorMessage}</p>}
        </div>}
        <div className={`${styles.btnBar}`}>
          {loading && <div style={{marginRight: "10px"}}><LoadingSpinner/></div>}
          <button type={"submit"} className={"btn btn-primary"} onClick={handleRegister} disabled={canRegister()}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default RegisterAccount;