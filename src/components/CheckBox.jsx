import React, {useState} from "react";
import {CheckmarkIcon} from "../Icons";

const CheckBox = (props) => {
    const [checked, setChecked] = useState(props.checked | false);
    return (<div className="mx-8 my-3 bg-blue-300 h-10 w-10 p-1 rounded-md cursor-pointer" onClick={() => {
        setChecked(!checked);
        props.onChecked(!checked);
    }}>
        <div className={"h-8 w-8 " + (checked ? '' : 'opacity-0')}>
            <CheckmarkIcon/>
        </div>
    </div>);
};

export default CheckBox;