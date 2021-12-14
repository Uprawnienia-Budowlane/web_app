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
import ExamEnd from '../modals/ExamEnd'

export const history = createBrowserHistory();

const WrittenExam = () => {

    const [speciality, setSpeciality] = useState("");
    const [subspecialiyModal, setSubspecialiyModal] = useState(false);

    const [modal, setModal] = useState(false);
    const [nextLocation, setNextLocation] = useState('');
    const [shouldBlockNavigation, setShouldBlockNavigation] = useState(true);

    let [loc, setLoc] = useState('/');
    let location = useLocation();

    React.useEffect(() => {
        setLoc(location.pathname);
    }, [location]);

    const handleBlockedNavigation = (next) => {
        if (!shouldBlockNavigation) return true;
        setModal(true);
        setNextLocation(next);
        return false;
    }

    return (
        <>
        <div className="h-full w-full rounded-3xl bg-white flex flex-row">
            <div className="flex mx-auto justify-center mt-10 mb-12 learn-page">

                    <Router history={history}>
                        <Switch>
                            
                            <Route path='/exam' exact component={Settings}/>
                            <Route path='/exam/questions' exact component={Questions} />
                            <Route path='/exam/score' exact component={FinalScreen}/>
                            
                        </Switch>
                    </Router>

                </div>
            </div>
            
        
        </>
    );
}

export default WrittenExam;