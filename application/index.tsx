import React from "react";
import ReactDOM from "react-dom";
import { BillOfLadingSampleV2 } from "../src/templates/BillOfLading/sampleV2";
import { BillOfLadingSampleV3 } from "../src/templates/BillOfLading/sampleV3";
import { BillOfLadingGenericSample } from "../src/templates/BillOfLadingGeneric/sample";
import { ChaftaCooSampleV2 } from "../src/templates/ChaftaCoo/sampleV2";
import { ChaftaCooSampleV3 } from "../src/templates/ChaftaCoo/sampleV3";
import { CoveringLetterSample } from "../src/templates/CoveringLetter/sample";
import { CoveringLetterSample2 } from "../src/templates/CoveringLetter/sample2";
import { CoveringLetterSample3 } from "../src/templates/CoveringLetter/sample3";
import { InvoiceSampleV2 } from "../src/templates/Invoice/sampleV2";
import { InvoiceSampleV3 } from "../src/templates/Invoice/sampleV3";
import { XMLRendererSampleData } from "../src/templates/XmlRenderer/sample";
import { SimpleCooSample } from "../src/templates/SimpleCoo/sample";
import { App } from "./app";

ReactDOM.render(
  <App
    documents={[
      { name: "Bill of Lading V2", document: BillOfLadingSampleV2 },
      { name: "Bill of Lading V3", document: BillOfLadingSampleV3 },
      { name: "Bill of Lading (Generic)", document: BillOfLadingGenericSample },
      { name: "Chafta COO V2", document: ChaftaCooSampleV2 },
      { name: "Chafta COO V3", document: ChaftaCooSampleV3 },
      { name: "Covering Letter (GovTech)", document: CoveringLetterSample },
      { name: "Covering Letter (DBS)", document: CoveringLetterSample2 },
      { name: "Covering Letter (Malformed)", document: CoveringLetterSample3 },
      { name: "InvoiceV2", document: InvoiceSampleV2 },
      { name: "InvoiceV3", document: InvoiceSampleV3 },
      { name: "XML Renderer", document: XMLRendererSampleData },
      { name: "Simple COO", document: SimpleCooSample },
    ]}
  />,
  document.getElementById("root")
);
