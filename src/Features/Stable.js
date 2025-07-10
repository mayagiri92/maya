import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["SN","Semester","Diploma in Animal Science", "Diploma in Plant Science", "Diploma in Information Technology"];
 
const TABLE_ROWS = [ 
  {
    SN:"1",
    Semester: "First",
    DiplomainAnimalScience: "maya",
   DiplomainPlantScience: "kalpu",
   DiplomainInformationTechnology:"https://www.arjun00.com.np/2023/03/first-semester-diploma-in-computer.html",
  },
  {
     SN:"2",
     Semester: "Second",
    DiplomainAnimalScience: "maya",
   DiplomainPlantScience: "kalpu",
   DiplomainInformationTechnology:"https://www.arjun00.com.np/2023/03/second-semester-diploma-in-computer.html",

  },
  {
SN:"3",
     Semester: "Third",
    DiplomainAnimalScience: "maya",
   DiplomainPlantScience: "kalpu",
   DiplomainInformationTechnology:"https://www.arjun00.com.np/2023/03/third-semester-diploma-in-computer.html",
  },
  {SN:"4",
     Semester: "Fourth",
    DiplomainAnimalScience: "maya",
   DiplomainPlantScience: "kalpu",
   DiplomainInformationTechnology:"https://www.arjun00.com.np/2023/05/fourth-semester-diploma-in-information.html",
  },
  {SN:"5",
     Semester: "Fifth",
    DiplomainAnimalScience: "maya",
   DiplomainPlantScience: "kalpu",
   DiplomainInformationTechnology:"https://www.arjun00.com.np/2023/05/fifth-semester-diploma-in-information.html",
  },
  {SN:"6",
     Semester: "Sixth",
    DiplomainAnimalScience: "maya",
   DiplomainPlantScience: "kalpu",
   DiplomainInformationTechnology:"https://www.arjun00.com.np/2023/05/sixth-semester-diploma-in-information.html",
  },
];
 
const Stable = () => {
  return (
    <Card className="h-full w-full overflow-hidden mt-14 mx-10">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({  SN, Semester, DiplomainAnimalScience,  DiplomainPlantScience, DiplomainInformationTechnology }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={ classes}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal ml-4  "
                  >
                    {SN}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Semester}
                  </Typography>
                </td>
                <td className={classes}>
                  <a href={DiplomainAnimalScience} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">
                    Download
                  </a>
                </td>
                <td className={classes}>
                  <a href={ DiplomainPlantScience} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">
                   Download
                  </a>
                </td>
                <td className={classes}>
                  <a href={DiplomainInformationTechnology} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">
                   Download
                  </a>
                </td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
export default Stable