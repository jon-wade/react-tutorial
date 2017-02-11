let React = require('react');
let Person = require('./person');

//stateless component
// let PersonList = function() {
//
//     let people = [];
//     for (let i=0; i<5; i++) {
//         people.push(<Person />);
//     }
//
//     return (
//         <div className="person-list">
//             {people}
//         </div>
//     );
// };

//stateful component
// let PersonList = React.createClass({
//     render: function() {
//         let people = [];
//         for (let i=0; i<5; i++) {
//             people.push(<Person />);
//         }
//         return (
//             <div className="person-list">
//                 {people}
//             </div>
//         );
//     }
// });

//passing props to a component
let PersonList = function() {
    return (
        <div className="person-list">
            <Person name="Derek Zoolander"
                    imageUrl="https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg"
                    job="Male model" />
            <Person name="Donald Knuth"
                    imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
                    job="Clever chap" />
        </div>
    );
};


module.exports = PersonList;