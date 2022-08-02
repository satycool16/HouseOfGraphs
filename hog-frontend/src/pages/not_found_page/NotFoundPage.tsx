import {useNavigate} from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>Error 404! The page you're looking for doesn't exist</p>
      <button className={"btn btn-primary"} onClick={_ => navigate("/")}>Return to Home</button>
    </div>
  );
}

export default NotFoundPage