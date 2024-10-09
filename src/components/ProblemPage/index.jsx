import { useRouteError } from "react-router-dom";

export default function ProblemPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="problem-page">
      <h1>Oops!</h1>
      <p>We’re sorry, but an unexpected error has happened.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}