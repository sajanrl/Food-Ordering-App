import UserContext from "../utils/userContext";
import User from "./User";
import UserClass from "./UserClass";
// import React from "react";
import { Component } from "react";

class About extends Component {

    constructor(props) {
        super(props)

        // console.log("Parent Constructor");
    }

    componentDidMount() {
        // console.log("Parent component did mount");
        
    }


    render() {
        // console.log("Parent render");
        return (
            <div>
                <h1>About Us</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is my first program of react</h2>
                {/* <User name={"SAJAN (functional)" } location={"Ylm"} /> */}
                <UserClass name={"SAJAN (class)"} location={"Ylm (class)"}/> 
                {/* <UserClass name={"Upma (class)"} location={"Kalepalli (class)"}/>  */}
            </div>
        );
    }
}

export default About; 

// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h2>This is my first program of react</h2>
//             {/* <User name={"SAJAN (functional)" } location={"Ylm"} /> */}
//             <UserClass name={"SAJAN (class)"} location={"Ylm (class)"}/> 
//         </div>
//     );
// };

