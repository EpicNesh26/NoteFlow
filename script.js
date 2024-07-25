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
//             selectedColor = option.getAttribute('data-color');
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

//         note.innerHTML = `
//             <div class="star flex justify-end">
//                 <span class="material-symbols-outlined">star</span>
//             </div>
//             <div class="info w-full flex relative" contenteditable="true">
//                 Click here to edit your note...
//             </div>
//             <div class="contentss flex flex-row relative bottom-0 w-full">
//                 <div class="date">
//                     <p>Date</p>
//                 </div>
//                 <div class="pencil">
//                     <span class="material-symbols-outlined">edit</span>
//                 </div>
//             </div>
//         `;

//         notesContainer.appendChild(note);
//     }

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











// AUWDHAIUWGDAWD

document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addButton');
    const colors = document.querySelector('.colors ul');
    const colorOptions = colors.querySelectorAll('li');
    let selectedColor = '';

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

    function createNote() {
        if (!selectedColor) return;

        const notesContainer = document.getElementById('notesContainer');
        const note = document.createElement('div');
        note.classList.add('note', 'border', 'w-64', 'flex', 'flex-col', 'align-middle', 'h-48', 'p-2', 'rounded-xl', 'm-2');
        note.style.backgroundColor = selectedColor;

        note.innerHTML = `
            <div class="star flex justify-end">
                <span class="material-symbols-outlined">star</span>
            </div>
            <div class="info w-full flex relative" contenteditable="true">
                <span class="placeholder">Click here to edit your note...</span>
            </div>
            <div class="contentss flex flex-row relative bottom-0 w-full">
                <div class="date">
                    <p>Date</p>
                </div>
                <div class="pencil">
                    <span class="material-symbols-outlined">edit</span>
                </div>
            </div>
        `;
        // note.innerHTML = `
        //      <div class="star flex justify-end">
        //                 <span class="material-symbols-outlined">
        //                     star
        //                     </span>
        //             </div>

        //             <div class="info w-full flex relative">
        //                 <span class="placeholder border-none border-0">Click here to edit your note...</span>
        //             </div>

        //             <div class="contentss flex flex-row relative bottom-0">

        //                 <div class="date ">
        //                     <p>Date</p>
        //                 </div>
    
        //                 <div class="pencil absolute right-0">
        //                     <span class="material-symbols-outlined">
        //                         edit
        //                         </span>
        //                 </div>
        //             </div>
        // `;

        notesContainer.appendChild(note);

        // Add event listener to remove placeholder on focus
        note.querySelector('.info').addEventListener('focus', function () {
            if (this.textContent.trim() === 'Click here to edit your note...') {
                this.textContent = '';
            }
        });

        // Add event listener to restore placeholder if empty
        note.querySelector('.info').addEventListener('blur', function () {
            if (this.textContent.trim() === '') {
                this.textContent = 'Click here to edit your note...';
            }
        });
    }

    // Initial random greeting text
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
