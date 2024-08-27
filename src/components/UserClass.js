import React from "react";

class UserClass extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            // count : 0
            userInfo: {
                name : "Dummy",
                location : "Default",
                // avatar_url: "dummy_URL"
            },
        };
        //console.log(this.props.name+"Child Constructor");
        

        // console.log(props);
        
    }

    async componentDidMount() {
        //console.log(this.props.name+  "Child component did mount");
    // API call   
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        // console.log(json);

        this.setState({
            userInfo:json,
        })
        
    }

    componentDidUpdate() {
        // console.log("Component Did update");
    }

    componentWillUnmount() {
        // console.log("Component will unmount");
        
    }

    render () {

        //console.log(this.props.name+"Child render");
        const {name, location, avatar_url } = this.state.userInfo;
        // debugger;
        return (
            <div className="user-card">
                {/* <h1>Count : {count}</h1> */}
                {/* <button onClick={() =  */}
                {/* <h1>Count2 : {count2}</h1> */}
            <img src={avatar_url}></img>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>X handle : 4zmu7h</h4>
        </div>
        );
    };
};

export default UserClass;



// ------Mounting-------

// - constructor (dummy data)
// - Render (dummy data)  <HTML dummy>
// - Component Did Mount 
//     <API call>
//     <this.setState>


// -----Update--------

// -    Render (with Api data)
//         <html is loaded with new API data>
//     Component Did Update

