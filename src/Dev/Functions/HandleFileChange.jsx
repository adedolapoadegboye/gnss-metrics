import Papa from "papaparse";
import { read, utils } from "xlsx";

const HandleFileChange = (event, setFileName, setFileType, setFile) => {
  try {
    if (event.target.files) {
      const selectedFile = event.target.files[0];
      setFileName(selectedFile.name);
      const fileType = selectedFile.name.split(".").pop().toLowerCase();
      setFileType(fileType);
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileContents = event.target.result;
        if (selectedFile.name.endsWith(".csv")) {
          const data = Papa.parse(fileContents, {
            header: true,
          });
          setFile(data);
        } else if (selectedFile.name.endsWith(".xlsx")) {
          const wb = read(fileContents, { type: "binary" });
          const sheet = wb.Sheets[wb.SheetNames[0]];
          const csvData = utils.sheet_to_csv(sheet);
          const data = Papa.parse(csvData, {
            header: true,
          });
          setFile(data);
        }
      };
      reader.readAsBinaryString(selectedFile);
    }
  } catch (error) {
    console.error("Error handling file change:", error);
  }
};

export default HandleFileChange;
