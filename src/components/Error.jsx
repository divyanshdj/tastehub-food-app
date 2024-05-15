import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();

    return(
        <>
        <h1>Error!!!</h1>
        <h2>{err.status} {err.statusText}</h2>
        </>
    )
}

export default Error;