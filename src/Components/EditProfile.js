import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import {connect} from 'react-redux'
import { updateUser } from "../Actions/actions.js";

class EditProfile extends Component {
  state = {displayName: "", password: "", about:"",}

  handleChange = (e, { value }) => this.setState({ [e.target.name]: value })
  handleSubmit = (e, { value }) => {this.props.updateUser({...this.state})}

  render() {
 
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input onChange={this.handleChange} name="displayName" fluid label='display name' placeholder='display name' />
          <Form.Input onChange={this.handleChange} name="password" fluid label='password' placeholder='password' />
          <Form.TextArea onChange={this.handleChange} name="about" label='About' placeholder='Tell us more about you...' />
          <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
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