
# Yelp Search App

The Yelp Search App is a Python web application that allows users to search for businesses on Yelp and export the search results to a CSV file.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search for businesses on Yelp using keywords and location.
- Display detailed information about the businesses, including their names, addresses, phone numbers, and Yelp links.
- Export search results to a CSV file for further analysis.

## Installation

To run the Yelp Search App locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/YourUsername/Yelpsearch.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Yelpsearch
   ```

3. Install the required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

4. Set up your Yelp API Key:

   - Obtain a Yelp API Key by signing up for a Yelp Developer account: [Yelp for Developers](https://www.yelp.com/developers).
   - Create a `.env` file in the project directory and add your Yelp API Key:

     ```env
     YELP_API_KEY=Your_Yelp_API_Key
     ```

5. Start the Flask application:

   ```bash
   python app.py
   ```

6. Access the app in your web browser at `http://localhost:5000`.

## Usage

1. Enter search terms (e.g., restaurant) and a location (e.g., city or ZIP code) in the search form.
2. Click the "Search" button to retrieve a list of businesses matching your criteria.
3. View business details, including names, addresses, phone numbers, and Yelp links.
4. Click the "Export to CSV" button to download the search results in a CSV file.

## Contributing

Contributions to the Yelp Search App are welcome! If you have any ideas, feature requests, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```

Feel free to modify and expand upon this README to provide more information about your Yelp Search App and its usage.
