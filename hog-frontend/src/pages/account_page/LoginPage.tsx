import Login from "../../components/login/Login";
import styles from "./LoginRegister.module.css";
import {useNavigate} from "react-router-dom";


const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className={"card"} style={{width: "50%", margin: "0 auto"}}>
      <div className={"card-body"} style={{padding: "16px 0 0 0"}}>
        <Login/>
        <br/>
        <div className={"card-footer"}>
          <div className={`${styles.toggleBox}`}>
            <p className={`${styles.sentence}`}>Don't have an account yet ? </p>
            <p className={`${styles.toggleView}`} onClick={_ => navigate("/register")}>Register</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;