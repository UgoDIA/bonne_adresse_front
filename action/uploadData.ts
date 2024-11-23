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
          correct_address: "20 Rue de la République, Saint-Denis, 97400, La Réunion",
          lat: -21.151244,
          long: 55.320411,
        },
        {
          correct_address: "13 Rue de la Paix, Saint-Pierre, 97410, La Réunion",
          lat: -21.335344,
          long: 55.652231,
        },
        {
          correct_address: "31 Rue Mahé de Labourdonnais, Saint-Denis, 97400, La Réunion",
          lat: -21.304486,
          long: 55.553599,
        },
        {
          correct_address: "4 Avenue des Mascareignes, Saint-Gilles-les-Bains, 97434, La Réunion",
          lat: -21.048155,
          long: 55.270748,
        },
        {
          correct_address: "18 Rue du Général de Gaulle, Saint-Paul, 97460, La Réunion",
          lat: -21.011633,
          long: 55.266896,
        },
        // 50 adresses supplémentaires
        {
          correct_address: "10 Rue des Flamboyants, Le Tampon, 97430, La Réunion",
          lat: -21.278124,
          long: 55.466898,
        },
        {
          correct_address: "45 Rue de la Montagne, Cilaos, 97413, La Réunion",
          lat: -21.259874,
          long: 55.447673,
        },
        {
          correct_address: "11 Rue de l'Indépendance, Saint-Denis, 97400, La Réunion",
          lat: -21.145245,
          long: 55.277125,
        },
        {
          correct_address: "7 Rue du Père Boiteau, Sainte-Marie, 97438, La Réunion",
          lat: -20.949216,
          long: 55.485732,
        },
        {
          correct_address: "5 Rue des Letchis, Saint-Benoît, 97470, La Réunion",
          lat: -21.027389,
          long: 55.681457,
        },
        {
          correct_address: "100 Rue de la Liberté, Saint-Pierre, 97410, La Réunion",
          lat: -21.340119,
          long: 55.489676,
        },
        {
          correct_address: "12 Chemin de la Forêt, Salazie, 97433, La Réunion",
          lat: -21.090258,
          long: 55.515745,
        },
        {
          correct_address: "8 Avenue de la Réunion, La Possession, 97419, La Réunion",
          lat: -20.981345,
          long: 55.306509,
        },
        {
          correct_address: "13 Rue des Églantiers, Saint-Denis, 97400, La Réunion",
          lat: -21.146738,
          long: 55.358475,
        },
        {
          correct_address: "16 Rue de la Rose, Le Port, 97420, La Réunion",
          lat: -20.974537,
          long: 55.296289,
        },
        {
          correct_address: "3 Rue des Bougainvilliers, Sainte-Suzanne, 97441, La Réunion",
          lat: -20.983776,
          long: 55.593133,
        },
        {
          correct_address: "9 Chemin des Canots, Saint-André, 97440, La Réunion",
          lat: -21.070788,
          long: 55.622887,
        },
        {
          correct_address: "23 Rue des Cressonnières, Le Tampon, 97430, La Réunion",
          lat: -21.277267,
          long: 55.463506,
        },
        {
          correct_address: "19 Rue du Mont-Chat, Saint-Denis, 97400, La Réunion",
          lat: -21.146912,
          long: 55.282155,
        },
        {
          correct_address: "21 Rue des Fougères, Saint-Pierre, 97410, La Réunion",
          lat: -21.350286,
          long: 55.475092,
        },
        {
          correct_address: "15 Rue de la Paix, Saint-Joseph, 97480, La Réunion",
          lat: -21.336845,
          long: 55.554245,
        },
        {
          correct_address: "31 Rue Mahé de Labourdonnais, Saint-Denis, 97400, La Réunion",
          lat: -21.304486,
          long: 55.553599,
        },
        {
          correct_address: "25 Rue des Érables, Saint-Leu, 97436, La Réunion",
          lat: -21.235908,
          long: 55.336925,
        },
        {
          correct_address: "50 Chemin de la Montagne, Le Port, 97420, La Réunion",
          lat: -20.954976,
          long: 55.282661,
        },
        {
          correct_address: "39 Rue de la Félicité, Sainte-Marie, 97438, La Réunion",
          lat: -20.901634,
          long: 55.490963,
        },
        {
          correct_address: "60 Rue du Général de Gaulle, Saint-Denis, 97400, La Réunion",
          lat: -21.148237,
          long: 55.320455,
        },
        {
          correct_address: "13 Rue du Maréchal Leclerc, Saint-Benoît, 97470, La Réunion",
          lat: -21.014254,
          long: 55.681474,
        },
        {
          correct_address: "18 Rue des Lilas, Saint-Gilles-les-Bains, 97434, La Réunion",
          lat: -21.066865,
          long: 55.265011,
        },
        {
          correct_address: "23 Rue des Fleurs, Le Tampon, 97430, La Réunion",
          lat: -21.271292,
          long: 55.471533,
        },
        {
          correct_address: "4 Rue de la Plage, La Possession, 97419, La Réunion",
          lat: -20.982356,
          long: 55.307671,
        },
        {
          correct_address: "29 Boulevard des Martyrs, Saint-Denis, 97400, La Réunion",
          lat: -21.138394,
          long: 55.298396,
        },
        {
          correct_address: "22 Rue de la Liberté, Saint-Pierre, 97410, La Réunion",
          lat: -21.339815,
          long: 55.467055,
        },
        {
          correct_address: "17 Rue des Tamarins, Cilaos, 97413, La Réunion",
          lat: -21.260374,
          long: 55.449276,
        },
        {
          correct_address: "33 Rue des Pamplemousses, Saint-André, 97440, La Réunion",
          lat: -21.080235,
          long: 55.611135,
        },
        {
          correct_address: "12 Rue des Frangipaniers, Saint-Gilles-les-Bains, 97434, La Réunion",
          lat: -21.056773,
          long: 55.276456,
        },
        {
          correct_address: "27 Chemin des Ananas, Saint-Denis, 97400, La Réunion",
          lat: -21.134594,
          long: 55.285296,
        },
        {
          correct_address: "8 Rue de l'Aéroport, Saint-Pierre, 97410, La Réunion",
          lat: -21.313801,
          long: 55.485305,
        },
        {
          correct_address: "19 Rue du Parc, Le Port, 97420, La Réunion",
          lat: -20.964012,
          long: 55.294257,
        },
        {
          correct_address: "2 Rue des Orchidées, Sainte-Suzanne, 97441, La Réunion",
          lat: -21.035266,
          long: 55.576318,
        },
        {
          correct_address: "50 Rue des Roses, Saint-Leu, 97436, La Réunion",
          lat: -21.210834,
          long: 55.307682,
        },
        {
          correct_address: "12 Rue des Salines, La Possession, 97419, La Réunion",
          lat: -20.976534,
          long: 55.316395,
        },
        {
          correct_address: "17 Avenue de l'Océan, Le Tampon, 97430, La Réunion",
          lat: -21.264477,
          long: 55.462347,
        },
        {
          correct_address: "9 Rue des Palmiers, Saint-Denis, 97400, La Réunion",
          lat: -21.138985,
          long: 55.289775,
        }
      ],
      stats: {
        correct_pourcent: "95",
        corriger_pourcent: "3",
        no_match_pourcent: "2",
      },
      tab: [
        {
          origine_address: "20 Rue de la Repiblique, Saint-Denis, 97400, La Reuniion",
          correct_address: "20 Rue de la République, Saint-Denis, 97400, La Réunion",
          fiability: "80",
        },
        {
          origine_address: "13 Rue de la Paixx, Saint-Pierre, 97410, La Réuion",
          correct_address: "13 Rue de la Paix, Saint-Pierre, 97410, La Réunion",
          fiability: "35",
        },
        {
          origine_address: "31 Rue Mahé de Labordonnais, Saint-Denis, 97400, La Reunion",
          correct_address: "31 Rue Mahé de Labourdonnais, Saint-Denis, 97400, La Réunion",
          fiability: "90",
        },
        {
          origine_address: "4 Avenue des Mascareignes, Saint-Gille-les-Bains, 97434, La Réunion",
          correct_address: "4 Avenue des Mascareignes, Saint-Gilles-les-Bains, 97434, La Réunion",
          fiability: "50",
        },
        {
          origine_address: "18 Rue du Générral de Gaulle, Saint-Paul, 97460, La Réunion",
          correct_address: "18 Rue du Général de Gaulle, Saint-Paul, 97460, La Réunion",
          fiability: "75",
        },
        {
          origine_address: "10 Rue des Flambouyants, Le Tampon, 97430, La Réunion",
          correct_address: "10 Rue des Flamboyants, Le Tampon, 97430, La Réunion",
          fiability: "85",
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