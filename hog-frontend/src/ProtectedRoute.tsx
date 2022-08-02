import React from "react";
import { Navigate } from 'react-router-dom';
import {User} from "./entities/User";
import {useAppSelector} from "./app/Hooks";
import {selectCurrentUser} from "./features/current_user/CurrentUserSlice";
import {UserRole} from "./entities/UserRole";

interface Props {
  neededRole?: UserRole
}

const ProtectedRoute: React.FC<Props> = ({neededRole, children}) => {
  const user: User|undefined = useAppSelector(selectCurrentUser);

  if (!user) {
    return <Navigate to={"/unauthorized"} replace />;
  } else {
    if(neededRole && (user.entity.userRole !== neededRole)){
      return <Navigate to={"/unauthorized"} replace />;
    }
  }

  return (
    <>
      {children}
    </>
  );
}

export default ProtectedRoute;

