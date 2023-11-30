import { lazy, Suspense } from "react";
const App = () => {
  const Home = lazy(() => import("./pages/Home"));
  return (
    <>
      <Suspense>
        <Home />
      </Suspense>
    </>
  );
};

export default App;
