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
            <div className="flex mx-auto justify-center mt-16 mb-24 learn-page">

                    <Router history={history}>
                        <Switch>
                            
                            <Route path='/learn' exact component={Settings}/>
                            <Route path='/learn/questions' exact component={Questions} />
                            <Route path='/learn/score' exact component={FinalScreen}/>
                            
                        </Switch>
                    </Router>

                </div>
            </div>
            

        </>
    );
}

export default LearnMode;