import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function Error_page() {
  const error = useRouteError();
  console.log(error)
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <h4 style={{textTransform: 'capitalize'}}><i>{error.status} {error.statusText}</i></h4>
      <p style={{marginBottom: '10px'}}>Sorry, an unexpected error has occurred.</p>
      <Link id="backtoHP" to='/'>Back to Homepage</Link>
    </div>
  )
}

export default Error_page;
