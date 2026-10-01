export interface Education {
  name: string;
  major: string;
  faculty?: string;
  year: string;
  gpax: string;
  option?: string;
}

export const education: Education[] = [
    {
        name: "Satreesiriket School",
        major: "Math-English",
        faculty: "Engineering",
        year: "2017-2020",  
        gpax: "3.23",
    },
    {
        name: "Ubon Ratchathani University",
        major: "Data Science and Software Innovation",
        faculty: "Science",
        year: "2020-2024",
        gpax: "3.43",
        option: "Second-Class Honors",
    },  
];
