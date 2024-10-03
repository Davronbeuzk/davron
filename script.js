document.getElementById('addButton').addEventListener('click', todo);

function todo() {
    const input = document.getElementById('Input');
    const text = input.value.trim();

    if (text === "") {
        alert("Todo ga malumot kiriting.");
        return;
    }

    const List = document.getElementById('todoList');
    const item = document.createElement('div');
    item.classList.add('Item');


    const span = document.createElement('span');
    span.textContent = text;

    const edit = document.createElement('input');
    edit.type = 'text';
    edit.value = text;
    edit.style.display = 'none';

    const editbtn = document.createElement('button');
    editbtn.classList.add('editbtn');
    editbtn.innerHTML = '<i class="fas fa-edit"></i>';

    const savebtn = document.createElement('button');
    savebtn.classList.add('savebtn');
    savebtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    savebtn.style.display = 'none';

    const deletebtn = document.createElement('button');
    deletebtn.classList.add('deletebtn');
    deletebtn.innerHTML = '<i class="fas fa-trash"></i>';

    const butonCon = document.createElement('div');
    butonCon.appendChild(editbtn);
    butonCon.appendChild(savebtn);
    butonCon.appendChild(deletebtn);

    item.appendChild(span);
    item.appendChild(edit);
    item.appendChild(butonCon);

    List.insertBefore(item, List.firstChild);

    input.value = "";

    editbtn.addEventListener('click', function() {
        span.style.display = 'none';
        edit.style.display = 'inline';
        editbtn.style.display = 'none';
        savebtn.style.display = 'inline';
    });

    savebtn.addEventListener('click', function() {
        const newText = edit.value.trim();
        if (newText !== "") {
            span.textContent = newText;
        }
        span.style.display = 'inline';
        edit.style.display = 'none';
        editbtn.style.display = 'inline';
        savebtn.style.display = 'none';
    });

    deletebtn.addEventListener('click', function() {
        List.removeChild(item);
    });
}

document.querySelector('.deleteAll').addEventListener('click', () => {
    const List = document.getElementById('todoList'); 
    List.innerHTML = ''; 
});

function searchItem() {
    let searchIn = document.querySelector(".searchin");
    let searchText = searchIn.value.toLowerCase();
    let items = document.querySelectorAll(".Item");
   


    items.forEach(item => {
        let text = item.querySelector("span").textContent.toLowerCase();
        if (text.indexOf(searchText) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}