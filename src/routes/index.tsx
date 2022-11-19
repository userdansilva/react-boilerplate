import { lazy, Suspense } from "react";
import { Routes as Switch, Route, Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const Welcome = lazy(() => import("@welcome/pages"));
const Login = lazy(() => import("@auth/pages"));
const NotFound = lazy(() => import("@shared/pages/404"));

function ErrorHandler() {
  return (
    <ErrorBoundary fallback={<h1>Ops! Something went wrong</h1>}>
      <Outlet />
    </ErrorBoundary>
  );
}

function LazyHandler() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Outlet />
    </Suspense>
  );
}

function Routes() {
  return (
    <Switch>
      <Route element={<ErrorHandler />}>
        <Route element={<LazyHandler />}>
          <Route path="/" element={<Welcome />} />

          <Route path="auth">
            <Route path="login" element={<Login />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Switch>
  );
}

export { Routes };
