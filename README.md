# gnssmetrics.com

gnssmetrics.com is a web application designed to provide comprehensive metrics and analysis for GNSS (Global Navigation Satellite System) testing. It accepts Excel and CSV sheets containing latitude, longitude, and altitude data from a static GNSS test and calculates various metrics using both user-provided ground truth coordinates and the mean of the provided data.

## Features

### Metrics Calculated:

- **Maximum Fix Error**: Calculates the maximum distance to ground truth coordinates.
- **Minimum Fix Error**: Calculates the minimum distance to ground truth coordinates.
- **Average Fix Error**: Calculates the average distance to ground truth coordinates.
- **CEP 50%**: Provides 2D accuracy based on ground truth coordinates with a 50% confidence level.
- **CEP 90%**: Provides 2D accuracy based on ground truth coordinates with a 90% confidence level.
- **CEP 98%**: Provides 2D accuracy based on ground truth coordinates with a 98% confidence level.
- **Mean CEP 50%**: Provides 2D accuracy based on the mean of data coordinates with a 50% confidence level.
- **Mean CEP 90%**: Provides 2D accuracy based on the mean of data coordinates with a 90% confidence level.
- **Mean CEP 98%**: Provides 2D accuracy based on the mean of data coordinates with a 98% confidence level.
- **SEP 50%**: Provides 3D accuracy based on ground truth coordinates with a 50% confidence level.
- **SEP 90%**: Provides 3D accuracy based on ground truth coordinates with a 90% confidence level.
- **SEP 98%**: Provides 3D accuracy based on ground truth coordinates with a 98% confidence level.
- **Mean SEP 50%**: Provides 3D accuracy based on the mean of data coordinates with a 50% confidence level.
- **Mean SEP 90%**: Provides 3D accuracy based on the mean of data coordinates with a 90% confidence level.
- **Mean SEP 98%**: Provides 3D accuracy based on the mean of data coordinates with a 98% confidence level.

## Usage

1. Visit [gnssmetrics.com](https://gnssmetrics.com) in your web browser.
2. Upload your Excel or CSV sheet containing latitude, longitude, and altitude data.
3. Enter your ground truth coordinates (latitude, longitude, and altitude).
4. Click on the "Calculate Metrics" button.
5. View the calculated metrics and analysis on the dashboard.

## Development

### Technologies Used:

- React.js for the frontend.
- Node.js for the backend.
- Firebase for hosting.

### Feature Roadmap

- Implement maps view on result dashboard
- Add data export of result in different formats (html, csv, xlsx, etc)
- Implement user sign in and data persistence
- Implement analysis of live tests

### Setup Instructions:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd gnssmetrics`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your web browser and visit [http://localhost:3000](http://localhost:3000)

## Contributing

Contributions are welcome! If you'd like to contribute to gnssmetrics.com, please follow these guidelines:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
