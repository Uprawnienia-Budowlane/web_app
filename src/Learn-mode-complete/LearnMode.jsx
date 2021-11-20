import { Redirect } from "react-router";
import React, {useState} from "react";
import{ BrowserRouter as Router, Switch, Route, useLocation, IndexRouteProps, } from 'react-router-dom'
import {
    ArchitectureIcon,
    BridgeIcon,
    CraneIcon,
    DamIcon,
    DemolitionIcon,
    MultimeterIcon,
    RoadIcon,
    SanitaryIcon,
    TeletechnicalIcon,
    TrainStationIcon,
    TrainSwitchIcon,
} from "../Icons";
/* Pages */

import Settings from './pages/Settings'
import Questions from './pages/Questions'
import FinalScreen from './pages/FinalScreen'

/* */
import SpecialtyCard from "../components/SpecialtyCard";
import SubSpeciality from "../modals/SubSpeciality";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();



const LearnMode = () => {
    const [speciality, setSpeciality] = useState("");
    const [subspecialiyModal, setSubspecialiyModal] = useState(false);

    let [loc, setLoc] = useState('/');
    let location = useLocation();

    React.useEffect(() => {
        setLoc(location.pathname);
    }, [location]);


    return (
        <>
        <div className="h-full w-full rounded-3xl bg-white flex flex-col">
            <div className="flex flex-col px-2 my-8 sm:mx-8">
                <p className="text-blue-500">Uprawnienia budowlane</p>
                <h1 className="font-bold text-2xl">Wybierz specjalność</h1>
            </div>

            <div className="flex mx-auto justify-center mt-16 mb-24">

                    <Router history={history}>
                        <Switch>
                            
                            <Route path='/learn' exact component={Settings}/>
                            <Route path='/questions' exact component={Questions} />
                            <Route path='/score' exact component={FinalScreen}/>
                            
                        </Switch>
                    </Router>

                </div>
            </div>
            

        </>
    );
}

export default LearnMode;