import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
    return (
        <div>
            {/* //localhost:3000 
            //my-page.com/ */}
            <Switch>
                <MainNavigation />
                <Route path="/" exact>
                    <AllMeetupsPage />
                </Route>
                <Route path="/new-meetup">
                    <NewMeetupPage />
                </Route>
                <Route path="/favorites">
                    <FavoritesPage />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
