import { Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import { Switch } from "react-router";
function App() {
    return (
        <div>
            {/* //localhost:3000 
            //my-page.com/ */}
            <Switch>
                <Route path="/" exact={true}>
                    <AllMeetupsPage></AllMeetupsPage>
                </Route>
                <Route path="/new-meetup">
                    <NewMeetupPage></NewMeetupPage>
                </Route>
                <Route path="/favorites">
                    <Favorites></Favorites>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
