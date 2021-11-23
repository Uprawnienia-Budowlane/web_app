import React, {useState} from "react";
import {BookIcon, ChartIcon, HeartIcon, HomeIcon, ListIcon, MessageIcon, PenIcon, ShoppingCartIcon} from "./Icons";
import {Link, Route, Switch, useLocation} from "react-router-dom";
import MenuItem from "./components/MenuItem";
import Profile from "./Profile";
import Settings from "./Settings";
import Main from "./Main";
import NavBar from "./components/NavBar";
import Shop from "./Shop-complete/Shop";
import Acts from "./Acts";
import ExamStats from "./ExamStats";
import OralExam from "./OralExam";
import FavoriteQuestions from "./FavoriteQuestions";
import Specialty from "./Specialty";
import LearnMode from "./Learn-mode-complete/LearnMode";
import ChooseMode from "./ChooseMode";
import WrittenExam from "./WrittenExam";
import WrittenExamEnd from "./WrittenExamEnd";
import Licenses from "./Licenses";
import ActMode from "./ActMode";
import firebase from "./firebase";
import licenseModel from './models/License';

const Desktop = () => {
    let [loc, setLoc] = useState('/');
    let location = useLocation();

    React.useEffect(() => {
        setLoc(location.pathname);
    }, [location]);

    const { loading, error, ...result } = licenseModel.useGetPopulated();
    if(!loading ) console.log(result);

    return (<div className="h-full w-full flex flex-col max-w-screen-3xl" style={{maxWidth: 1650}}>
            <NavBar/>

            <div className="flex flex-row mt-10 mb-10">
                <div className="hidden md:flex mdd:flex-col mt-8 ml-3 w-28">
                    <div className="mx-auto flex flex-col space-y-12 2xl:space-y-16">
                        <Link to="/"> <MenuItem icon={HomeIcon} active={loc === '/'}/></Link>
                        <Link to="/speciality"> <MenuItem icon={ListIcon} active={loc === '/speciality'}/></Link>
                        <Link to="/written"> <MenuItem icon={PenIcon} active={loc === '/written'}/></Link>
                        <Link to="/oral"> <MenuItem icon={MessageIcon} active={loc === '/oral'}/></Link>
                        <Link to="/acts"> <MenuItem icon={BookIcon} active={loc === '/acts'}/></Link>
                        <Link to="/stats"> <MenuItem icon={ChartIcon} active={loc === '/stats'}/></Link>
                        <Link to="/favorite"> <MenuItem icon={HeartIcon} active={loc === '/favorite'}/></Link>
                        <Link to="/shop"> <MenuItem icon={ShoppingCartIcon} active={loc === '/shop'}/></Link>
                    </div>
                </div>

                <div className="h-full w-full mx-4 md:pl-5 md:mr-12" >
                    <Switch>
                        <Route exact path="/">
                            <Main/>
                        </Route>
                        <Route exact path="/speciality">
                            <Specialty/>
                        </Route>
                        <Route exact path="/written">
                            <ChooseMode/>
                        </Route>
                        <Route exact path="/exam">
                            <WrittenExam/>
                        </Route>
                        <Route exact path="/exam-end">
                            <WrittenExamEnd/>
                        </Route>
                        <Route exact path={["/learn", "/learn/questions", "/learn/score"]} >
                            <LearnMode/>
                        </Route>
                        <Route exact path="/oral">
                            <OralExam/>
                        </Route>
                        <Route exact path="/acts">
                            <Acts/>
                        </Route>
                        <Route exact path="/stats">
                            <ExamStats/>
                        </Route>
                        <Route exact path="/favorite">
                            <FavoriteQuestions/>
                        </Route>
                        <Route exact path={["/shop", "/shop/checkout"]}>
                            <Shop/>
                        </Route>

                        <Route exact path="/settings">
                            <Settings/>
                        </Route>
                        <Route exact path="/profile">
                            <Profile/>
                        </Route>
                        <Route exact path="/licenses">
                            <ActMode/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
};

export default Desktop;