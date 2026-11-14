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
  {
    name: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Oct 2026",
    description: "HackerRank skill certification test in SQL fundamentals.",
    url: "https://www.hackerrank.com/certificates/56bebb2e0cbf",
    pdfPath: "/pdf/certificate/sql_basic certificate.pdf",
    imagePath: "/images/certificate/sql_basic_certificate.png",
  },
  {
    name: "Golang Cheat Sheet",
    issuer: "Superdev Academy",
    date: "Nov 2026",
    description: "Certificate of completion for the Golang Cheat Sheet course (48 minutes).",
    url: "https://learn.superdevacademy.com/v/C8KF7T0E",
    pdfPath: "/pdf/certificate/spd_c8_kf7_t0_e_1dz3q2qs8a.pdf",
    imagePath: "/images/certificate/golang_cheat_sheet_certificate.png",
  },
];
