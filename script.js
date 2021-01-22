var form = document.getElementById('container');

var object = JSON.parse(localStorage.getItem('object'));
if(object==null){
    object={
        list:{},
    };
}
localStorage.setItem('object', JSON.stringify(object));
create();
form.addEventListener('submit',function(e){
    e.preventDefault();
    var val = document.getElementById('addtodo').value;
    var date = document.getElementById('date').value;
    object.list[val] = date;
    create();
    localStorage.setItem('object',JSON.stringify(object));
    form.reset();
});

function create(){
    document.getElementById('result').innerHTML = "";
    var tbody = document.getElementById('result');

    for(value in object.list){
        var newRow = tbody.insertRow();
        var newCell = newRow.insertCell();
        var newToDo = document.createTextNode(value);
        

        var newCell2 = newRow.insertCell();
        var newToDo2 = document.createTextNode(object.list[value]);
        

        var newCell1 = newRow.insertCell();
        var button = document.createElement('button');
        button.innerHTML = 'X';
        button.style.backgroundColor = 'red';
        button.value = value;
        button.addEventListener('click',function(){
            delete object.list[this.value];
            localStorage.setItem('object', JSON.stringify(object));
            create();
        });
        newCell.append(newToDo);
        newCell2.append(newToDo2);
        newCell1.append(button);
    }
}
