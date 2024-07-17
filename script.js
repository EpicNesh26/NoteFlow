
// document.addEventListener('DOMContentLoaded', function () {
//     const addButton = document.getElementById('addButton');
//     const colorList = document.querySelector('.colors ul');
//     const listItems = colorList.querySelectorAll('li');

//     addButton.addEventListener('mouseover', () => {
//         colorList.classList.add('visible');
//     });

//     addButton.addEventListener('click', () => {
//         colorList.classList.toggle('visible');
//     });

//     listItems.forEach(item => {
//         item.addEventListener('click', () => {
//             colorList.classList.remove('visible');
//         });

//     colorList.addEventListener('click', () => {

//     })
//     });
// });

// const colorOptions = document.querySelectorAll('#colors li');
// colorOptions.forEach(option =>
//     option.addEventListener('click',() => {
//         selectedColor = option.getAttribute('data-color')
//         colors.classList.add('hidden')
//         createNote();
//     })
// )

// function createNote(){
//     if(!selectedColor) return;

//     const notesContainer = document.getElementById('notesContainer')
//     const note = document.createElement('div')
//     note.classList.add('note', 'border' , 'w-64', 'flex', 'flex-col', 'align-middle', 'h-60', 'p-2', 'rounded-xl', 'm-2')
//     note.style.backgroundColor = selectedColor;

//     note.innerHTML =`
//         <div class="star flex justify-end">
//             <span class="material-symbols-outlined">star</span>
//         </div>
//         <div class="info w-full">
//             This is a test note.
//         </div>
//         <div class="date">
//             <p>Date</p>
//         </div>
//         <div class="pencil">
//             <span class="material-symbols-outlined">edit</span>
//         </div>
//     `;

//     notesContainer.appendChild(note);
// }



// const texts = [
//     "Welcome to NoteFlow!",
//     "Hello and Welcome to Your Notes!",
//     "Glad to Have You at NoteFlow!",
//     "Hey There, Note Taker!",
//     "Hello, Ready to Jot Down Some Ideas?",
//     "Hi! Thanks for Choosing NotesApp!",
//     "Hello! Ready to Capture Your Thoughts?",
//     "Welcome! What Will You Note Today?",
//     "Hi! Need to Organize Your Ideas? Let's Get Started!",
//     "Join Our Note-Taking Community!",
//     "Capture and Organize with NotesApp!",
//     "Hello! Let's Turn Ideas into Notes!",
//     "Your Ideas, Perfectly Organized!",
//     "Capture Every Thought with NotesApp!",
//     "Unlock Your Creativity with NotesApp!",
// ]

// function getrandomtext(arr){
//     return arr[Math.floor(Math.random() * arr.length)]
// }

// document.getElementById('dynamicText').innerHTML = getrandomtext(texts)


document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addButton');
    const colors = document.getElementById('colors');
    const colorOptions = colors.querySelectorAll('li');
    let selectedColor = '';

    addButton.addEventListener('mouseover', () => {
        colorList.classList.add('visible');
    });

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

    document.getElementById('dynamicText').innerText = texts[Math.floor(Math.random() * texts.length)];
});