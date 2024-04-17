import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserId } from "../../redux/auth/selectors";

export const PrivateRoute = ({ component, redirectTo = "/" }) => {
  const user = useSelector(selectUserId);
  //   const isRefreshing = useSelector(selectIsRefreshing);

  //   const shouldRedirect = !isRefreshing && !isLoggedIn;

  return user === null ? <Navigate to={redirectTo} /> : component;
};
