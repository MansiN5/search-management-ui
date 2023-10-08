# Angular Search Application

This is a simple Angular application that allows users to search for names and display the results in a table.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Search](#search)
- [UI Screenshot](#ui-screenshot)
  - [Screenshot 1](#screenshot-1)
  - [Screenshot 2](#screenshot-2)
- [Project Structure](#project-structure)
- [Built With](#built-with)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine.
- Angular CLI installed globally.

### Installation

1. Clone the repository:

    ```sh
   git clone https://github.com/MansiN5/search-management-ui.git
   ```

2. Navigate to the project directory:
  
  ```sh
   cd SearchManagement
   ```

3. Install dependencies:
   
  ```sh
    npm install
  ```

4. Update API Connection:
   
  ```sh
    Replace "apiUrl = 'https://localhost:7174/api/'" in name-list.service.ts with localhost port your api application is running on. 
  ```

5. Start the development server:
 
  ```sh
    ng serve
  ```

6. Open your web browser and visit http://localhost:4200 to view the application.
 
## Usage
### Search
- Enter a search query in the input box.
- Press the "Search" button or press "Enter" to initiate the search.
- The search results will be displayed in a table below the search box.

## UI Screenshot
### Screenshot 1
  
  ![image](https://github.com/MansiN5/search-management-ui/assets/147327356/165dd559-7488-4288-bf1a-a129435c7fb8)

### Screenshot 2

  ![image](https://github.com/MansiN5/search-management-ui/assets/147327356/40e47265-0ad5-4843-91fb-3e0475189ca2)


## Project Structure
The project structure is organized as follows:

- src/ - Contains the application source code.
- app/ - The main application module and components.
- assets/ - Static assets such as images, styles, and fonts.
- environments/ - Environment configuration files.

## Built With
- Angular - The web framework used for building the application.
- Angular CLI - A command-line tool for Angular development.
- Bootstrap - Used for styling the application.
