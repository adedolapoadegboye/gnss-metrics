import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        GNSS Metrics: A Comprehensive Web Tool for GNSS Receiver Performance
        Evaluation
      </h2>
      <div className="text-gray-700 mb-8">
        <p className="mb-4">
          <span className="font-semibold">Overview:</span> GNSS Metrics is a
          sophisticated web tool meticulously developed to assess the
          performance of GNSS (Global Navigation Satellite System) receivers. It
          focuses on calculating accuracy and precision metrics based on the
          analysis of coordinate data obtained from static test results. This
          tool offers invaluable insights into the reliability and effectiveness
          of GNSS receivers, enabling users to make informed decisions and
          optimizations.
        </p>
        <p className="mb-4">
          <span className="font-semibold">Key Features:</span>
          <ol className="list-decimal ml-6">
            <li>
              <span className="font-semibold">Data Import Modes:</span> GNSS
              Metrics provides two distinct modes for importing data:
              <ul className="list-disc ml-6">
                <li>
                  <span className="font-semibold">Load from File:</span> Users
                  can upload position coordinates gathered from static tests in
                  either CSV or XLSX format. Additionally, ground truth
                  coordinates, representing the true points of the test, are
                  required for accurate evaluation.
                </li>
                <li>
                  <span className="font-semibold">Live Test Integration:</span>{" "}
                  For ongoing tests, users have the option to connect to the
                  system via HTTPS integration, facilitating real-time data
                  retrieval and analysis.
                </li>
              </ul>
            </li>
          </ol>
        </p>
        <p className="mb-4">
          <span className="font-semibold">Data Evaluation Process:</span> Upon
          importing the data, GNSS Metrics employs advanced algorithms to
          meticulously evaluate the accuracy and precision of the provided
          coordinate cloud. This evaluation is performed by comparing the
          collected data with the reference ground truth coordinates, ensuring
          the integrity and reliability of the analysis.
        </p>
        <p className="mb-4">
          <span className="font-semibold">Important Note:</span> To ensure the
          accuracy and validity of the evaluation process, it is imperative to
          adhere to the supported file formats (CSV and XLSX) when uploading
          data. Additionally, providing ground truth coordinates is essential
          for establishing a reliable reference point for evaluation purposes.
        </p>
        <p className="mb-4">
          <span className="font-semibold">Conclusion:</span> GNSS Metrics stands
          as an indispensable tool for professionals and researchers involved in
          GNSS receiver development and optimization. With its robust feature
          set and meticulous evaluation process, it empowers users to gain
          deeper insights into GNSS system performance, ultimately driving
          advancements in navigation technology and enhancing location-based
          applications.
        </p>
      </div>
    </div>
  );
};

export default About;
