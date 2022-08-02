import {useNavigate} from "react-router-dom";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>You are not authorized to view this page.</p>
      <button className={"btn btn-primary"} onClick={_ => navigate("/")}>Return to Home</button>
    </div>
  );
}

export default UnauthorizedPage;