export interface IMajorIncident {
  id?: number;
  code?: string;
  description?: string;
  source?: string;
}

export class MajorIncident implements IMajorIncident {
  constructor(public id?: number, public code?: string, public description?: string, public source?: string) {}
}
