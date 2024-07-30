import React from "react";

const DataExports = (props) => {
  const {
    file,
    refLat,
    refLong,
    refAlt,
    startButton,
    meanAlt,
    meanLat,
    meanLong,
    cep50,
    cep90,
    cep98,
    meanCep50,
    meanCep90,
    meanCep98,
    sep50,
    sep90,
    sep98,
    meanSep50,
    meanSep90,
    meanSep98,
  } = props;
  console.log(
    file.data,
    refLat,
    refLong,
    refAlt,
    startButton,
    meanAlt,
    meanLat,
    meanLong,
    cep50,
    cep90,
    cep98,
    meanCep50,
    meanCep90,
    meanCep98,
    sep50,
    sep90,
    sep98,
    meanSep50,
    meanSep90,
    meanSep98
  );
  return <div>Download Results</div>;
};

export default DataExports;
