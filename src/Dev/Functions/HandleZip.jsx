import JSZip from "jszip";
import { saveAs } from "file-saver"; // You might need to install file-saver too

/**
 * Function to download example files as a zip archive.
 */
const downloadExampleFiles = async () => {
  const zip = new JSZip();
  const exampleFiles = [
    { name: "example-2D.xlsx", url: "/Examples/example-2D.xlsx" },
    { name: "example-3D.xlsx", url: "/Examples/example-3D.xlsx" },
    { name: "example-2D.csv", url: "/Examples/example-2D.csv" },
    { name: "example-3D.csv", url: "/Examples/example-3D.csv" },
  ];

  try {
    // Fetch each file and add it to the zip archive
    for (const file of exampleFiles) {
      try {
        const response = await fetch(file.url);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${file.name}`);
        }
        const blob = await response.blob();
        zip.file(file.name, blob);
      } catch (fetchError) {
        console.error(`Error fetching file ${file.name}:`, fetchError);
        return; // Exit the function if a file fails to fetch
      }
    }

    // Generate the zip file
    try {
      const content = await zip.generateAsync({ type: "blob" });
      // Trigger download
      saveAs(content, "examples.zip");
    } catch (zipError) {
      console.error("Error generating zip file:", zipError);
    }
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
};

export default downloadExampleFiles;
