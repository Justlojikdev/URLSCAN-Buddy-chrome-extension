# URLSCAN-Buddy-chrome-extension 
chrome extension that connects to URLscan.io it allows you to provide a URL and then fetches the complete url from URLscan.io

## Overview

This is a Chrome browser extension that allows users to perform URL scanning using the urlscan.io API. It's designed to provide a convenient way to check the safety and security of URLs directly from your browser.

## Features

- **URL Scanning**: You can scan a URL for potential security threats by simply clicking on the extension icon in your Chrome toolbar.

- **Proxy Support**: The extension includes a proxy server feature that enables access to the urlscan.io API even if it does not support CORS (Cross-Origin Resource Sharing).

- **Easy to Use**: The extension provides a user-friendly popup interface where you can input the URL you want to scan and initiate the scan with a single click.

- **Results Display**: The results of the URL scan are displayed in the popup, allowing you to quickly see if the URL has any security issues.

## Installation

1. Download the extension files or clone this repository to your local machine.

2. Open Google Chrome.

3. Go to `chrome://extensions/`.

4. Enable "Developer mode" by toggling the switch in the upper-right corner.

5. Click the "Load unpacked" button and select the folder where you saved the extension files.

6. The extension will now be installed and available in your Chrome browser.

## How to Use

1. Click on the extension icon in your Chrome toolbar to open the popup.

2. Enter the URL you want to scan in the input field.

3. Click the "Scan URL" button to initiate the scan.

4. Wait for the scan to complete. The results will be displayed in the popup.

## API Key

To use this extension, you need to provide an API key for the urlscan.io API. Replace `'YOUR_API_KEY_HERE'` with your actual API key in the `background.js` file.

```javascript
const apiKey = 'YOUR_API_KEY_HERE';
