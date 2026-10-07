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
    name: "Java (Basic)",
    issuer: "HackerRank",
    date: "Oct 2026",
    description:
      "Classes, Data Types, Exception Handling, Inheritance, Interfaces and Strings.",
    url: "https://www.hackerrank.com/certificates/50a9c743af50",
    pdfPath: "/pdf/certificate/java_basic certificate.pdf",
    imagePath: "/images/certificate/java_basic_certificate.png",
  },
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
