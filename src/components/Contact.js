  import React from 'react';
  import Rainbow from '../hoc/Rainbow'

  class Contact extends React.Component {
    render() {
      return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
        </div>
    )

    }
  }

  export default Rainbow(Contact);
