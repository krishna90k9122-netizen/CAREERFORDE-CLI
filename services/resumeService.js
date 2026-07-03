// import fs from "fs";
// import  pdfParse  from "pdf-parse";

// export async function parseResume(filePath) {
//     try{
//         const buffer=fs.readFileSync(filePath);
//         const data=await pdfParse(buffer);
//         return data.text;
//     } catch (error) {
//         console.error("Error parsing resume:", error);
//         throw error;
//     }
// }

// import fs from "fs";
// import pdfParse from "pdf-parse-fork";

// export async function parseResume(filePath) {
//   const buffer = fs.readFileSync(filePath);
//   const data = await pdfParse(buffer);
//   return data.text;
// }

import fs from "fs";
import pdfParse from "pdf-parse-fork";

export async function parseResume(filePath) {
    try {

        const buffer = fs.readFileSync(filePath);

        const data = await pdfParse(buffer);

        return data.text;

    } catch (error) {

        throw new Error("Invalid Resume Path or PDF File.");
    }
}