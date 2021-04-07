export interface Lead {
  id: string;
  name: string;
  reference?: string;
  status: string;
  resolution: string;
  pitchDate?: string;
  offerDate?: string;
  offerPresentationDate?: string;
  customer: string;
  resolutionComment: string;
  notes?: string;
}
