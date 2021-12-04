/*import {Heart2Icon, HeartFillIcon} from "../Icons";
import {useState} from "react";

const FavoriteQuestion = (props) => {
    const [favorite, setFavorite] = useState(false);

    return (<tr className="border-b border-opacity-50">
        <td className="text-lg text-center px-5">{props.id}</td>
        <td className="text-sm p-4 overflow-ellipsis">{props.question}</td>
        <td className="text-sm pr-4 py-4 text-green-600 overflow-ellipsis">Wiat o powierzchni zabudowy do 50 m2, sytuowanych na działce, na której znajduje się budynek mieszkalny, lub przeznaczonej pod budownictwo mieszkaniowe, przy czym łączna liczba tych wiat na działce nie może przekraczać dwóch na każde 1000 m2 powierzchni działki </td>
        <td>
            <div className="pr-4 ml-auto my-auto cursor-pointer"
                 onClick={() => setFavorite(!favorite)}>{favorite ? HeartFillIcon() : Heart2Icon()}</div>
        </td>
    </tr>);
}

export default FavoriteQuestion;*/