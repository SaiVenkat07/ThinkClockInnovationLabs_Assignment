# Battery Cell Information Web Application

This is a web application for displaying characteristic information about battery cells, including generating unique identifiers and barcodes automatically.

## Features

- Upload an image of the battery cell and input meta-information.
- Automatically generate a unique 10-digit Cell_ID and a corresponding barcode for the cell.
- Display Bode plot, Equivalent Circuit Model, and State-of-the-Health (SoH) of the battery cell based on uploaded data.
- Provide a user-friendly interface for viewing battery cell information.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/battery-cell-information.git
    ```

2. Navigate to the project directory:

    ```bash
    cd battery-cell-information
    ```

3. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

## Usage

1. Start the Flask server:

    ```bash
    python app.py
    ```

2. Open your web browser and go to [http://localhost:5000/](http://localhost:5000/) to access the web application.

3. Upload an image of the battery cell and fill in the meta-information.

4. Click the "Submit" button to generate the Bode plot, Equivalent Circuit Model, and SoH.

## Dependencies

- Flask: Web framework for Python
- Plotly: Interactive visualization library
- barcode: Barcode generation library

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).
