import React, {Component} from 'react';
import {Button, Form, FormGroup, Input} from "reactstrap";
import {connect} from 'react-redux';
import {newRecord, saveRecord} from '../actions/recordsActions';
import {NavLink, Redirect} from "react-router-dom";


class ControlForm extends Component {

  constructor(props) {
    super(props);
    this.state = {  
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({done: false});
    if ((Boolean(nextProps.record) !== Boolean(this.props.isEditModeOn)) &&
      (this.props.isEditModeOn === nextProps.isEditModeOn) ) {
      this.props.toggleMode();
    }
    this.nameInput && (this.nameInput.value = nextProps.record ? nextProps.record.name : '');
    this.usernameInput && (this.usernameInput.value = nextProps.record ? nextProps.record.username : '');
    this.emailInput && (this.emailInput.value = nextProps.record ? nextProps.record.email : '');
  }

  handleSubmit(e){
    e.preventDefault();
    const data = {
      id: this.props.record && this.props.record.id,
      name: this.nameInput.value,
      username: this.usernameInput.value,
      email: this.emailInput.value
    };
    if (this.props.isEditModeOn) {
      this.props.saveRecord(data)
        .then(() => {
          this.props.toggleMode();
          this.setState({done: true});
        });
    } else {
      this.props.newRecord(data);
    }
    this.clearInputs();
  };

  clearInputs() {
    this.nameInput.value = '';
    this.usernameInput.value = '';
    this.emailInput.value = '';
  }

  render() {
    const addButton = <Button onClick={this.handleSubmit} color="primary">Add</Button>;
    const editButtons =
      <div>
        <Button color="success" onClick={this.handleSubmit}>Save</Button>
        <NavLink className='btn btn-danger' to='/'>Cancel</NavLink>
      </div>;
    return (
      <div>
        {this.state.done && <Redirect to='/'/>}
        <div className='form-container'>
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input placeholder="Author" innerRef={nameInput => this.nameInput = nameInput}/>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input placeholder="Isbn" innerRef={usernameInput => this.usernameInput = usernameInput}/>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input placeholder="Caption" innerRef={emailInput => this.emailInput = emailInput}/>
            </FormGroup>
            {this.props.isEditModeOn ? editButtons : addButton}
          </Form>
        </div>
      </div>
    )
  }
}

export default connect(null, {newRecord, saveRecord})(ControlForm);
