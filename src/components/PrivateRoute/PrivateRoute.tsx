import { Navigate } from 'react-router-dom';
import { IPrivateRouteProps } from '../utils/types';

function PrivateRoute({ isAuth, authPath, outlet }: IPrivateRouteProps) {
  if (isAuth) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authPath }} />;
  }
}

export default PrivateRoute;
