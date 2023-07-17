import React from "react";
import ReactDOM from "react-dom";
import { BillOfLadingSampleV2 } from "../src/templates/BillOfLading/sampleV2";
import { BillOfLadingSampleV3 } from "../src/templates/BillOfLading/sampleV3";
import { BillOfLadingGenericSample } from "../src/templates/BillOfLadingGeneric/sample";
import { ChaftaCooSampleV2 } from "../src/templates/ChaftaCoo/sampleV2";
import { ChaftaCooSampleV3 } from "../src/templates/ChaftaCoo/sampleV3";
import { CoveringLetterSampleV2a } from "../src/templates/CoveringLetter/sampleV2a";
import { CoveringLetterSampleV2b } from "../src/templates/CoveringLetter/sampleV2b";
import { CoveringLetterSampleV2malformed } from "../src/templates/CoveringLetter/sampleV2malformed";
import { InvoiceSampleV2 } from "../src/templates/Invoice/sampleV2";
import { InvoiceSampleV3 } from "../src/templates/Invoice/sampleV3";
import { XMLRendererSampleData } from "../src/templates/XmlRenderer/sample";
import { SimpleCooSampleV2 } from "../src/templates/SimpleCoo/sampleV2";
import { SimpleCooSampleV3 } from "../src/templates/SimpleCoo/sampleV3";
import { App } from "./app";

ReactDOM.render(
  <App
    documents={[
      { name: "Bill of Lading V2", document: BillOfLadingSampleV2 },
      { name: "Bill of Lading V3", document: BillOfLadingSampleV3 },
      { name: "Bill of Lading (Generic)", document: BillOfLadingGenericSample },
      { name: "Chafta COO V2", document: ChaftaCooSampleV2 },
      { name: "Chafta COO V3", document: ChaftaCooSampleV3 },
      { name: "Covering Letter V2 (GovTech)", document: CoveringLetterSampleV2a },
      { name: "Covering Letter V2 (DBS)", document: CoveringLetterSampleV2b },
      { name: "Covering Letter V2 (Malformed)", document: CoveringLetterSampleV2malformed },
      { name: "InvoiceV2", document: InvoiceSampleV2 },
      { name: "InvoiceV3", document: InvoiceSampleV3 },
      { name: "XML Renderer", document: XMLRendererSampleData },
      { name: "Simple COO V2", document: SimpleCooSampleV2 },
      { name: "Simple COO V3", document: SimpleCooSampleV3 },
    ]}
  />,
  document.getElementById("root")
);
