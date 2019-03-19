import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators }  from '../store/Contact';

class ContactForm extends React.Component {
  componentDidMount() {
    const {requestContact} = this.props;
    requestContact();
  }
  render() {
    const { handleSubmit } = this.props;
    return <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
  }
}


ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm);

ContactForm = connect(
  state => ({
    initialValues: state.contact.data // pull initial values from account reducer
  }),
  //{ load: loadAccount }               // bind account loading action creator
  dispatch => bindActionCreators(actionCreators, dispatch)
)(ContactForm)

export default ContactForm