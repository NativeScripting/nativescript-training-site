import * as React from 'react';
import { Helmet } from 'react-helmet';

import {
    OfferingsJson
} from '../domain/graphql-types';

import { Offering } from '../domain/models';
import { offeringFromOfferingsJson } from '../domain/converters';


interface OfferingTemplateProps {
    data: {
        offeringsConnection: OfferingsJson;
    };
}

interface OfferingTemplateState {
    offering: Offering;
}

class OfferingTemplate extends React.Component<
    OfferingTemplateProps,
    OfferingTemplateState
    > {
    constructor(props: OfferingTemplateProps) {
        super(props);

        this.state = {
            offering: offeringFromOfferingsJson(this.props.data.offeringsConnection)
        };
    }

    public render() {
        const offering = this.state.offering;
        const title = this.props.data.offeringsConnection.title;
        const breadCrumbs = [
            { name: 'All courses', url: '/' },
            { name: 'Course details', url: '' }
        ];

        const pageTitle = `${offering.title} | NativeScripting`;

        return (
            <div className="temp-component">

                <h1>{this.state.offering.title}</h1>

            </div>
        );
    }
}

export const offeringPageQuery = graphql`
  query OfferingPageQuery($offeringId: String) {

    #get current offering
    offeringsConnection: offeringsJson(id: { eq: $offeringId }) {
      id
      title
    }
  }
`;

export default OfferingTemplate;
