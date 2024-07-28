# GNSSMetrics.com

GNSSMetrics.com is a web application designed to deliver comprehensive metrics and analysis for GNSS (Global Navigation Satellite System) testing. It processes Excel and CSV sheets containing latitude, longitude, and altitude data from static GNSS tests, calculating various metrics using both user-provided ground truth coordinates and the mean of the provided data.

## Features

### Metrics Calculated:

- **Maximum Fix Error**: \( \max \left( \text{distance}(\text{fix}, \text{ground truth}) \right) \)
- **Minimum Fix Error**: \( \min \left( \text{distance}(\text{fix}, \text{ground truth}) \right) \)
- **Average Fix Error**: \( \frac{1}{n} \sum\_{i=1}^{n} \text{distance}(\text{fix}\_i, \text{ground truth}) \)
- **CEP 50%**: 2D accuracy with 50% confidence level.
- **CEP 90%**: 2D accuracy with 90% confidence level.
- **CEP 98%**: 2D accuracy with 98% confidence level.
- **Mean CEP 50%**: 2D accuracy based on mean coordinates with 50% confidence level.
- **Mean CEP 90%**: 2D accuracy based on mean coordinates with 90% confidence level.
- **Mean CEP 98%**: 2D accuracy based on mean coordinates with 98% confidence level.
- **SEP 50%**: 3D accuracy with 50% confidence level.
- **SEP 90%**: 3D accuracy with 90% confidence level.
- **SEP 98%**: 3D accuracy with 98% confidence level.
- **Mean SEP 50%**: 3D accuracy based on mean coordinates with 50% confidence level.
- **Mean SEP 90%**: 3D accuracy based on mean coordinates with 90% confidence level.
- **Mean SEP 98%**: 3D accuracy based on mean coordinates with 98% confidence level.

## Usage

1. Visit [GNSSMetrics.com](https://gnssmetrics.com).
2. Upload your Excel or CSV file with latitude, longitude, and altitude data.
3. Enter your ground truth coordinates.
4. Click "Calculate Metrics."
5. View the metrics and analysis on the dashboard.

## Stack

- **Frontend**: React.js, Tailwind CSS, Framer Motion, React Icons, React Router DOM
- **Backend**: Node.js, Firebase
- **Data Processing**: Axios, Chart.js, PapaParse, xlsx, jszip, geodesy, spread-js
- **Mapping**: Google Maps, Mapbox

### Feature Roadmap

- Implement maps view on result dashboard.
- Add data export options (HTML, CSV, XLSX).
- Implement user sign-in and data persistence.
- Enable live test analysis.

### Setup Instructions:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd gnssmetrics`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Visit [http://localhost:3000](http://localhost:3000) in your web browser.

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
