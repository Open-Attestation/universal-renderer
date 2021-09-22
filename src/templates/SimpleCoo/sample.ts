import { v3 } from "@govtechsg/open-attestation";
import { firstSignature, secondSignature } from "./signatures";
import { SimpleCooDocumentSchema } from "./types";

export const SimpleCooSample: SimpleCooDocumentSchema = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schemata.openattestation.com/io/tradetrust/certificate-of-origin/1.0/CertificateOfOrigin.v3.json",
    "https://schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json",
  ],
  type: ["VerifiableCredential", "OpenAttestationCredential"],
  issuanceDate: "2010-01-01T19:23:24Z",
  issuer: { id: "https://example.com", name: "DEMO STORE" },
  openAttestationMetadata: {
    template: {
      type: v3.TemplateType.EmbeddedRenderer,
      name: "SIMPLE_COO",
      url: "http://localhost:3000",
    },
    proof: {
      type: v3.ProofType.OpenAttestationProofMethod,
      method: v3.Method.DocumentStore,
      value: "0x8bA63EAB43342AAc3AdBB4B827b68Cf4aAE5Caca",
    },
    identityProof: { type: v3.IdentityProofType.DNSDid, identifier: "demo-tradetrust.openattestation.com" },
  },
  credentialSubject: {
    iD: "WBC 208897",
    issueDate: "21 September 2021",
    issueTime: "3:05pm",
    cooId: "WBC 208897",
    exporterDetails: {
      exportCountry: "AU",
      exporterName: "TREASURY WINE ESTATES VINTNERS LIMITED",
      exporterAddress: {
        line1: "161 Collins Street, Melbourne",
        line2: "VIC Australia",
        postalCode: "3000 ",
      },
    },
    importerDetails: {
      importCountry: "SG",
      importerName: "Singapore Wines Pte Ltd",
      importerAddress: {
        line1: "10 Pasir Panjang Road",
        line2: "#03-01, Mapletree Business City, Singapore",
        postalCode: "117438",
      },
    },
    descriptionOfGoods: {
      includedConsignments: "SG",
      importerNameMarksAndNumber: "SSCC: 59312345670002345",
      numberAndKindOfPackage: "Bin 23 Pinot Noir 201",
      hs: "2204.21",
      numberOfInvoice: "1122345",
      dateOfInvoice: "Mon 5 July 2021",
      loadingBaseportLocationName: "AUMEL",
      mainCarriageTransportMovementId: "IMO 9367815",
    },
    firstSignatoryAuthentication: {
      actualDate: "2020-05-29",
      statement:
        "The undersigned hereby declares that the above-stated information is correct and that the goods exported to [importer] comply with the origin requirements specified in the China-Australia Free Trade Agreement.",
      signature: firstSignature,
    },
    secondSignatoryAuthentication: {
      actualDate: "",
      statement: "",
      signature: secondSignature,
    },
  },
};
