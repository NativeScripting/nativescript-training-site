import * as React from 'react';
import { handleFormSubmit } from '../../util/form-utils';

interface OfferingDetailSidebarOnsiteRequestProps {}

interface OfferingDetailSidebarOnsiteRequestState {
  submitted: boolean;
}

export class OfferingDetailSidebarOnsiteRequestBox extends React.Component<
  OfferingDetailSidebarOnsiteRequestProps,
  OfferingDetailSidebarOnsiteRequestState
> {
  constructor(props: OfferingDetailSidebarOnsiteRequestProps) {
    super(props);

    this.state = {
      submitted: false,
    };
  }

  public handleSubmit(event: React.FormEvent<EventTarget>) {
    handleFormSubmit(event).then(() => {
      this.setState({ submitted: true });
    });
  }

  /*
  public handleSubmit(event: React.FormEvent<EventTarget>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    for (let name of (data as any).keys()) {
      const input = form.elements[name];
      const parserName = (input as any).dataset.parse;

      if (parserName) {
        const parser = inputParsers[parserName];
        const parsedValue = parser(data.get(name));
        data.set(name, parsedValue);
      }
    }

    fetch(form.action, {
      method: 'POST',
      body: data,
    }).then(() => {
      this.setState({ submitted: true });
    });
  }
  */

  public render() {
    return (
      <div className="sidebar-widget sidebar-contact blog-details-content">
        <h5>Onsite request form</h5>

        {this.state.submitted && (
          <div>Thank you. We will get back to you shortly.</div>
        )}

        {!this.state.submitted && (
          <div className="comment-form ">
            <form
              name="private-request-sidebar"
              onSubmit={e => this.handleSubmit(e)}
              data-netlify="true"
            >
              <div className="">
                <div className="">
                  <input type="text" placeholder="Name" name="name" required />
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
                <div className="">
                  <textarea placeholder="Message" name="message" required />
                </div>
                <div data-netlify-recaptcha />
              </div>
              <div>
                <button className="theme-solid-button">Submit</button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}
