import { Route } from "react-router-dom/cjs/react-router-dom.min";
const Welcome = () => {
    return (
        <>
            <h1>The Welcome Page</h1>
    {/* the below route will be evaluated only when the welcome page becomes active*/}
            <Route path="/welcome/new-user">
                <h3>Welcome New user</h3>
            </Route>
        </>
    )
}
export default Welcome;