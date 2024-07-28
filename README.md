## NoteFlow
NoteFlow is a simple and elegant note-taking web application that allows users to create, edit, and delete notes with customizable colors. The app features a toggleable dark mode for a better viewing experience in low-light environments.

### Features
**Add Notes**: Create new notes with a single click.
**Edit Notes**: Click on a note to edit its content.
**Delete Notes**: Remove notes when they are no longer needed.
**Customizable Note Colors**: Choose from a variety of colors to categorize your notes.
**Dark Mode**: Switch between light and dark modes to suit your viewing preference.
**Persistent State**: Notes and the selected mode (light/dark) are saved and loaded from local storage, ensuring that your preferences and notes persist across sessions.


### Live Preview:
https://epicnesh26.github.io/NoteFlow/

### Installation
1. Clone the repository:
```sh
git clone https://github.com/yourusername/noteflow.git
```
2. Navigate to the project directory:
```sh
cd noteflow
```
3. Run the following commands:
```sh
npm run build
npm run dev
```

### Usage
**Adding a Note**:
1. Click the Add Note button to open the color selection menu.
2. Choose a color for your note from the available options.
3. A new note will be created with the selected color. Click on the note to edit its content.

**Editing a Note**:
1. Click on the content area of the note.
2. Edit the note text. Click outside the note or press Enter to save the changes.

**Deleting a Note**:
1. Click the delete icon (trash can) on the note you wish to delete.
2. The note will be removed from the notes container and local storage.

**Toggling Dark Mode**:
1. Click the dark mode switch button to toggle between light and dark modes.
2. The dark mode setting will be saved and persisted across sessions.

### Technologies Used
**HTML5**: For the structure of the application. <br>
**CSS3**: For styling, including Tailwind CSS for utility-first CSS classes. <br>
**JavaScript**: For the interactive functionality of the app. <br>
**Local Storage**: To save notes and dark mode state persistently in the browser. <br>

### License
This project is licensed under the MIT License. See the LICENSE file for more details.


### Acknowledgements
1. Icons used in the project are from Google Icons.
2. CSS framework used: Tailwind CSS.

### Contributing
Contributions are welcome! Please create an issue or pull request if you have suggestions or improvements.
