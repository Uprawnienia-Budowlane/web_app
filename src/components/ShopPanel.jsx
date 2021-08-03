import {CheckboxCircleIcon, TagIcon} from "../Icons";

const ShopPanel = (props) => <div className="mb-3 rounded-2xl bg-blue-50 flex flex-col w-80" style={{minWidth: '300px'}}>
    <div className="mx-4 mt-8 flex flex-row justify-between">
        <p className="text-blue-500 opacity-60 my-auto">PAKIET</p>
        <div className="my-auto"><TagIcon/></div>
    </div>
    <p className="mx-4 mt-4 text-xl text-blue-500 font-semibold">{props.title}</p>
    <div className="mx-4 mt-2 flex flex-row">
        <p className="text-xl text-blue-500 font-medium">{props.price}</p>
        <p className="ml-2 text-blue-500 opacity-60 my-auto font-medium">/ za sztukę</p>
    </div>
    <p className="mx-4 mt-4 mb-2 overflow-clip text-blue-500 text-sm">{props.description}</p>

    {props.features.map(e => <div className="mx-4 my-2 flex flex-row">
        <div className="mt-1 mb-auto mr-2"><CheckboxCircleIcon/></div>
        <p className="overflow-clip text-blue-500 ">{e}</p>
    </div>)}

    <div className="mx-auto mt-4">{props.image()}</div>
    <button
        className="mx-4 my-6 rounded-2xl border border-blue-500 bg-blue-500 text-white font-medium text-center text-lg py-2 px-4">Zakup
        produkt
    </button>
</div>

export default ShopPanel;