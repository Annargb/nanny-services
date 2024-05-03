import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserName } from "../../redux/auth/selectors";

export const PrivateRoute = ({ component, redirectTo = "/" }) => {
  const user = useSelector(selectUserName);

  return user === null ? <Navigate to={redirectTo} /> : component;
};
