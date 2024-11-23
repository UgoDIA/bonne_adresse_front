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

    // Simuler un délai de réponse (par exemple 2 secondes)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Simulation de réponse statique
    const responseStatique = {
      export: [],
      map: [
        {
          correct_address: "addres de test",
          lat: -21.151244,
          long: 55.320411,
        },
        {
          correct_address: "addres de test",
          lat: -21.335344,
          long: 55.652231,
        },
        {
          correct_address: "addres de test",
          lat: -21.304486,
          long: 55.553599,
        },
        {
          correct_address: "addres de test",
          lat: -21.048155,
          long: 55.270748,
        },
        {
          correct_address: "addres de test",
          lat: -21.011633,
          long: 55.266896,
        },
      ],
      stats: {
        correct_pourcent: "68",
        corriger_pourcent: "22",
        no_match_pourcent: "10",
      },
      tab: [
        {
          origine_address: "adresse original",
          correct_address: "adresse corriger",
          fiability: "80",
        },
        {
          origine_address: "adresse original",
          correct_address: "adresse corriger",
          fiability: "35",
        },
        {
          origine_address: "adresse original",
          correct_address: "adresse corriger",
          fiability: "90",
        },
        {
          origine_address: "adresse original",
          correct_address: "adresse corriger",
          fiability: "50",
        },
      ],
    };

    return { success: "Les données ont bien été traitées !", result: responseStatique };
  } catch (error) {
    console.error("Erreur lors du traitement :", error);

    return {
      error: "Une erreur s'est produite lors du traitement.",
    };
  }
};