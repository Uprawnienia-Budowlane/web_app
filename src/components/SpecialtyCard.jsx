const SpecialtyCard = (props) => <div className="w-48 h-48 bg-blue-500 rounded-3xl flex flex-col px-3 justify-center items-center hover:shadow-lg cursor-pointer transition-shadow duration-200" onClick={() => props.onClick(props.title)}>
    <div className="mx-auto mb-3 h-20 w-20 speciality-change">{props.icon()}</div>
    <p className="text-white text-center font-medium">{props.title}</p>
</div>;

export default SpecialtyCard;