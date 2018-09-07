import * as React from 'react';
import { Helmet } from 'react-helmet';
import { InnerBanner } from '../components/global/inner-banner/inner-banner';

//import '../../css/privacy.css';

function PrivacyPolicy() {
  const pageTitle = `Privacy Policy | NativeScript Training`;

  return (
    <div className="wrapper">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <InnerBanner
        title="Privacy Policy"
        subtitle=""
        bannerImg="/images/contact/banner.jpg"
      />

      <div className="contact-page">
        <div className="container">
          <div className="contact-form-wrapper">
            <div className="row">
              <div className="col-md-12 col-xs-12" />
              <h1>NativeScript Training Privacy Policy</h1>

              <div className="article">
                <p>
                  This Privacy Policy governs the manner in which the website
                  collects, uses, maintains and discloses information collected
                  from users (each, a ‘User’) of the website (‘Site’). This
                  privacy policy applies to the Site and all products and
                  services offered by company.
                </p>
                <h3 id="personal-identification-information">
                  Personal identification information
                </h3>
                <p>
                  We may collect personal identification information from Users
                  in a variety of ways, including, but not limited to, when
                  Users visit our site, register on the site, subscribe to the
                  newsletter, and in connection with other activities, services,
                  features or resources we make available on our Site. Users may
                  be asked for, as appropriate, email address. Users may,
                  however, visit our Site anonymously. We will collect personal
                  identification information from Users only if they voluntarily
                  submit such information to us. Users can always refuse to
                  supply personally identification information, except that it
                  may prevent them from engaging in certain Site related
                  activities.
                </p>
                <h3 id="non-personal-identification-information">
                  Non-personal identification information
                </h3>
                <p>
                  We may collect non-personal identification information about
                  Users whenever they interact with our Site. Non-personal
                  identification information may include the browser name, the
                  type of computer and technical information about Users means
                  of connection to our Site, such as the operating system and
                  the Internet service providers utilized and other similar
                  information.
                </p>
                <h3 id="web-browser-cookies">Web browser cookies</h3>
                <p>
                  Our Site may use ‘cookies’ to enhance User experience. User’s
                  web browser places cookies on their hard drive for
                  record-keeping purposes and sometimes to track information
                  about them. User may choose to set their web browser to refuse
                  cookies, or to alert you when cookies are being sent. If they
                  do so, note that some parts of the Site may not function
                  properly.
                </p>
                <h3 id="how-we-use-collected-information">
                  How we use collected information
                </h3>
                <p>
                  Company may collect and use Users personal information for the
                  following purposes:
                </p>
                <ul>
                  <li>
                    <h4 id="to-improve-customer-service">
                      To improve customer service
                    </h4>
                    <p>
                      Information you provide helps us respond to your customer
                      service requests and support needs more efficiently.
                    </p>
                  </li>
                  <li>
                    <h4 id="to-personalize-user-experience">
                      To personalize user experience
                    </h4>
                    <p>
                      We may use information in the aggregate to understand how
                      our Users as a group use the services and resources
                      provided on our Site.
                    </p>
                  </li>
                  <li>
                    <h4 id="to-send-periodic-emails">
                      To send periodic emails
                    </h4>
                    <p>
                      We may use the email address to send User information and
                      updates pertaining to their order. It may also be used to
                      respond to their inquiries, questions, and/or other
                      requests. If User decides to opt-in to our mailing list,
                      they will receive emails that may include company news,
                      updates, related product or service information, etc. If
                      at any time the User would like to unsubscribe from
                      receiving future emails, we include detailed unsubscribe
                      instructions at the bottom of each email or User may
                      contact us via our Site.
                    </p>
                  </li>
                </ul>
                <h3 id="how-we-protect-your-information">
                  How we protect your information
                </h3>
                <p>
                  We adopt appropriate data collection, storage and processing
                  practices and security measures to protect against
                  unauthorized access, alteration, disclosure or destruction of
                  your personal information, username, password, transaction
                  information and data stored on our Site.
                </p>
                <h3 id="sharing-your-personal-information">
                  Sharing your personal information
                </h3>
                <p>
                  We do not sell, trade, or rent Users personal identification
                  information to others. We may share generic aggregated
                  demographic information not linked to any personal
                  identification information regarding visitors and users with
                  our business partners, trusted affiliates and advertisers for
                  the purposes outlined above.
                </p>
                <h3 id="third-party-websites">Third party websites</h3>
                <p>
                  Users may find advertising or other content on our Site that
                  link to the sites and services of our partners, suppliers,
                  advertisers, sponsors, licensors and other third parties. We
                  do not control the content or links that appear on these sites
                  and are not responsible for the practices employed by websites
                  linked to or from our Site. In addition, these sites or
                  services, including their content and links, may be constantly
                  changing. These sites and services may have their own privacy
                  policies and customer service policies. Browsing and
                  interaction on any other website, including websites which
                  have a link to our Site, is subject to that website’s own
                  terms and policies.
                </p>
                <h3 id="changes-to-this-privacy-policy">
                  Changes to this privacy policy
                </h3>
                <p>
                  Company has the discretion to update this privacy policy at
                  any time. When we do, we will revise the updated date at the
                  bottom of this page. We encourage Users to frequently check
                  this page for any changes to stay informed about how we are
                  helping to protect the personal information we collect. You
                  acknowledge and agree that it is your responsibility to review
                  this privacy policy periodically and become aware of
                  modifications.
                </p>
                <h3 id="your-acceptance-of-these-terms">
                  Your acceptance of these terms
                </h3>
                <p>
                  By using this Site, you signify your acceptance of this
                  policy. If you do not agree to this policy, please do not use
                  our Site. Your continued use of the Site following the posting
                  of changes to this policy will be deemed your acceptance of
                  those changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
