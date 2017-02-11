let React = require('react');


//without props - stateless component
// let Person = function() {
//     let name = 'Derek Zoolander';
//     let imageUrl = 'https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg';
//     let job = 'Male model';
//     return (
//         <div className="person">
//         <div className="person-name">{name}</div>
//         <img className="person-img" src={imageUrl} />
//         <div className="person-job">
//         {job}
//         </div>
//         </div>
//     );
// };

//with props - stateless component
// let Person = function(props) {
//     return (
//         <div className="person">
//             <div className="person-name">{props.name}</div>
//             <img className="person-img" src={props.imageUrl} />
//             <div className="person-job">
//                 {props.job}
//             </div>
//         </div>
//     );
// };
//
// Person.defaultProps = {
//     imageUrl: 'http://www.gravatar.com/avatar/?d=identicon'
// };

//stateful component with props and state
let Person = React.createClass({
    getInitialState: function() {
        return {
            highlight: false
        };
    },
    onClick: function() {
        this.setState({
            highlight: !this.state.highlight
        });
    },
    render: function() {
        let classes = 'person ' + (this.state.highlight ? 'highlight': '');
        return (
            <div className={classes} onClick={this.onClick}>
                <div className="person-name">{this.props.name}</div>
                <img className="person-img" src={this.props.imageUrl} />
                <div className="person-job">
                    {this.props.job}
                </div>
            </div>
        );
    }
});

module.exports = Person;