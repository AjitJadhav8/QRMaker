# QRMaker

**QRMaker** is a simple and efficient QR code generator that allows you to quickly create QR codes from URLs. The tool prompts you to enter a URL, generates a QR code image, and saves it to a file. Additionally, it saves the URL to a text file for easy reference. 

## Features

- Prompts for a URL input.
- Generates a QR code image from the provided URL.
- Saves the QR code image as `qr_img.png`.
- Saves the URL to a text file named `message.txt`.

## Technologies Used

- **Node.js**: JavaScript runtime for building the application.
- **inquirer**: CLI library for prompting user input.
- **qr-image**: Library for generating QR code images.
- **fs (File System)**: Node.js module for file operations.

## Installation

To use QRMaker, you need to have Node.js installed. Follow these steps to set up the project:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/QRMaker.git
