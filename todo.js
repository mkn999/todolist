inputbox = document.querySelector('.inputbox');
duedatebox = document.querySelector('.duedate');
sumbitButton = document.querySelector('.sumbitButton');
mytasks = [];
displayList();

function displayList(){
    alltasks = '';
        for(let i=0;i<mytasks.length;i++){
                task = mytasks[i];
                let {name,duedate} = task
                html = `<p class="taskname" >${name} ${duedate}&nbsp;<button onclick="
                mytasks.splice(${i},1);
                displayList();
                " class="deleteButton">Finished</button> </p>`;
                alltasks += html;
            }
tasks = document.querySelector('.tasks')
    .innerHTML = alltasks;
}


function test(){
    inputbox = document.querySelector('.inputbox');
    duedatebox = document.querySelector('.duedate');
    name = inputbox.value;
    duedate = duedatebox.value;
    mytasks.push({
        name:name,
        duedate:duedate,
    })
    console.log(mytasks)
}
function addElements(){
    inputbox = document.querySelector('.inputbox');
    duedatebox = document.querySelector('.duedate');
        if (inputbox.value === '') {
            alert('please enter a task and submit...');
        } 
        else{
            content = inputbox.value;
            content2 = duedatebox.value;
            mytasks.push({
                name:content,
                duedate:content2,
        });
        inputbox.value='';
        displayList();
        }

}
//add task storage <--

