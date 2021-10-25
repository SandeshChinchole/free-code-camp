const Items = (props) => {
    return(
        <div>
            <h1>The current quantity of items in the cart is: {props.quantity}</h1>
        </div>
    );
};

Items.defaultProps = {
    quantity: 0
};

class ShoppingCart extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Items quantity={10}/>
        );
    }
};