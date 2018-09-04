import * as React from 'react';
import { handleFormSubmit } from '../../util/form-utils';

interface ContactPageFormProps {}

interface ContactPageFormState {
  submitted: boolean;
  [key: string]: any;
}

export class ContactPageForm extends React.Component<
  ContactPageFormProps,
  ContactPageFormState
> {
  constructor(props: ContactPageFormProps) {
    super(props);

    this.state = {
      submitted: false,
      name: '',
      email: '',
      message: '',
    };
  }

  public handleChange(e: any) {
    this.setState({ [e.target.name]: e.target.value });
  }

  public handleSubmit(event: React.FormEvent<EventTarget>) {
    handleFormSubmit(event, this.state).then(() => {
      this.setState({ submitted: true });
    });
  }

  public render() {
    return (
      <div>
        {this.state.submitted && (
          <div>Thank you. We will get back to you shortly.</div>
        )}

        {!this.state.submitted && (
          <form
            name="contact-page-form"
            method="post"
            onSubmit={e => this.handleSubmit(e)}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact-page-form" />

            <div className="single-input">
              <label>* Name</label>
              <input
                type="text"
                placeholder="Type your name here"
                name="name"
                required
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="single-input">
              <label>* Email</label>
              <input
                type="email"
                placeholder="How to contact you back"
                name="email"
                required
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="single-input">
              <label>* Message</label>
              <textarea
                placeholder="Type something"
                name="message"
                required
                onChange={e => this.handleChange(e)}
              />
            </div>

            <div data-netlify-recaptcha />
            <input
              className="invisible"
              name="bot-field"
              onChange={e => this.handleChange(e)}
            />

            <input
              type="submit"
              value="Get request"
              className="theme-solid-button theme-button"
            />
          </form>
        )}
      </div>
    );
  }
}
