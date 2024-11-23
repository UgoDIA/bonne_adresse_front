"use server";

import { PostFile } from "@/lib/custom-tools";


export const UploadData = async (data: File) => {
  try {

    // Vérification du type de fichier .csv, .xlsx, .xls
    if (
      data.type !== "application/vnd.ms-excel" &&
      data.type !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      return {
        error: "Le fichier doit avoir une extension .csv, .xlsx ou .xls.",
      };
    }

    const response = await PostFile(
      "http://141.94.27.12/bonne_adresse/upload_file/",
      data
    );

    const parseDataExport = await JSON.parse(response.export)
    response.export = parseDataExport

    const parseDataMap = await JSON.parse(response.map)
    response.map = parseDataMap

    return { success: "Les données on bien été traité !", result: response };
  } catch (error) {
    console.error("Erreur lors de la création :", error);

    return {
      error: "Une erreur s'est produite lors de la création.",
    };
  }
};