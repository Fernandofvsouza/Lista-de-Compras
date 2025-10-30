let listItem = [];
//Dom elements
const inputItem = document.getElementById('add-item');
const buttonAdd = document.getElementById('add-new-item');
const ulList = document.getElementById('shopping-list');
const checkbox = document.getElementById('checkbox').value;
const textInfo = document.getElementById('text-footer');
const btnDelete = document.getElementById('icon-delete');
//Event Listeners
buttonAdd.addEventListener('click',addItem);
ulList.addEventListener('click', (event) => {
    if (event.target.classList.contains('icon-delete')) {
      const li = event.target.parentElement;
      li.remove();
      textInfo.style.display = 'flex';
      setInterval(()=>{
        textInfo.style.display = 'none';
      }, 3000)
    }
  });

//Functions
function addItem(){
    let item = inputItem.value.trim();
    if(item == ''){
        alert('Por favor digite um item');
        return;
    }
    else{
        listItem.push(item);
        createItem(item);

    }
}


function createItem(item){
     // Criando a li
    let li = document.createElement('li');
    li.className = 'item-list'; 
    

  // Criando o checkbox
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'input-checkbox';

  // Criando o label
  let label = document.createElement('label');
  label.className = 'title-item';
  label.innerText = item;
  

  // Criando a imagem de delete
  let imgDelete = document.createElement('img');
  imgDelete.src = '/assets/icon delete.png';
  imgDelete.className = 'icon-delete';

  // Montando tudo
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(imgDelete);
  ulList.appendChild(li);

  // Limpa o input
  inputItem.value = '';
}


