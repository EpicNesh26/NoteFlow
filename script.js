
// // document.addEventListener('DOMContentLoaded', function () {
// //     const addButton = document.getElementById('addButton');
// //     const colors = document.querySelector('.colors ul');
// //     const colorOptions = colors.querySelectorAll('li');
// //     let selectedColor = '';

// //     addButton.addEventListener('mouseover', () => {
// //         colors.classList.toggle('visible');
// //     });

// //     colorOptions.forEach(option => {
// //         option.addEventListener('click', () => {
// //             selectedColor = option.getAttribute('data-color');
// //             colors.classList.remove('visible');
// //             createNote();
// //         });
// //     });

// //     function createNote() {
// //         if (!selectedColor) return;

// //         const notesContainer = document.getElementById('notesContainer');
// //         const note = document.createElement('div');
// //         note.classList.add('note', 'border', 'w-64', 'flex', 'flex-col', 'align-middle', 'h-60', 'p-2', 'rounded-xl', 'm-2');
// //         note.style.backgroundColor = selectedColor;

// //         console.log("It works")
// //         // note.innerHTML = `
// //         //     <div class="star flex justify-end">
// //         //         <span class="material-symbols-outlined">star</span>
// //         //     </div>
// //         //     <div class="info w-full">
// //         //         This is a test note.
// //         //     </div>
// //         //     <div class="date">
// //         //         <p>Date</p>
// //         //     </div>
// //         //     <div class="pencil">
// //         //         <span class="material-symbols-outlined">edit</span>
// //         //     </div>
// //         // `;

// //         // notesContainer.appendChild(note);
// //     }

// //     // Initial random greeting text
// //     const texts = [
// //         "Welcome to NoteFlow!",
// //         "Hello and Welcome to Your Notes!",
// //         "Glad to Have You at NoteFlow!",
// //         "Hey There, Note Taker!",
// //         "Hello, Ready to Jot Down Some Ideas?",
// //         "Hi! Thanks for Choosing NotesApp!",
// //         "Hello! Ready to Capture Your Thoughts?",
// //         "Welcome! What Will You Note Today?",
// //         "Hi! Need to Organize Your Ideas? Let's Get Started!",
// //         "Join Our Note-Taking Community!",
// //         "Capture and Organize with NotesApp!",
// //         "Hello! Let's Turn Ideas into Notes!",
// //         "Your Ideas, Perfectly Organized!",
// //         "Capture Every Thought with NotesApp!",
// //         "Unlock Your Creativity with NotesApp!",
// //     ];

// //     function getRandomText(arr) {
// //         return arr[Math.floor(Math.random() * arr.length)];
// //     }

// //     document.getElementById('dynamicText').innerText = getRandomText(texts);
// // });

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
//             colors.classList.add('visible');
//             createNote();
//         });
//     });

//     function createNote() {
//         if (!selectedColor) return;

//         const notesContainer = document.getElementById('notesContainer');
//         const note = document.createElement('div');
//         note.classList.add('note', 'border', 'w-64', 'flex', 'flex-col', 'align-middle', 'h-60', 'p-2', 'rounded-xl', 'm-2');
//         note.style.backgroundColor = selectedColor;

//         note.innerHTML = `
//             <div class="star flex justify-end">
//                 <span class="material-symbols-outlined">star</span>
//             </div>
//             <div class="info w-full">
//                 This is a test note.
//             </div>
//             <div class="date">
//                 <p>Date</p>
//             </div>
//             <div class="pencil">
//                 <span class="material-symbols-outlined">edit</span>
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
            selectedColor = option.getAttribute('data-color');
            colors.classList.remove('visible');
            createNote();
        });
    });

    function createNote() {
        if (!selectedColor) return;

        const notesContainer = document.getElementById('notesContainer');
        const note = document.createElement('div');
        note.classList.add('note', 'border', 'w-64', 'flex', 'flex-col', 'align-middle', 'h-60', 'p-2', 'rounded-xl', 'm-2');
        note.style.backgroundColor = selectedColor;

        note.innerHTML = `
            <div class="star flex justify-end">
                <span class="material-symbols-outlined">star</span>
            </div>
            <div class="info w-full">
                This is a test note.
            </div>
            <div class="date">
                <p>Date</p>
            </div>
            <div class="pencil">
                <span class="material-symbols-outlined">edit</span>
            </div>
        `;

        notesContainer.appendChild(note);
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
