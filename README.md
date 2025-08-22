# Google Translator Clone (Front-end)

This project is a **simulation of a Google Translate-like translator**, built as a front-end development practice.  
It allows selecting source and target languages, entering text, and visualizing the translation structure, although automatic translation functionality is not yet implemented.

## Technologies Used

- **HTML, CSS and vanilla JavaScript**
- [Vite](https://vitejs.dev/) as the development environment
- Custom fonts:
  - Poppins-ExtraLight
  - NataSans-ExtraLight

## Project Structure

src/

│

├─ fonts/ # Fonts used in the interface

├─ styles/

│ ├─ fonts.css # Font declarations

│ ├─ main.css # Main styles of the application

│ └─ variables.css # Reusable CSS variables (colors, fonts, spacing)

└─ main.js # Interface logic and DOM manipulation

### Implemented Features

- Selection of source and target languages using `<select>` elements.
- Button to swap the selected languages.
- Text area to input text for translation.
- Icons for additional functions (microphone, copy, volume), for interface purposes only.
- Use of CSS variables for colors, fonts, and spacing to improve code maintainability.

## How to Run the Project

1. Clone the repository:  
```bash
git clone https://github.com/AlejandraF9/Translator
```

2. Enter the project folder:

```bash
cd "Google Traductor"
```

3. Install dependencies (if using Vite or another bundler):

```bash
npm install
```

4. Run in development mode:

```bash
npm run dev
```

5. Open your browser at the URL provided by Vite (default: http://localhost:5173).


### Notes

This project is mainly a practice in layout and DOM manipulation.  

The text translation functionality is not implemented yet; the `<select>` elements and buttons are for interface purposes only.  

CSS variables are used for colors, typography, and spacing, improving consistency and maintainability.  


### Author

Alejandra Fariña
