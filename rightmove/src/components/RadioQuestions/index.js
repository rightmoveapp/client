import React from "react";
import "./style.css";

const RadioQuestions = (props) => {
    return (
        <>
            <label className="question">{props.questionText}</label>
            <input id={props.questionId} type={props.questionType} className="Rectangle" />
            {props.questionChoices[0].map(questionChoice => (
                <p key={questionChoice.id}>
                    <label>
                        <input
                            key={questionChoice.id}
                            value={questionChoice.choice_text}
                            type={questionChoice.input_type}
                            // onChange={() => this.props.handleChange(questionChoice.choice_text)}
                            onChange={(event) => props.handleChange(event)}
                            name={props.name}
                            questionid={props.questionId}
                        />
                        <span className="-Input-Text">{questionChoice.choice_text}</span>
                    </label>
                </p>

            ))}
        </>
    );
}

export default RadioQuestions;



// class RadioQuestions extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             checked: false
//         }
//     }

//     onClick = () => {
//         this.setState({
//             checked: !this.state.checked
//         })
//     }

//     render() {
        
//         return (
//                 <>
//                     <label className="question">{this.props.questionText}</label>
//                     <input id={this.props.questionId} type={this.props.questionType} className="validate Rectangle" />
//                     {this.props.questionChoices[0].map(questionChoice => (
//                         <p>
//                             <label>
//                                 <input
//                                     key={questionChoice.id}
//                                     value={questionChoice.choice_text}
//                                     type={questionChoice.input_type}
                                    
//                                     // onChange={() => this.props.handleChange(questionChoice.choice_text)}
//                                     onChange={(event) => this.props.handleChange(event)}
//                                     name={this.props.name}
//                                 />
//                                 <span className="-Input-Text">{questionChoice.choice_text}</span>
//                             </label>
//                         </p>
        
//                     ))}
//                 </>
//                 );
//     }
// }
// props.choiceState.indexOf(questionChoice.choice_text) != -1
