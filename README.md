# Leads Tracker Chrome Extension

## Overview
The **Leads Tracker** is a simple yet powerful Chrome extension designed to help you save and manage important links (leads) effortlessly. With this extension, you can store URLs, view them in a clean list format, and delete them when they're no longer needed. All data is saved locally in your browser's storage, ensuring it persists even after closing the browser.

---

## Features
- **Save Links**: Add URLs by typing them into the input field and clicking the "SAVE INPUT" button or pressing the `Enter` key.
- **Persistent Storage**: Saved links are stored in your browser's local storage, so they remain available even after restarting the browser.
- **Delete Functionality**: Double-click the "DELETE ALL" button to clear all saved links from both the interface and local storage.
- **User-Friendly Interface**: A clean and responsive design ensures ease of use.
- **Open Links in New Tabs**: Click on any saved link to open it in a new browser tab.

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ferasraj/Chrome-Extension.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd leads-tracker
   ```

3. **Load the Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer Mode** using the toggle switch in the top-right corner.
   - Click on **Load unpacked** and select the folder containing the project files.

4. **Use the Extension**:
   - Click on the extension icon in your Chrome toolbar to open the popup.
   - Start saving links and managing your leads!

---

## Usage

### Saving a Link
1. Type or paste the URL into the input field.
2. Either click the **SAVE INPUT** button or press the `Enter` key to save the link.
3. The link will appear in the list below the input field.

### Viewing Links
- All saved links are displayed as clickable items in a list. Clicking on a link will open it in a new tab.

### Deleting Links
- To delete all saved links, double-click the **DELETE ALL** button. This action clears both the displayed list and the local storage.

---

## File Structure
```
leads-tracker/
├── index.html          # Main HTML file for the popup UI
├── style.css           # Stylesheet for the popup
├── index.js            # JavaScript logic for saving, rendering, and deleting links
├── manifest.json       # Manifest file for Chrome extension configuration
└── icon.png            # Icon for the Chrome extension
```

---

## Technologies Used
- **HTML5**: For structuring the popup interface.
- **CSS3**: For styling the popup with a clean and modern design.
- **JavaScript**: For implementing functionality like saving, rendering, and deleting links.
- **Chrome Extension API**: Utilized for creating a browser extension with persistent local storage.

---

## Contributing
Contributions are welcome! If you'd like to improve this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request detailing your changes.

---

## License
This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it as per the terms of the license.

---

## Contact
If you have any questions, suggestions, or feedback, feel free to reach out:
- GitHub: [https://github.com/ferasraj]

---

Thank you for using **Leads Tracker**! 🚀
