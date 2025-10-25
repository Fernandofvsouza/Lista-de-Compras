let key = localStorage.getItem('key');
let listaDeCompras = key ? JSON.parse(key) : [];
let listItem = [];
//Dom elements
const inputItem = document.getElementById('add-item');
const buttonAdd = document.getElementById('add-new-item');
const ulList = document.getElementById('shopping-list');
const checkbox = document.getElementById('checkbox').value;
const textInfo = document.getElementById('text-footer');
