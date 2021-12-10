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
import OralExam from './Learn-Oral-Exam-complete/OralExam'
import WrittenExam from './Exam-mode-complete/WrittenExam'
import FavoriteQuestions from "./FavoriteQuestions";
import Specialty from "./Specialty";
import LearnMode from "./Learn-mode-complete/LearnMode";
import ChooseMode from "./ChooseMode";
import Licenses from "./Licenses";
import ActMode from "./ActMode";
import licenseModel from './models/License';
import { lightTheme, darkTheme, GlobalStyles } from './theme'
import { ThemeProvider } from "styled-components";

const Desktop = () => {
    let [loc, setLoc] = useState('/');
    let location = useLocation();

    React.useEffect(() => {
        setLoc(location.pathname);
    }, [location]);

    const { loading, error, ...result } = licenseModel.useGetPopulated();
    if(!loading ) console.log(result);

    const [theme, setTheme] = useState('light')

    const ThemeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light') 
    }

    return (
    <>
    <NavBar/>
    <div className="h-full w-full flex flex-col max-w-screen-3xl" style={{maxWidth: 1650}}>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles/>
    <input className="change-mode-btn mobile-fix-btn" onClick={() => ThemeToggler()} type="checkbox"/>
            <div className="flex flex-row mt-10 mb-10 css-margin-bottom-mobile">
                <div className="hidden md:flex mdd:flex-col mt-8 ml-3 w-28 mobile-navigation-md-fix">
                    <div className="mx-auto flex flex-col space-y-12 2xl:space-y-16 mobile-navigation" style={{ marginTop: '100px' }}>
                        <Link to="/" style={{ marginTop: '42px'}}> <MenuItem icon={HomeIcon} active={loc === '/'}/></Link>
                        <Link to="/speciality" style={{ alignSelf: 'center' }}> <MenuItem icon={ListIcon} active={loc === '/speciality'}/></Link>
                        <Link class="mobile-hide-option" style={{ alignSelf: 'center' }} to="/written"> <MenuItem icon={PenIcon} active={loc === '/written'}/></Link>
                        <Link class="mobile-hide-option" style={{ alignSelf: 'center' }} to="/oral"> <MenuItem icon={MessageIcon} active={loc === '/oral'}/></Link>
                        <Link class="mobile-hide-option" style={{ alignSelf: 'center' }} to="/acts"> <MenuItem icon={BookIcon} active={loc === '/acts'}/></Link>
                        <Link to="/stats" style={{ alignSelf: 'center' }}> <MenuItem icon={ChartIcon} active={loc === '/stats'}/></Link>
                        <Link class="mobile-hide-option" style={{ alignSelf: 'center' }} to="/favorite"> <MenuItem icon={HeartIcon} active={loc === '/favorite'}/></Link>
                        <Link to="/shop" className="desktop-fix-icon" style={{ alignSelf: 'center' }}> <MenuItem icon={ShoppingCartIcon} active={loc === '/shop'}/></Link>
                    </div>
                </div>
                
                <div className="h-full w-full mx-4 md:pl-5 md:mr-12 desktop-css-fix">
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
                        <Route exact path={["/exam", "/exam/questions", "/exam/score"]}>
                            <WrittenExam/>
                        </Route>
                        <Route exact path={["/learn", "/learn/questions", "/learn/score"]} >
                            <LearnMode/>
                        </Route>
                        <Route exact path="/oral">
                            <OralExam/>
                        </Route>plec: 'nie_ustawiono',
                        <Route exact path={["/acts"]}>
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
                        <Route exact path="/act-mode">
                            <ActMode/>
                        </Route>
                        <Route exact path="/licenses">
                            <Licenses/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </ThemeProvider>
        </div>
        </>
    )
};

export default Desktop;