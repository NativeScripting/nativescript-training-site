export interface SessionLocation {
    id: string;
    title: string;
    facilityTitle: string;
    facilityDescHtml: string;
    address: string;
    city: string;
    state: string;
    country: string;
}

export function getSessionLocaitonBySessionLocationId(sessionLocationId: string, sessionLocations: SessionLocation[]): SessionLocation {
    return sessionLocations.find(c => c.id === sessionLocationId);
}
