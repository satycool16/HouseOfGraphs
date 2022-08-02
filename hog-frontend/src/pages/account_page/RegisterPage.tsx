import RegisterAccount from "../../components/register_account/RegisterAccount";
import styles from "./LoginRegister.module.css";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [registered, setRegistered] = useState<boolean>(false);

  const handleSuccessfulRegister = () => {
    setRegistered(true);
  }

  return (
    <div className={"card"} style={{width: "50%", margin: "0 auto"}}>
      { !registered ?
      <div className={"card-body"} style={{padding: "16px 0 0 0"}}>
        <RegisterAccount handleSuccessfulRegister={handleSuccessfulRegister}/>
        <br/>
        <div className={"card-footer"}>
          <div className={`${styles.toggleBox}`}>
            <p className={`${styles.sentence}`}>Already have an account ? </p>
            <p className={`${styles.toggleView}`} onClick={_ => navigate("/login")}>Log in</p>
          </div>
        </div>
      </div>
      :
      <div className={`${styles.registerSuccess}`}>
        <img src={"hog.png"} alt={"logo"}/>
        <p>Your registration was successful!</p>
        <p>Please check your email to verify your account.</p>
      </div>
      }
    </div>
  );
}

export default RegisterPage;