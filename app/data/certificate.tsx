export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  description?: string;
  url: string;
  pdfPath?: string;
  imagePath?: string;
}

export const certificates: Certificate[] = [
  {
    name: "JavaScript (Basic)",
    issuer: "HackerRank",
    date: "Oct 2026",
    description:
      "Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling.",
    url: "https://www.hackerrank.com/certificates/35ad961e7ef7",
    pdfPath: "/pdf/certificate/javascript_basic certificate.pdf",
    imagePath: "/images/certificate/javascript_basic_certificate.png",
  },
];
