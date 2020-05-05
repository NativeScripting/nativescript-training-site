import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { GridRow } from '../../../layouts/grid2/grid-row';
import { GridColumn } from '../../../layouts/grid2/grid-column';
// import ActionButton from '../../ActionButton/ActionButton';

const BookingWrapper = styled.div`
  margin-top: 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 200px;

  @media only screen and (max-width: 768px) {
    justify-content: flex-start;
    align-items: center;
  }
`;
const AvatarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 200px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: flex-end;
  }
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  height: 150px;
`;

const ActionButtonWrapper = styled.div`
  margin-top: 20px;
  width: 200px;
`;

interface InstantBookingProps {
  style?: React.CSSProperties;
}

export const InstantBooking: React.StatelessComponent<InstantBookingProps> = (
  props: InstantBookingProps
) => {
  // This combines the incoming style with the debug border
  const style = { ...(props.style ? props.style : {}) };

  return (
    <BookingWrapper>
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <AvatarWrapper>
            <AvatarImg src="/img/alex_ziskind.png" />
          </AvatarWrapper>
        </div>
        <div className="col-md-6 col-xs-12">
          <ContentWrapper>
            <h4>Instantly book meeting with Alex</h4>
            <ActionButtonWrapper>
              <a
                className="theme-solid-button theme-button"
                href="https://calendly.com/nuvious"
              >
                Choose Time
              </a>
            </ActionButtonWrapper>
          </ContentWrapper>
        </div>
      </div>
    </BookingWrapper>
  );
};
