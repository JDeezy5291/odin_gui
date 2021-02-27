// import React, { Component } from "react";
// import FormDetails from "./FormDetails";

// export class Home extends Component {
//     state = {
//         step: 1,
//         email: "",
//         password: ""
//     }

//     //proceed to next step
//     nextStep = () => {
//         const { step } = this.state
//         this.setState({
//             step: step + 1
//         })
//     }

//     // go back to previous step
//     prevStep = () => {
//         const { step } = this.state
//         this.setState({
//             step: step - 1
//         })
//     }

//     // handles fields change
//     handleChange = (input) => (e) => {
//         this.setState({ [input]: e.target.value })
//     }

//     render() {
//         const { step } = this.state
//         const { email, password } = this.state
//         const values = { email, password }
//         switch(step) {
//             case 1:
//                 return (
//                     <FormDetails 
//                         nextStep={this.nextStep}
//                         handleChange={this.handleChange}
//                         values={values}
//                     />
//                 )
//             case 2:
//                 return (
//                     <h1>Confirm</h1>
//                 )
//             default:
//                 return (
//                     <h1>Failed to login</h1>
//                 )
//         }
//     }
// }

// export default Home