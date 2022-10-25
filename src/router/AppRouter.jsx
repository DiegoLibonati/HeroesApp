import { Routes, Route, Navigate } from "react-router-dom";
import { CheckingAuth } from "../auth/components/CheckingAuth";
import { LoginPage } from "../auth/pages/LoginPage";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRouter = () => {
  const { logged } = useCheckAuth();

  if (logged === "checking") return <CheckingAuth></CheckingAuth>;

  return (
    <>
      <Routes>
        {logged === "authenticated" ? (
          <>
            <Route path="/*" element={<HeroesRoutes></HeroesRoutes>}></Route>
          </>
        ) : (
          <>
            <Route path="login" element={<LoginPage></LoginPage>}></Route>

            <Route
              path="register"
              element={<RegisterPage></RegisterPage>}
            ></Route>
          </>
        )}
        <Route path="/*" element={<Navigate to="/login"></Navigate>} />
      </Routes>
    </>
  );
};
