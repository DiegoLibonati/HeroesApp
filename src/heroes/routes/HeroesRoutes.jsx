import { Navbar } from "../../ui/components/NavBar";
import { Route, Routes, Navigate } from "react-router-dom";
import { SearchPage } from "../pages/SearchPage";
import { HeroPage } from "../pages/HeroPage";
import { HeroesProvider } from "../context/HeroesProvider";
import { HeroByPublisherPage } from "../pages/HeroByPublisherPage";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar></Navbar>

      <main>
        <HeroesProvider>
          <Routes>
            <Route
              path="/index"
              element={<HeroByPublisherPage></HeroByPublisherPage>}
            ></Route>

            <Route path="/search" element={<SearchPage></SearchPage>}></Route>
            <Route path="/hero/:heroId" element={<HeroPage></HeroPage>}></Route>

            {/* Mas... */}
            <Route
              path="/*"
              element={<Navigate to="/index"></Navigate>}
            ></Route>
          </Routes>
        </HeroesProvider>
      </main>
    </>
  );
};
