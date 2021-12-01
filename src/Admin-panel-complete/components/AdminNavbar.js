import React, {
    useState, 
} from 'react'
import { Link } from 'react-router-dom';
import { ShareIcon, 
    QuestionMarkInCirceIcon, 
    BlueImgIcon, 
    ClockIcon, 
    BookIcon, 
    ChartIcon, 
    HeartIcon, 
    HomeIcon, 
    ListIcon, 
    MessageIcon, 
    PenIcon, 
    ShoppingCartIcon,
    SettingsIcon,
    ThreeInOneIcon
    } from "../../Icons";
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuSelectedIcon from '../Images/menu_selected_icon.svg'
import { useLocation } from 'react-router';

const AdminNavbar = () => {

    let [loc, setLoc] = useState('/');
    let location = useLocation();

    React.useEffect(() => {
        setLoc(location.pathname);
    }, [location]);

    /*const { loading, error, ...result } = licenseModel.useGetPopulated();*/
    /*if(!loading ) console.log(result);*/

    const Selected_menu_Option = document.getElementsByClassName('')

    return (
        <>
            <ul className="nav-bar-admin-list">
            <li><img src={MenuSelectedIcon}/><Link to={"/panel-administratora/"} ><div className="ico_menu home__"></div>Strona główna</Link></li>
            <li><img src={MenuSelectedIcon}/><Link to={"/panel-administratora/zarzadzanie-uzytkownikami"} ><div className="ico_menu users__"></div>Użytkownicy</Link></li>
            <li><img src={MenuSelectedIcon}/><Link to={"/"} ><div className="ico_menu stats__"></div>Statystyki</Link></li>
            <li><img src={MenuSelectedIcon}/><Link to={"/"} ><div className="ico_menu faq__"></div>Zarządzenie treścią</Link></li>
            <li><img src={MenuSelectedIcon}/><Link to={"/"} ><div className="ico_menu faq__"></div>Zarządzenie stroną</Link></li>
            <li><img src={MenuSelectedIcon}/><a href="https://dashboard.chec.io/"><div className="ico_menu shop__"></div>Zarządzaj sklepem</a></li>
            <li><img src={MenuSelectedIcon}/><Link to={"/panel-administratora/baza-pytan"} ><div className="ico_menu faq__"></div>Baza pytań</Link></li>
            <li><img src={MenuSelectedIcon}/><Link to={"/"} ><div className="ico_menu license__"></div>Licencje</Link></li>
            <li><img src={MenuSelectedIcon}/><Link to={"/"} ><div className="ico_menu message__"></div>Wyślij powiadomienie</Link></li>
            <li><img src={MenuSelectedIcon}/><Link to={"/"} ><div className="ico_menu setting__"></div>Ustawienia</Link></li>
            </ul>
        </>
    )
}

export default AdminNavbar
