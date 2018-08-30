import * as React from 'react';
import { handleFormSubmit } from '../../util/form-utils';

interface OfferingDetailOnsiteRequestFormProps {}

interface OfferingDetailOnsiteRequestFormState {
  submitted: boolean;
  [key: string]: any;
}

export class OfferingDetailOnsiteRequestForm extends React.Component<
  OfferingDetailOnsiteRequestFormProps,
  OfferingDetailOnsiteRequestFormState
> {
  constructor(props: OfferingDetailOnsiteRequestFormProps) {
    super(props);

    this.state = {
      submitted: false,
      name: '',
      subject: '',
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
      <div className="comment-form">
        <h5 className="sub-heading">Onsite training request form</h5>

        {this.state.submitted && (
          <div>Thank you. We will get back to you shortly.</div>
        )}

        {!this.state.submitted && (
          <form
            name="private-request-body"
            method="post"
            onSubmit={e => this.handleSubmit(e)}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input
              type="hidden"
              name="form-name"
              value="private-request-body"
            />

            <div className="row">
              <div className="col-sm-6 col-xs-12 float-right">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  onChange={e => this.handleChange(e)}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                  onChange={e => this.handleChange(e)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div className="col-sm-6 col-xs-12">
                <textarea
                  placeholder="Message"
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
            </div>
            <button className="theme-solid-button">Submit</button>
          </form>
        )}
      </div>
    );
  }
}
