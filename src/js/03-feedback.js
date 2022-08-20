import throttle from "lodash.throttle";


const form = document.querySelector(`.feedback-form`);
const input = document.querySelector(`.feedback-form input`);
const textarea = document.querySelector(`.feedback-form textarea`);
const button = document.querySelector(`.feedback-form button`);

const formData = {};

const STORAGE_KEY = `feedback-form-state`;

form.addEventListener(`submit`, onFormSubmit);
input.addEventListener(`input`, onInputInput);
textarea.addEventListener(`input`, throttle(onTextareaInput, 500));

form.addEventListener(`input`, e => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    formData[e.target.name] = e.target.value;
    console.log(formData);
});


populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(`надсилаєм форму`);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onInputInput(evt) {

};

function onTextareaInput(evt) {
    const message = evt.target.value;
    
    localStorage.setItem(STORAGE_KEY, message);

};

function populateTextarea() {
    const saveMessage = localStorage.getItem(STORAGE_KEY);
    if (saveMessage) {
        console.log(saveMessage);
        textarea.value = saveMessage;
    }
};