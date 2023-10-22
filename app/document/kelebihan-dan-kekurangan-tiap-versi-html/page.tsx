"use client";

import { useState, useCallback } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import type { PDFDocumentProxy } from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const resizeObserverOptions = {};

const maxWidth = 768;

type PDFFile = string | File | null;

// Make controllable zoom
export default function ShowPDFPage() {
  const [file, setFile] = useState<PDFFile>(
    "/documents/kelebihan-dan-kekurangan-tiap-versi-html.pdf"
  );
  const [numPages, setNumPages] = useState<number>();
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { files } = event.target;

    if (files && files[0]) {
      setFile(files[0] || null);
    }
  }

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  return (
    <div>
      <div className="my-6 text-center">
        <h1 className="mb-2 font-serif font-bold text-center text-xl md:text-3xl">
          Kelebihan dan kekurangan tiap versi HTML
        </h1>
        <p className="mb-1">Nizar Ahmad Baihaqi - 10 Oktober 2023</p>
        <a
          href={`${process.env.BASE_URL}/documents/kelebihan-dan-kekurangan-tiap-versi-html.pdf`}
          className="text-blue-500 hover:text-white underline hover:no-underline"
        >
          Download PDF
        </a>
      </div>
      <div className="h-screen md:h-auto md:aspect-[4/3] overflow-y-scroll">
        <div ref={setContainerRef}>
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            className="bg-gray-600 p-4 flex flex-col gap-4"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={
                  containerWidth
                    ? Math.min(containerWidth, maxWidth) - 32
                    : maxWidth
                }
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
