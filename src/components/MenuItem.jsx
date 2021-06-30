import React from "react";

class MenuItem extends React.PureComponent {
    render() {
        return <div className={(this.props.active === true ? 'text-blue-600' : 'text-black') + ' hover:text-blue-600 cursor-pointer'}>
            {this.props.icon()}
        </div>;
    }
}

export default MenuItem;