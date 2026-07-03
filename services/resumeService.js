import fs from "fs";
import { PDFParse } from "pdf-parse";

export async function parseResume(filePath) {
    try{
        const buffer=fs.readFileSync(filePath);
        const data=await PDFParse(buffer);
        return data.text;
    } catch (error) {
        console.error("Error parsing resume:", error);
        throw error;
    }
}