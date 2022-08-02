import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import UnauthorizedPage from "../unauthorized_page/UnauthorizedPage";
import api from "../../services/Api";
import {MessageResponse} from "../../entities/MessageResponse";
import styles from "../account_page/LoginRegister.module.css";

const VerificationPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const token: string = searchParams.get("token") || "";
  const [successfulVerification, setSuccessfulVerification] = useState(false);

  useEffect(() => {
    if(token.length > 0){
      try {
        api.get<MessageResponse>("auth/verify", {params:  {token: token}})
          .then(response => {
            if(response.data.success){
              console.log(response.data.message);
              setSuccessfulVerification(true);
            }
          }).catch(error => {
          console.log(error.response.data)
        });
      } catch(error) {
        console.log(error)
      }
    }
  }, [])

  return (
    <div>
      {
        token.length > 0 ?
          <div className={"card"} style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
            <div className={`${styles.registerSuccess}`}>
              <img src={"hog.png"} alt={"logo"}/>
              {successfulVerification ?
                <>
                  <p>You have been successfully verified.</p>
                  <p className={`${styles.toggleView}`} onClick={_ => navigate("/login")}>Log in</p>
                </>
                :
                <p>Failed to verify your registration.</p>
              }
            </div>
          </div>
        :
        <UnauthorizedPage/>
      }
    </div>
  );
}

export default VerificationPage;