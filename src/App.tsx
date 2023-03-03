import { useEffect } from "react";
import useAppDispatch from "./hooks/useAppDispatch";
import { useRefreshQuery } from "./redux/api/authApi";
import { setCredentials } from "./redux/slices/authSlice";
import { Layout, Preloader } from "./components";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const dispatch = useAppDispatch();
  const { isLoading, data } = useRefreshQuery();

  useEffect(() => {
    if (data) {
      dispatch(setCredentials(data));
    }
  }, [data]);

  return <Layout>{isLoading ? <Preloader /> : <AppRoutes />}</Layout>;
}

export default App;
