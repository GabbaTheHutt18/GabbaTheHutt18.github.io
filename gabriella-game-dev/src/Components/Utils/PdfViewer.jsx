/*Using as a template from https://www.embedpdf.com/docs/react/headless/getting-started*/
import { useEffect } from "react";

import { createPluginRegistration } from "@embedpdf/core";
import { EmbedPDF } from "@embedpdf/core/react";
import { usePdfiumEngine } from "@embedpdf/engines/react";

import {DocumentContent, DocumentManagerPluginPackage, useDocumentManagerCapability} from "@embedpdf/plugin-document-manager/react";

import {Viewport, ViewportPluginPackage} from "@embedpdf/plugin-viewport/react";

import {Scroller, ScrollPluginPackage} from "@embedpdf/plugin-scroll/react";

import {RenderLayer,RenderPluginPackage} from "@embedpdf/plugin-render/react";

import {ZoomMode, ZoomPluginPackage} from "@embedpdf/plugin-zoom/react";

import pdfUrl from "../../Assets/FunCV.pdf";
import cv from "../../Assets/GabriellaEmersonCV.pdf";

import "./PdfViewerStyle.css";

const FUN_CV_ID = "fun-cv";
const GABRIELLA_CV_ID = "gabriella-cv";

// Register the plugins once.
const plugins = [
  createPluginRegistration(DocumentManagerPluginPackage, {
    initialDocuments: [
      {
        documentId: FUN_CV_ID,
        url: pdfUrl,
      },
      {
        documentId: GABRIELLA_CV_ID,
        url: cv,
      },
    ],
  }),

  createPluginRegistration(ViewportPluginPackage),

  createPluginRegistration(ScrollPluginPackage),

  createPluginRegistration(RenderPluginPackage),

  createPluginRegistration(ZoomPluginPackage, {
    defaultZoomLevel: ZoomMode.FitPage,
  }),
];

function PdfDocument({ documentId }) {
  return (
    <DocumentContent documentId={documentId}>
      {({ isLoading, isError, isLoaded }) => {
        if (isLoading) {
          return (
            <div className="pdf-viewer-loading">
              Loading PDF...
            </div>
          );
        }

        if (isError) {
          return (
            <div className="pdf-viewer-error">
              Failed to load PDF.
            </div>
          );
        }

        if (!isLoaded) {
          return null;
        }

        return (
          <Viewport
            documentId={documentId}
            className="pdf-viewport"
          >
            <Scroller
              documentId={documentId}
              renderPage={({ width, height, pageIndex }) => (
                <div
                  style={{
                    width,
                    height,
                    position: "relative",
                  }}
                >
                  <RenderLayer
                    documentId={documentId}
                    pageIndex={pageIndex}
                  />
                </div>
              )}
            />
          </Viewport>
        );
      }}
    </DocumentContent>
  );
}

function PdfViewerContent({ bool }) {
  const { provides: documentManager } = useDocumentManagerCapability();

  const activeDocumentId = bool ? FUN_CV_ID : GABRIELLA_CV_ID;

  useEffect(() => {
    if (!documentManager) 
    {
      return;
    }
     documentManager.setActiveDocument(activeDocumentId);}, [activeDocumentId, documentManager]);

  return (
    <PdfDocument documentId={activeDocumentId} />
  );
}

export default function PdfViewer({ bool }) {
  const { engine,isLoading,error} = usePdfiumEngine();

  if (isLoading || !engine) {
    return (
      <div className="pdf-viewer-loading">
        Loading PDF engine!
      </div>
    );
  }

  if (error) {
    return (
      <div className="pdf-viewer-error">
        Failed to load PDF engine!
      </div>
    );
  }

  return (
    <div className="pdf-viewer">
      <EmbedPDF engine={engine} plugins={plugins}>
        <PdfViewerContent bool={bool} />
      </EmbedPDF>
    </div>
  );
}

