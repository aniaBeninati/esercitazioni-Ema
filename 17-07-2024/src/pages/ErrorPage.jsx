import React from 'react';
import { useRouteError } from 'react-router-dom';

/**
 * Componente per la pagina di errore
 * @component
 * @returns {JSX.Element} - Ritorna la pagina di errore con il messaggio di errore
 */
function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{<i>{error.statusText || error.message}</i>}</p>
    </div>
  );
}

export default ErrorPage;
