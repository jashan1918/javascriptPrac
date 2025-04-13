const titleInput = document.getElementById("title");
const textInput = document.getElementById("text");

const addNoteBtn = document.getElementById("addNote");
const containerDiv = document.getElementById("containerDiv");

addNoteBtn.addEventListener("click", function () {
    // Create a wrapper div for the note
    const noteDiv = document.createElement("div");
    noteDiv.style.border = "1px solid #ccc";
    noteDiv.style.padding = "10px";
    noteDiv.style.margin = "10px 0";
    noteDiv.style.borderRadius = "8px";
    noteDiv.style.backgroundColor = "#f9f9f9";

    // Title
    const titleDiv = document.createElement("h3");
    titleDiv.innerText = `Title: ${titleInput.value}`;

    // Text
    const textDiv = document.createElement("p");
    textDiv.innerText = `Content: ${textInput.value}`;

    // Append both to the noteDiv
    noteDiv.appendChild(titleDiv);
    noteDiv.appendChild(textDiv);

    // Finally append to container
    containerDiv.appendChild(noteDiv);

    // Optional: Clear inputs
    titleInput.value = "";
    textInput.value = "";
});
