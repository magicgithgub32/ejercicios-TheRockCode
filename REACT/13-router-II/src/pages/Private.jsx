import Login from "./Login.jsx";
import { Navigate } from "react-router-dom";

const Private = () => {
  const isAuthenticated = localStorage.getItem("authenticated") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <h2>
          Este componente sólo debe ser accesible para los usuarios autenticados
        </h2>
      </div>
    );
  }
};

export default Private;
