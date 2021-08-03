const MenuItem = (props) => <div
    className={(props.active === true ? 'text-blue-500' : 'text-black') + ' hover:text-blue-500 cursor-pointer'}>
    {props.icon()}
</div>;

export default MenuItem;