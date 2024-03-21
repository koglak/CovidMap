# Project Name

Covid Map is an website where you can view number of covid cases in countires.

![Covid Map](/src/images/covidmap.gif)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository.
    ```shell
    git clone https://github.com/koglak/CovidMap.git
    ```

2. Install the dependencies.
    ```shell
    npm install --legacy-peer-deps
    ```

3. Create a `.env` file in the root directory and add the following environment variables.
    ```shell
    REACT_APP_MAPBOX_TOKEN=<YOUR_MAP_BOX_TOKEN>
    REACT_APP_RAPIDAPI_KEY=<YOUR_RAPIDAPI_KEY>
    ```

## Usage

1. Start the application.
    ```shell
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Dockerization

1. Build the Docker image.
    ```shell
    docker build -t covid-map .
    ```

2. Run the Docker container.
    ```shell
    docker run -p 3000:3000 covid-map
    ```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).