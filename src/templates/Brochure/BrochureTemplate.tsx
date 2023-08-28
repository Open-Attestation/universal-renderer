import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { getDocumentData } from "../../utils";
import { Wrapper } from "../../core/Wrapper";
import { BrochureSchema, BrochureDocument } from "./types";
import styled from "@emotion/styled";
import govtechLogo from "/static/images/logo-govtech.png";
import imdaLogo from "/static/images/logo-imda.png";

export const mediaQueries: Record<string, string> = {
  xl: `@media (min-width: ${1280}px)`,
  "2xl": `@media (min-width: ${1536}px)`,
  print: `@media print`,
};

export const Page = styled.div`
  margin: auto;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 50px;
  position: relative;
  font-size: 16px;
  line-height: 1.5;
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;

  ${mediaQueries["sm"]} {
    padding: 15mm;
  }
  ${mediaQueries["lg"]} {
    width: 23cm;
  }

  ${mediaQueries["print"]} {
    width: 21cm;
    min-height: 27cm;
    padding-bottom: 2mm;
    border: none;
    page-break-before: always;
  }
`;

export const BrochureHeader: React.FC = () => (
  <>
    <div className="flex flex-row">
      <img className="w-36" src={govtechLogo} />
      <div className="grow"></div>
      <img className="w-36" src={imdaLogo} />
    </div>
    <div className="h-0.5 w-full bg-gradient-to-r from-green-700 to-sky-400 my-4"></div>
  </>
);

interface BrochurePageProps {
  logo: string;
  description: string;
  page: number;
  header?: string;
  footnote?: string;
  footer?: React.ReactNode;
}

export const BrochurePage: React.FC<BrochurePageProps> = ({
  logo,
  description,
  page,
  header,
  footnote,
  footer,
  children,
}) => (
  <Page>
    <BrochureHeader />
    {header && <div className="text-2xl pb-4">{header}</div>}
    <div className="flex flex-row gap-8">
      <div className="flex flex-col basis-4/12 justify-between">
        <div className="relative text-zinc-500">
          <img src={logo} className="mb-4" />
          {description}
          <div className="h-full w-0.5 absolute -right-4 top-0 bg-gradient-to-b from-green-700 to-sky-400"></div>
        </div>
        {footnote && (
          <div className="text-sm text-zinc-500">
            <sup>1</sup>
            {footnote}
          </div>
        )}
      </div>
      <div className="basis-8/12">{children}</div>
    </div>
    {footer}
    <div className="text-sm absolute bottom-0 right-10 p-2 text-gray-800">{page}</div>
  </Page>
);

const Page1: React.FC<{ document: BrochureDocument }> = ({ document }) => {
  const contents = document.page1.contents;
  return (
    <BrochurePage
      description={document.shared.tradeTrust.description}
      page={1}
      logo={document.shared.tradeTrust.logo}
      footnote={document.page1.footnote}
      header={document.page1.header}
    >
      {contents.map((section, i) => {
        if (i === contents.length - 1)
          return (
            <>
              <h5>{section.subheader}</h5>
              {section.bodyAsList?.[0]}
              <b>{section.bolded?.[0]}</b>
              {section.bodyAsList?.[1]}
              <b>{section.bolded?.[1]}</b>
              {section.bodyAsList?.[2]}
            </>
          );
        else {
          return (
            <>
              <h5>{section.subheader}</h5>
              <div>{section.body}</div>
              <br />
            </>
          );
        }
      })}
    </BrochurePage>
  );
};

const Page2: React.FC<{ document: BrochureDocument }> = ({ document }) => {
  const contents = document.page2.contents;
  return (
    <BrochurePage
      description={document.shared.openAttestation.description}
      page={2}
      logo={document.shared.openAttestation.logo}
    >
      <h5>{contents[0].subheader}</h5>
      <div>{contents[0].body}</div>
      <br />
      <div>{contents[1].body}</div>
      <br />
      <ul className="list-disc ml-4">
        {contents[1].listItems?.map((item) => (
          <>
            <li className="ml-4">
              <b>{item.name} </b>
              {item.description}
            </li>
            <br />
          </>
        ))}
      </ul>
      <div>
        {contents[2].bodyAsList?.[0]}
        <b>{contents[2].bolded?.[0]}</b>
        {contents[2].bodyAsList?.[1]}
        <b>{contents[2].bolded?.[1]}</b>
        {contents[2].bodyAsList?.[2]}
      </div>
      <br />
      <h5>{contents[3].subheader}</h5>
      <div>
        {contents[3].body}
        <a href={contents[3].link} target="_blank">
          {contents[3].link}
        </a>
        .
      </div>
    </BrochurePage>
  );
};

const Page3: React.FC<{ document: BrochureDocument }> = ({ document }) => {
  const contents = document.page3.contents;
  return (
    <BrochurePage
      description={document.shared.openAttestation.description}
      page={3}
      logo={document.shared.openAttestation.logo}
    >
      <h5>{contents[0].subheader}</h5>
      <div>{contents[0].body}</div>
      <br />
      <ul className="list-decimal ml-8">
        {contents[1].listItems?.map((item, i) => {
          if (i === 0) {
            return (
              <>
                <li>
                  <b>{item.name} </b>
                </li>
                {item.descriptionAsList?.map((part) => (
                  <>
                    <div>{part}</div>
                    <br />
                  </>
                ))}
              </>
            );
          } else {
            return (
              <>
                <li>
                  <b>{item.name} </b>
                </li>
                <div>{item.description}</div>
                <br />
              </>
            );
          }
        })}
      </ul>
    </BrochurePage>
  );
};

const Page4: React.FC<{ document: BrochureDocument }> = ({ document }) => {
  const contents = document.page4.contents;
  const footer = document.page4.footer;
  return (
    <BrochurePage
      description={document.shared.openAttestation.description}
      page={4}
      logo={document.shared.openAttestation.logo}
      footer={
        <>
          <div className="h-0.5 w-full bg-gradient-to-r from-green-700 to-sky-400 my-4 mt-72 mb-2" />
          <div className="flex flex-row items-center h-fit w-full bg-gradient-to-r from-green-700 to-sky-400 rounded-lg p-7">
            <img src={footer.qrCode} className="h-32 w-32" />
            <div className="w-48 ml-4 text-white text-sm">{footer.qrPrompt}</div>
            <div className="grow" />
            <div className="flex flex-col text-right text-white text-sm">
              {footer.links.map((item, i) => (
                <>
                  <b className={i === 0 ? "mb-2" : "mt-4 mb-2"}>{item.title}</b>
                  {item.domains.map((link) => (
                    <div>{link}</div>
                  ))}
                </>
              ))}
            </div>
          </div>
        </>
      }
    >
      <h5>{contents[0].subheader}</h5>
      <div>{contents[0].body}</div>
      <br />
      <ul className="list-disc ml-8">
        {contents[1].listItems?.map((item) => (
          <>
            <li>{item.description}</li>
            <br />
          </>
        ))}
      </ul>
    </BrochurePage>
  );
};

export const BrochureTemplate: FunctionComponent<TemplateProps<BrochureSchema>> = ({ document }) => {
  const documentData = getDocumentData(document) as BrochureDocument;
  return (
    <Wrapper data-testid="brochure-template">
      <Page1 document={documentData} />
      <Page2 document={documentData} />
      <Page3 document={documentData} />
      <Page4 document={documentData} />
    </Wrapper>
  );
};
