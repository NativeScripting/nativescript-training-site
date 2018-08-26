import * as React from 'react';
import { OfferingsJsonConnection } from '../domain/graphql-types';
import { offeringFromOfferingsJsonEdge } from '../domain/converters';
import { OfferingSummaries } from '../components/offerings/offering-summaries';

interface TrainingPageProps {
  data: {
    offeringsConnection: OfferingsJsonConnection;
  };
}

export default class extends React.Component<TrainingPageProps, any> {
  constructor(props: TrainingPageProps) {
    super(props);
  }

  public render() {
    const offerings = this.props.data.offeringsConnection.edges.map(
      offeringFromOfferingsJsonEdge
    );

    return (
      <div>
        <h1>NativeScript Training Delivery Options</h1>
        <p>NativeScript Training offers technical training using a variety of delivery methods. No matter which option you choose, you will still receive the most in-depth training available anywhere.</p>

        <OfferingSummaries offerings={offerings} />
      </div>
    );
  }
}

export const trainingPageQuery = graphql`
  query TrainingPageQuery {
    #get offerings
    offeringsConnection: allOfferingsJson {
      edges {
        node {
          id
          order
          title
          img
          summary
        }
      }
    }
  }
`;
