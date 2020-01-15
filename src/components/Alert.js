import React, { Component, Fragment } from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

class AlertComponent extends Component {
    //const [show, setShow] = useState(true);

    state = {
        show: true
    }

    openShow = () => {
        this.setState({show:true})
    }

    closeShow = () => {
        this.setState({show:false})
    }

    render() {

    return (
      <Fragment>
        <Alert show={this.state.show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
            fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => this.closeShow()} variant="outline-success">
              Close me ya'll!
            </Button>
          </div>
        </Alert>
  
        {!this.state.show && <Button onClick={() => this.openShow()}>Show Alert</Button>}
      </Fragment>
    );
    }       
}

export default AlertComponent