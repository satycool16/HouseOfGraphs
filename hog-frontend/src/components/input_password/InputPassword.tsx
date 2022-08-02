import {HiEye, HiEyeOff} from "react-icons/hi";
import {useState} from "react";
import PasswordStrengthBar from 'react-password-strength-bar';
import {FaLock} from "react-icons/fa";

interface Props {
  label: string,
  changeHandler: (s: string) => void,
  blurHandler?: () => void,
  strength: boolean
}

const InputPassword = ({label, changeHandler, blurHandler, strength}: Props) => {
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const handleChange = (event: any) => {
    setPassword(event.target.value);
    changeHandler(event.target.value);
  }

  return (
    <div>
      <div className={"input-group mb-3"}>
        <span className={"input-group-text"}><FaLock/></span>
        <input type={passwordShown ? "text" : "password"} className={"form-control"} placeholder={label} onChange={handleChange} onBlur={blurHandler}/>
        <span className={"input-group-text"} style={{cursor: "pointer"}} onClick={_ => setPasswordShown(!passwordShown)}>{passwordShown ? <HiEye/> : <HiEyeOff /> }</span>
      </div>
      { strength && password.length > 0 &&
        /* @ts-ignore */
          <PasswordStrengthBar password={password} minLength={10}/>
      }
    </div>
  );
}

export default InputPassword;