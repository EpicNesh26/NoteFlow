// // AJHDAWD
// document.addEventListener('DOMContentLoaded', function () {
//     const addButton = document.getElementById('addButton');
//     const colors = document.querySelector('.colors ul');
//     const colorOptions = colors.querySelectorAll('li');
//     let selectedColor = '';

//     addButton.addEventListener('click', () => {
//         colors.classList.toggle('visible');
//     });

//     colorOptions.forEach(option => {
//         option.addEventListener('click', () => {
//             selectedColor = option.style.backgroundColor;
//             colors.classList.remove('visible');
//             createNote();
//         });
//     });

//     function createNote() {
//         if (!selectedColor) return;

//         const notesContainer = document.getElementById('notesContainer');
//         const note = document.createElement('div');
//         note.classList.add('note', 'border', 'w-64', 'flex', 'flex-col', 'align-middle', 'h-48', 'p-2', 'rounded-xl', 'm-2');
//         note.style.backgroundColor = selectedColor;

//         const currentDate = new Date().toLocaleDateString();


//     //     <div class="star flex justify-end">
//     //     <span class="material-symbols-outlined cursor-pointer text-sm text-white p-1  flex align-middle text-center ">star</span>
//     // </div>
//         note.innerHTML = `

//             <div class="info text-sm w-full flex relative overflow-wrap-anywhere whitespace-normal overflow-scroll flex-wrap" contenteditable="true" style="overflow-wrap: anywhere">
//                 Click here to edit your note...
//             </div>
//             <div class="contentss flex flex-row relative bottom-0 w-full">
//                 <div class="date p-2 text-xs">
//                     <p>${currentDate}</p>
//                 </div>
//                 <div class="pencil flex align-middle absolute right-0 bg-white cursor-pointer p-1 rounded-full items-center">
//                     <span class="material-symbols-outlined">
// delete
// </span>
//                 </div>
//             </div>
//         `;

//         notesContainer.appendChild(note);

//         const infoDiv = note.querySelector('.info');
//         // const starIcon = note.querySelector('.star span');

//         // // Add event listener to toggle star color
//         // starIcon.addEventListener('click', function () {
//         //     if (this.style.color === 'black') {
//         //         this.style.color = '';
//         //     } else {
//         //         this.style.color = 'black';
//         //     }
//         // });

//         // Add event listener to remove placeholder on focus
//         infoDiv.addEventListener('focus', function () {
//             if (this.textContent.trim() === 'Click here to edit your note...') {
//                 this.textContent = '';
//             }
//         });

//         // Add event listener to restore placeholder if empty
//         infoDiv.addEventListener('blur', function () {
//             if (this.textContent.trim() === '') {
//                 this.textContent = 'Click here to edit your note...';
//             }
//             saveNotes();
//         });

//         saveNotes();
//     }

//     function saveNotes() {
//         const notes = [];
//         document.querySelectorAll('.note').forEach(note => {
//             const content = note.querySelector('.info').textContent.trim();
//             const color = note.style.backgroundColor;
//             const date = note.querySelector('.date p').textContent;
//             const isStarred = note.querySelector('.star span').style.color === 'gold';
//             notes.push({ content, color, date, isStarred });
//         });
//         localStorage.setItem('notes', JSON.stringify(notes));
//     }

//     function loadNotes() {
//         const notes = JSON.parse(localStorage.getItem('notes')) || [];
//         notes.forEach(note => {
//             createNote(note.content, note.color, note.date, note.isStarred);
//         });
//     }

//     // Load notes from localStorage on page load
//     loadNotes();

//     // Initial random greeting text
//     const texts = [
//         "Welcome to NoteFlow!",
//         "Hello and Welcome to Your Notes!",
//         "Glad to Have You at NoteFlow!",
//         "Hey There, Note Taker!",
//         "Hello, Ready to Jot Down Some Ideas?",
//         "Hi! Thanks for Choosing NotesApp!",
//         "Hello! Ready to Capture Your Thoughts?",
//         "Welcome! What Will You Note Today?",
//         "Hi! Need to Organize Your Ideas? Let's Get Started!",
//         "Join Our Note-Taking Community!",
//         "Capture and Organize with NotesApp!",
//         "Hello! Let's Turn Ideas into Notes!",
//         "Your Ideas, Perfectly Organized!",
//         "Capture Every Thought with NotesApp!",
//         "Unlock Your Creativity with NotesApp!",
//     ];

//     function getRandomText(arr) {
//         return arr[Math.floor(Math.random() * arr.length)];
//     }

//     document.getElementById('dynamicText').innerText = getRandomText(texts);
// });


document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addButton');
    const colors = document.querySelector('.colors ul');
    const colorOptions = colors.querySelectorAll('li');
    let selectedColor = '';


    const darkModeIcon = darkModeSwitch.querySelector('.dark-mode-icon');
    const brightnessModeIcon = darkModeSwitch.querySelector('.brightness-mode-icon');

    // Load mode from localStorage
    const darkModeEnabled = JSON.parse(localStorage.getItem('darkModeEnabled'));
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
        darkModeIcon.classList.add('hidden');
        brightnessModeIcon.classList.remove('hidden');
    }

    darkModeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
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

    function createNote(content = 'Click here to edit your note...', color = selectedColor, date = new Date().toLocaleDateString(), isStarred = false) {
        if (!color) return;

        const notesContainer = document.getElementById('notesContainer');
        const note = document.createElement('div');
        note.classList.add('note', 'border', 'w-64', 'flex', 'flex-col', 'align-middle', 'h-48', 'p-2', 'rounded-xl', 'm-2');
        note.style.backgroundColor = color;

        note.innerHTML = `
            
            <div class="info w-full flex relative overflow-wrap-anywhere whitespace-normal overflow-scroll" contenteditable="true">
                ${content}
            </div>
            <div class="contentss flex flex-row relative bottom-0 w-full">
                <div class="date p-2 text-xs">
                    <p>${date}</p>
                </div>
                <div class="pencil flex align-middle absolute right-0 bg-white cursor-pointer p-1 rounded-full items-center">
                    <span class="material-symbols-outlined">
delete
</span>
                </div>
            </div>
        `;

        notesContainer.appendChild(note);

        const infoDiv = note.querySelector('.info');
        const deleteIcon = note.querySelector('.pencil span')
        // const starIcon = note.querySelector('.star span');

        // starIcon.addEventListener('click', function () {
        //     if (this.style.color === 'gold') {
        //         this.style.color = '';
        //     } else {
        //         this.style.color = 'gold';
        //     }
        //     saveNotes();
        // });

        deleteIcon.addEventListener('click', function(){
            note.remove();
            saveNotes();
        })

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
            // const isStarred = note.querySelector('.star span').style.color === 'gold';
            notes.push({ content, color, date });
        });
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.forEach(note => {
            createNote(note.content, note.color, note.date);
        });
    }

    // Load notes from localStorage on page load
    loadNotes();

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
        "Unlock Your Creativity with NotesApp!",
    ];

    function getRandomText(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    

    document.getElementById('dynamicText').innerText = getRandomText(texts);
});
