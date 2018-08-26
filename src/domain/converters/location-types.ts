import { LocationsJsonEdge, LocationsJson } from '../graphql-types';
import { SessionLocation } from '../models';


export function locationFromLocationsJsonEdge(edge: LocationsJsonEdge): SessionLocation {
    const n = edge.node;
    return locationFromLocationsJson(n);
}

export function locationFromLocationsJson(s: LocationsJson): SessionLocation {
    const locaition: SessionLocation = {
        id: s.id,
        title: s.title,
        facilityTitle: s.facilityTitle,
        facilityDescHtml: s.facilityDescHtml,
        address: s.address,
        city: s.city,
        state: s.state,
        country: s.country
    };
    return locaition;
}
