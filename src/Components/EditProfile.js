import React, { Component } from 'react'
import { Form, Header, Icon } from 'semantic-ui-react'
import {connect} from 'react-redux'
import { updateUser } from "../Actions/actions.js";
import DeleteUser from "./DeleteUser";
import NavBar from "./NavBar"

class EditProfile extends Component {
  state = {displayName: "", password: "", about:"",}
  
  handleChange = (e, { value }) => this.setState({ [e.target.name]: value })
  handleSubmit = (e, { value }) => {this.props.updateUser({...this.state})}
  
  render() {
    
    return (
      <Form>
      <NavBar />
        <Header as='h2' color='blue' icon>
    <Icon name='settings' />
   Edit your profile!
    <Header.Subheader>Change your display name, password and update all the wonderful facts about you!</Header.Subheader>
  </Header>
  
        <Form.Group widths='equal'>
          <Form.Input onChange={this.handleChange} name="displayName" fluid label='display name' placeholder='display name' />
          <Form.Input onChange={this.handleChange} name="password" fluid label='password' placeholder='password' />
          <Form.TextArea onChange={this.handleChange} name="about" label='About' placeholder='Tell us more about you...' />
          <Form.Button color='blue' onClick={this.handleSubmit}>Confirm Changes</Form.Button>
          <DeleteUser />
        </Form.Group>

      </Form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (userData) => dispatch(updateUser(userData))
    }
}
 const mapStateToProps = (state) => {
     return{
        token: state.authentication.token
     }
 }
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);