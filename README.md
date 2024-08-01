# About?

GNSSMetrics.com is a web application designed to deliver comprehensive metrics and analysis for GNSS (Global Navigation Satellite System) testing. It processes Excel and CSV sheets containing latitude, longitude, and altitude data from static GNSS tests, calculating various metrics using both user-provided ground truth coordinates and the mean of the provided data. Users can export their results in Excel and .kml formats for further custom analysis and visualization.

# Motivation?

As a newbie in the world of GNSS technology, I found there were very few open-source resources to help generate metrics for my static tests. The ones available often required extra steps to prepare the data, which sometimes took hours, especially when analyzing multiple receivers at once. The goal of this web app is to simplify static GNSS analysis, making it more accessible and less time-consuming.

## Features?

### Metrics Calculated:

- **Maximum Fix Error**: The maximum distance between all fixes and the ground truth coordinates.
- **Minimum Fix Error**: The minimum distance between all fixes and the ground truth coordinates.
- **Average Fix Error**: The average distance between fixes and the ground truth coordinates.
- **Mean Coordinates**: Mean coordinates of all fixes.
- **CEP 50%**: 2D accuracy based on ground truth coordinates with 50% confidence level.
- **CEP 90%**: 2D accuracy based on ground truth coordinates with 90% confidence level.
- **CEP 98%**: 2D accuracy based on ground truth coordinates with 98% confidence level.
- **Mean CEP 50%**: 2D accuracy based on mean coordinates with 50% confidence level.
- **Mean CEP 90%**: 2D accuracy based on mean coordinates with 90% confidence level.
- **Mean CEP 98%**: 2D accuracy based on mean coordinates with 98% confidence level.
- **SEP 50%**: 3D accuracy based on ground truth coordinates with 50% confidence level (requires ground truth altitude and position fix altitudes).
- **SEP 90%**: 3D accuracy based on ground truth coordinates with 90% confidence level (requires ground truth altitude and position fix altitudes).
- **SEP 98%**: 3D accuracy based on ground truth coordinates with 98% confidence level (requires ground truth altitude and position fix altitudes).
- **Mean SEP 50%**: 3D accuracy based on mean coordinates with 50% confidence level (requires ground truth altitude and position fix altitudes).
- **Mean SEP 90%**: 3D accuracy based on mean coordinates with 90% confidence level (requires ground truth altitude and position fix altitudes).
- **Mean SEP 98%**: 3D accuracy based on mean coordinates with 98% confidence level (requires ground truth altitude and position fix altitudes).

## Usage?

1. Visit [GNSSMetrics.com](https://gnssmetrics.com).
2. Upload your Excel or CSV file with latitude, longitude, and altitude (optional) data.
3. Enter your ground truth coordinates.
4. Click "Evaluate"
5. View the metrics and analysis on the dashboard.
6. Download the results in .xlsx and .kml files

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, Framer Motion, React Icons, React Router DOM
- **Backend**: Node.js, Firebase
- **Data Processing**: Axios, Chart.js, PapaParse, xlsx, jszip, geodesy, spread-js
- **Mapping**: Google Maps, Mapbox

### Feature Roadmap

1. **Implement user sign-in and data persistence**:
   - Develop a user sign-in feature and persist user data across sessions.
2. **Enable live test analysis**:
   - Support live analysis of GNSS tests.
3. **API Integration**:
   - Provide API access for users to integrate GNSS data with their own applications.
4. **Advanced Analytics**:
   - Offer advanced analytics tools and customizable reports for deeper insights into GNSS data.
5. **Resource Center**:
   - Create a resource center with tutorials, case studies, and whitepapers.
6. **Community Forum**:
   - Establish a community forum for users to share knowledge, ask questions, and collaborate.
7. **Notifications**:
   - Implement a notification system to alert users about updates, new features, or critical data insights.

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
