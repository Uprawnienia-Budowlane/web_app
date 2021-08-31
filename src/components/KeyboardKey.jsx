const KeyboardKey = (props) => <div
    className={"min-w-12 h-12 px-3 cursor-pointer bg-gradient-to-r " + (props.pressed === true ? 'from-blueGray-100 to-gray-200' : 'from-blueGray-100 to-gray-50') + " rounded shadow flex items-center justify-center text-lg text-medium font-mono"}>
    {props.text}
</div>;

export default KeyboardKey;