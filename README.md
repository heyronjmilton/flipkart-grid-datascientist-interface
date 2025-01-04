# FLIPKART GRID DATASCIENTIST INTERFACE

## Overview

This guide will help you install and run the interface for data scientists. Follow the steps below to set up your environment and start the application.

---

## Prerequisites

Ensure you have the following installed on your system:

1. **Node.js** (LTS version recommended)
   - Download and install it from [Node.js official website](https://nodejs.org/).
2. **npm** or **yarn** (npm is included with Node.js installation).
   - To check if npm is installed, run:
     ```bash
     npm -v
     ```
   - To install Yarn (optional), run:
     ```bash
     npm install -g yarn
     ```

---

## Installation Steps

1. **Clone the Repository**

   Clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/heyronjmilton/flipkart-grid-datascientist-interface.git
   ```

2. **Navigate to the Project Directory**

   Move into the project's directory:

   ```bash
   cd flipkart-grid-datascientist-interface
   ```

3. **Install Dependencies**

   Install the required dependencies:

   - Using npm:
     ```bash
     npm install
     ```
   - OR using Yarn:
     ```bash
     yarn install
     ```

4. **Start the Development Server**

   Start the application in development mode:

   - Using npm:
     ```bash
     npm run dev
     ```
   - OR using Yarn:
     ```bash
     yarn dev
     ```

   This command will start a local development server. The application will be available at `http://localhost:9002/`.

---

## Application Features

### Add New Class

The **Add New Class** feature allows data scientists to add new items to the dataset by uploading a video of the object. The uploaded video is processed to extract relevant frames, and new dataset entries are created based on the objects detected in the video.

### Dataset Analysis

The **Dataset Analysis** section provides a detailed view of the dataset:

- **Preview of Latest Ingested Frames**: Displays the most recently processed frames from the video uploaded via the "Add New Class" feature.
- **Dataset Statistics**: Includes a table that shows each class in the dataset along with their respective counts.

### Data Review

The **Data Review** feature helps data scientists:

- Review the inferenced images collected from each device.
- Analyze these images to identify patterns or issues.
- Use this reviewed data for retraining the models, ensuring continuous improvement of model performance.

---

## Usage Instructions

1. Launch the application by starting the development server.
2. Navigate to the desired feature from the navigation bar:
   - **Add New Class**: Upload a video of the object to add new items to the dataset.
   - **Dataset Analysis**: View the latest ingested frames and dataset statistics.
   - **Data Review**: Review inferenced images collected from devices.
3. Utilize the insights gained from each section to refine your dataset and retrain models as needed.

---
