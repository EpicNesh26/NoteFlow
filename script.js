document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addButton');
    const colors = document.querySelector('.colors ul');
    const colorOptions = colors.querySelectorAll('li');
    let selectedColor = '';

    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const darkModeIcon = darkModeSwitch.querySelector('.dark-mode-icon');
    const brightnessModeIcon = darkModeSwitch.querySelector('.brightness-mode-icon');

    // Load mode from localStorage
    const darkModeEnabled = JSON.parse(localStorage.getItem('darkModeEnabled'));
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
        // document.body.classList.add('dark-gradient');
        document.body.classList.add('thiscolor');
        darkModeIcon.classList.add('hidden');
        brightnessModeIcon.classList.remove('hidden');
    }

    darkModeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // document.body.classList.toggle('dark-gradient');
        document.body.classList.toggle('thiscolor');
        darkModeIcon.classList.toggle('hidden');
        brightnessModeIcon.classList.toggle('hidden');
        localStorage.setItem('darkModeEnabled', document.body.classList.contains('dark-mode'));
    });

    addButton.addEventListener('click', () => {
        colors.classList.toggle('visible');
    });

    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            selectedColor = option.style.backgroundColor;
            colors.classList.remove('visible');
            createNote();
        });
    });

    let noteIdCounter = 0;

    function createNote(content = 'Click here to edit your note...', color = selectedColor, date = new Date().toLocaleDateString(), isStarred = false, id = null) {
        if (!color) return;

        const notesContainer = document.getElementById('notesContainer');
        const note = document.createElement('div');
        note.classList.add('note', 'border', 'w-64', 'flex', 'flex-col', 'align-middle', 'h-48', 'p-2', 'rounded-xl', 'm-2');
        note.style.backgroundColor = color;

        if (!id) {
            id = noteIdCounter++;
        }
        note.dataset.id = id;

        note.innerHTML = `
            <div class="star flex align-middle relative p-0 right-1 rounded-full items-center">
                <span class="material-symbols-outlined absolute cursor-pointer right-0 pt-5 z-10" style="font-size:x-larger; color: ${isStarred ? 'gold' : 'initial'};">
                    star
                </span>
            </div>
            <div class="info w-full flex relative overflow-wrap-anywhere whitespace-normal overflow-scroll" contenteditable="true">
                ${content}
            </div>
            <div class="contentss flex flex-row relative bottom-0 w-full">
                <div class="date p-2 text-xs">
                    <p>${date}</p>
                </div>
                <div class="export flex align-middle absolute right-10 cursor-pointer pt-1.5 p-1 rounded-full items-center">
                    <span class="material-symbols-outlined" style="font-size:large">
                        ios_share
                    </span>
                </div>
                <div class="pencil flex align-middle absolute right-0 bg-white cursor-pointer p-1 rounded-full items-center">
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </div>
            </div>
        `;

        if (isStarred) {
            notesContainer.insertBefore(note, notesContainer.firstChild);
        } else {
            const starredNotes = Array.from(notesContainer.querySelectorAll('.note .star span[style*="gold"]')).map(el => el.closest('.note'));
            if (starredNotes.length > 0) {
                notesContainer.insertBefore(note, starredNotes[starredNotes.length - 1].nextSibling);
            } else {
                notesContainer.insertBefore(note, notesContainer.firstChild);
            }
        }

        const infoDiv = note.querySelector('.info');
        const deleteIcon = note.querySelector('.pencil span');
        const exportIcon = note.querySelector('.export span');
        const starIcon = note.querySelector('.star span');

        deleteIcon.addEventListener('click', function () {
            note.remove();
            saveNotes();
        });

        exportIcon.addEventListener('click', function () {
            const notesContent = infoDiv.innerHTML.trim();
            downloadAsText(notesContent, date);
        });

        starIcon.addEventListener('click', function () {
            const starredNotes = document.querySelectorAll('.note .star span[style*="gold"]').length;
            if (!isStarred && starredNotes >= 5) {
                alert('You can only star up to 5 notes.');
                return;
            }

            isStarred = !isStarred;
            starIcon.style.color = isStarred ? 'gold' : 'initial';

            note.remove();
            if (isStarred) {
                notesContainer.insertBefore(note, notesContainer.firstChild);
            } else {
                const starredNotes = Array.from(notesContainer.querySelectorAll('.note .star span[style*="gold"]')).map(el => el.closest('.note'));
                if (starredNotes.length > 0) {
                    notesContainer.insertBefore(note, starredNotes[starredNotes.length - 1].nextSibling);
                } else {
                    notesContainer.insertBefore(note, notesContainer.firstChild);
                }
            }

            saveNotes();
        });

        infoDiv.addEventListener('focus', function () {
            if (this.textContent.trim() === 'Click here to edit your note...') {
                this.textContent = '';
            }
        });

        infoDiv.addEventListener('blur', function () {
            if (this.textContent.trim() === '') {
                this.textContent = 'Click here to edit your note...';
            }
            saveNotes();
        });

        infoDiv.addEventListener('input', function () {
            saveNotes();
        });

        saveNotes();
    }
    

    function saveNotes() {
        const notes = [];
        document.querySelectorAll('.note').forEach(note => {
            const content = note.querySelector('.info').innerHTML.trim();
            const color = note.style.backgroundColor;
            const date = note.querySelector('.date p').textContent;
            const isStarred = note.querySelector('.star span').style.color === 'yellow';
            const id = note.dataset.id;
            notes.push({ content, color, date, isStarred, id });
        });
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.sort((a, b) => {
            if (a.isStarred && !b.isStarred) return -1;
            if (!a.isStarred && b.isStarred) return 1;
            return b.id - a.id; // Newest first
        });
        notes.forEach(note => {
            createNote(note.content, note.color, note.date, note.isStarred, note.id);
        });
    }

    function downloadAsText(content, date) {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `note_${date}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // Dynamic text for the heading
    const texts = [
        "Welcome to NoteFlow!",
        "Hello and Welcome to Your Notes!",
        "Glad to Have You at NoteFlow!",
        "Hey There, Note Taker!",
        "Hello, Ready to Jot Down Some Ideas?",
        "Hi! Thanks for Choosing NotesApp!",
        "Hello! Ready to Capture Your Thoughts?",
        "Welcome! What Will You Note Today?",
        "Hi! Need to Organize Your Ideas? Let's Get Started!",
        "Join Our Note-Taking Community!",
        "Capture and Organize with NotesApp!",
        "Hello! Let's Turn Ideas into Notes!",
        "Your Ideas, Perfectly Organized!",
        "Capture Every Thought with NotesApp!",
        "Unlock Your Creativity with NotesApp!"
    ];

    function getRandomText(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    
    document.getElementById('dynamicText').innerText = getRandomText(texts);

    // Load notes from localStorage on page load
    loadNotes();
});
