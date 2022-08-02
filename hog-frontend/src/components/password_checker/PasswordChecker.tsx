import {useEffect, useState} from "react";
import {FaTimesCircle, FaCheckCircle} from "react-icons/fa";
import styles from "./PasswordChecker.module.css";

interface Props {
  password: string
}

const Check = () => {
  return <FaCheckCircle className={`${styles.check}`}/>
}

const Times = () => {
  return <FaTimesCircle className={`${styles.times}`}/>
}

const PasswordChecker = ({password}: Props) => {
  const [hasLength, setHasLength] = useState<boolean>(false);
  const [hasUppercase, setHasUppercase] = useState<boolean>(false);
  const [hasLowercase, setHasLowercase] = useState<boolean>(false);
  const [hasNumeric, setHasNumeric] = useState<boolean>(false);
  const [hasSpecialChar, setHasSpecialChar] = useState<boolean>(false);

  useEffect(() => {
    setHasLength(password.length >= 16);
    setHasUppercase(new RegExp("^(?=.*[A-Z]).+$").test(password));
    setHasLowercase(new RegExp("^(?=.*[a-z]).+$").test(password));
    setHasNumeric(new RegExp("^(?=.*\\d).+$").test(password));
    setHasSpecialChar(new RegExp("^(?=.*[-+_!@#$%^&*.,?]).+$").test(password));
  }, [password])

  return (
    <div className={`${styles.criteria}`}>
      <p>Password must satisfy the following criteria</p>
      <div>
        {hasLength ? <Check/> : <Times/>}
        <p>Must be at least 16 characters</p>
      </div>
      <div>
        {hasUppercase ? <Check/> : <Times/>}
        <p>Must contain at least 1 uppercase character</p>
      </div>
      <div>
        {hasLowercase ? <Check/> : <Times/>}
        <p>Must contain at least 1 lowercase character</p>
      </div>
      <div>
        {hasNumeric ? <Check/> : <Times/>}
        <p>Must contain at least 1 numeric character</p>
      </div>
      <div>
        {hasSpecialChar ? <Check/> : <Times/>}
        <p>Must contain at least 1 special character (-+_!@#$%^&*.,?)</p>
      </div>
    </div>
  );
}

export default PasswordChecker;