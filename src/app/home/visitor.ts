export interface Visitor {
    visitorId: number;
    name: string;
    description: string;
    visitDate: string;
    location: number;
 }
 export interface Vistors {
    travellers: Array<Visitor>;
 }
