import { v3 } from "@govtechsg/open-attestation";

export type SimpleCooDocumentSchema = v3.OpenAttestationDocument & {
  credentialSubject: SimpleCooDocument;
};

export interface SimpleCooDocument {
  iD?: string;
  issueDate?: string;
  issueTime?: string;
  cooId?: string;
  exporterDetails: ExporterDetails;
  importerDetails: ImporterDetails;
  descriptionOfGoods: DescriptionOfGoods;
  firstSignatoryAuthentication?: SignatoryAuthentication;
  secondSignatoryAuthentication?: SignatoryAuthentication;
}

interface ExporterDetails {
  exportCountry?: string;
  exporterName?: string;
  exporterAddress: Address;
}

interface ImporterDetails {
  importCountry?: string;
  importerName?: string;
  importerAddress: Address;
}

interface Address {
  line1?: string;
  line2?: string;
  postalCode?: string;
}

interface DescriptionOfGoods {
  includedConsignments: string;
  importerNameMarksAndNumber: string;
  numberAndKindOfPackage: string;
  hs: string;
  numberOfInvoice: string;
  dateOfInvoice: string;
  loadingBaseportLocationName: string;
  mainCarriageTransportMovementId: string;
}

interface SignatoryAuthentication {
  signature?: string;
  actualDate?: string;
  statement?: string;
}
