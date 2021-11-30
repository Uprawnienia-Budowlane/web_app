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

    return (
        <>
            <ul className="nav-bar-admin-list">
            <li><img src={MenuSelectedIcon}/><Link to={"/panel-administratora/"} ><HomeIcon/>Strona główna</Link></li>
            <li><Link to={"/panel-administratora/zarzadzanie-uzytkownikami"} ><HomeIcon/>Użytkownicy</Link></li>
            <li><Link to={"/"} ><HomeIcon/>Statystyki</Link></li>
            <li><Link to={"/"} ><HomeIcon/>Zarządzenie treścią</Link></li>
            <li><Link to={"/"} ><HomeIcon/>Zarządzenie stroną</Link></li>
            <li><Link to={"/"} ><ShoppingCartIcon/>Zarządzaj sklepem</Link></li>
            <li><Link to={"/"} ><HomeIcon/>Baza pytań</Link></li>
            <li><Link to={"/"} ><HomeIcon/>Licencje</Link></li>
            <li><Link to={"/"} ><HomeIcon/>Wyślij powiadomienie</Link></li>
            <li><Link to={"/"} ><HomeIcon/>Ustawienia</Link></li>
            </ul>
        </>
    )
}

export default AdminNavbar
