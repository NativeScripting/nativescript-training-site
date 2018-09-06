import * as React from 'react';
import {
  EMAIL_TRAINING_NUVIOUS,
  CONST_PHONE_NUMBER,
} from '../../../constants/constants';

interface SidebarPhoneProps {}

export const SidebarPhone: React.StatelessComponent<SidebarPhoneProps> = (
  props: SidebarPhoneProps
) => {
  const mailToLink = `mailto:${EMAIL_TRAINING_NUVIOUS}?cc=alex@nuvious.com&subject=NativeScript%20Training%20Email`;
  const telLink = `tel:${CONST_PHONE_NUMBER}`;

  return (
    <div className="sidebar-widget sidebar-search">
      <h5>Still have questions?</h5>
      <p>
        Give us a call: <a href={telLink}>+{CONST_PHONE_NUMBER}</a>
      </p>
      <p>
        Email us: <a href={mailToLink}>{EMAIL_TRAINING_NUVIOUS}</a>
      </p>
    </div>
  );
};
