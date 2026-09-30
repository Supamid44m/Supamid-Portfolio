"use client";

import PdfViewer from "../pdfViewer";
import SectionTitle from "../sectionTitle";

export default function Resume() {
  return (
    <div>
      <SectionTitle>CV / Resume</SectionTitle>
      <PdfViewer src="/pdf/SUPAMID_CV.pdf" />
    </div>
  );
}
