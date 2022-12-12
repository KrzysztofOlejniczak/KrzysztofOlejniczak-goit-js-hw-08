'use strict';

import throttle from 'lodash.throttle';

const FORM_STORAGE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const formEmail = document.querySelector('[name="email"]');
const formMessage = document.querySelector('[name="message"]');

const saveData = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const loadData = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const restoreFromStorage = () => {
  try {
    const dataFromStorage = loadData(FORM_STORAGE_KEY);
    if (dataFromStorage !== undefined) {
      console.log(
        `Data from storage:\n  email: ${dataFromStorage.email}\n  msg: ${dataFromStorage.message}`
      );
    }
    formEmail.value = dataFromStorage.email;
    formMessage.value = dataFromStorage.message;
  } catch (error) {
    console.log('There is no saved data in local storage');
  }
};

const getFormData = () => {
  const formData = { email: formEmail.value, message: formMessage.value };
  saveData(FORM_STORAGE_KEY, formData);
};

const formSubmit = event => {
  event.preventDefault();
  localStorage.removeItem(FORM_STORAGE_KEY);
  const formData = { email: formEmail.value, message: formMessage.value };
  console.log(formData);
  event.currentTarget.reset();
};

window.addEventListener('load', restoreFromStorage);
feedbackForm.addEventListener(
  'input',
  throttle(event => {
    getFormData(event);
  }, 500)
);
feedbackForm.addEventListener('submit', formSubmit);
