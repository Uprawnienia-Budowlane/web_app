import {DownArrow2Icon} from "../Icons";
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

const useOutsideAlerter = (ref, visible, setVisibility) => {
    useEffect(() => {
        const handleClickOutside = event => {
            if (ref.current && !ref.current.contains(event.target) && visible) setVisibility(false);
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref, visible, setVisibility]);
}

const Dropdown = (props) => {
    const [selected, setSelected] = useState(null);
    const [visible, setVisibility] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, visible, setVisibility);

    return (<button
        className="font-medium text-lg w-full relative">
        <div className="px-4 py-3 flex flex-row justify-between hover:bg-blue-50 rounded-2xl border border-blue-500" onClick={() => setVisibility(true)}>
            <p>{selected ? selected : props.name}</p>
            <div className="my-auto">
                <DownArrow2Icon/>
            </div>
        </div>
        <div className={"absolute bg-white rounded-2xl shadow-lg overflow-hidden border border-opacity-50 w-full right-0 mt-2 z-50" + (visible ? '' : ' hidden')} ref={wrapperRef}>
            {props.options.map((e, i) => <div className="block py-3 px-4 border-b font-light hover:bg-gray-50" key={i} onClick={() => {setSelected(e.name);setVisibility(false);}}>{e.name}</div>)}
        </div>
    </button>);
};

export default Dropdown;