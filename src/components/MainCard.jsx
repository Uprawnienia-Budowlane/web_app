import { useHistory } from "react-router-dom";

const MainCard = (props) => {
    const history = useHistory();
    return (<div
        className="bg-blueGray-100 rounded-3xl flex flex-col hover:bg-blueGray-200 transition-colors duration-200 cursor-pointer" onClick={() => history.push(props.link)}>
        <div className="mx-auto mt-8 mb-4 h-24 w-24">{props.icon()}</div>
        <p className="mb-4 text-blue-500 text-center font-medium">{props.title}</p>
    </div>);
}

export default MainCard;