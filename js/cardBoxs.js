// ---------------------Card - 1 -----------------------------

document.getElementById('cardBtn-1').addEventListener('click', function () {
    alert('Board Update Successfully')



    // Minus-the Task Assigned points in a click =>

    const taskAssigned = document.getElementById('Minus-point').innerText;
    const convartedTaskAssigned = parseFloat(taskAssigned);
    const minus = convartedTaskAssigned - 1;
    if (minus === 0) {
        alert('Congrats!!! You have Completed all the current task')
    }
    else {

    }
    document.getElementById('Minus-point').innerText = minus;

    // Sum-the Task Assigned points in a click =>

    const navBarPoint = document.getElementById('navbar-point').innerText;
    const convartedNavBarPoint = parseFloat(navBarPoint);
    const sum = convartedNavBarPoint + 1;
    document.getElementById('navbar-point').innerText = sum;

    let now = new Date();
    let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const theHistory = document.getElementById('Activity-History')

    const cardTitle1 = document.getElementById('card-1-title').innerText;


    const div = document.createElement('div');

    div.innerHTML = `
<h1 id="popHistory1" class="h-auto w-auto bg-[#F4F7FF] mt-7 ml-7 mr-4 rounded-lg px-3 py-3" > You have Complete The Task ${cardTitle1} at ${currentTime} </h1>
`
    theHistory.appendChild(div);

    document.getElementById('clearHistoryBtn').addEventListener('click', function () {
        document.getElementById('popHistory1').style.display = 'none';
    })
})

function btn1Disabled() {
    document.getElementById('cardBtn-1').disabled = true;
}
// ---------------------Card - 2 -----------------------------

document.getElementById('cardBtn-2').addEventListener('click', function () {
    alert('Board Update Successfully')



    // Minus-the Task Assigned points in a click =>

    const taskAssigned = document.getElementById('Minus-point').innerText;
    const convartedTaskAssigned = parseFloat(taskAssigned);
    const minus = convartedTaskAssigned - 1;
    if (minus === 0) {
        alert('Congrats!!! You have Completed all the current task')
    }
    else {

    }
    document.getElementById('Minus-point').innerText = minus;

    // Sum-the Task Assigned points in a click =>

    const navBarPoint = document.getElementById('navbar-point').innerText;
    const convartedNavBarPoint = parseFloat(navBarPoint);
    const sum = convartedNavBarPoint + 1;
    document.getElementById('navbar-point').innerText = sum;

    let now = new Date();
    let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const theHistory = document.getElementById('Activity-History')

    const cardTitle1 = document.getElementById('card-2-title').innerText;


    const div = document.createElement('div');

    div.innerHTML = `
<h1 id="popHistory2" class="h-auto w-auto bg-[#F4F7FF] mt-7 ml-7 mr-4 rounded-lg px-3 py-3" > You have Complete The Task ${cardTitle1} at ${currentTime} </h1>
`
    theHistory.appendChild(div);

    document.getElementById('clearHistoryBtn').addEventListener('click', function () {
        document.getElementById('popHistory2').style.display = 'none';
    })
})

function btn2Disabled() {
    document.getElementById('cardBtn-2').disabled = true;
}
// ---------------------Card - 3 -----------------------------

document.getElementById('cardBtn-3').addEventListener('click', function () {
    alert('Board Update Successfully')



    // Minus-the Task Assigned points in a click =>

    const taskAssigned = document.getElementById('Minus-point').innerText;
    const convartedTaskAssigned = parseFloat(taskAssigned);
    const minus = convartedTaskAssigned - 1;
    if (minus === 0) {
        alert('Congrats!!! You have Completed all the current task')
    }
    else {

    }
    document.getElementById('Minus-point').innerText = minus;

    // Sum-the Task Assigned points in a click =>

    const navBarPoint = document.getElementById('navbar-point').innerText;
    const convartedNavBarPoint = parseFloat(navBarPoint);
    const sum = convartedNavBarPoint + 1;
    document.getElementById('navbar-point').innerText = sum;

    let now = new Date();
    let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const theHistory = document.getElementById('Activity-History')

    const cardTitle1 = document.getElementById('card-3-title').innerText;


    const div = document.createElement('div');

    div.innerHTML = `
<h1 id="popHistory3" class="h-auto w-auto bg-[#F4F7FF] mt-7 ml-7 mr-4 rounded-lg px-3 py-3" > You have Complete The Task ${cardTitle1} at ${currentTime} </h1>
`
    theHistory.appendChild(div);

    document.getElementById('clearHistoryBtn').addEventListener('click', function () {
        document.getElementById('popHistory3').style.display = 'none';
    })
})

function btn3Disabled() {
    document.getElementById('cardBtn-3').disabled = true;
}
// ---------------------Card - 4 -----------------------------

document.getElementById('cardBtn-4').addEventListener('click', function () {
    alert('Board Update Successfully')



    // Minus-the Task Assigned points in a click =>

    const taskAssigned = document.getElementById('Minus-point').innerText;
    const convartedTaskAssigned = parseFloat(taskAssigned);
    const minus = convartedTaskAssigned - 1;
    if (minus === 0) {
        alert('Congrats!!! You have Completed all the current task')
    }
    else {

    }
    document.getElementById('Minus-point').innerText = minus;

    // Sum-the Task Assigned points in a click =>

    const navBarPoint = document.getElementById('navbar-point').innerText;
    const convartedNavBarPoint = parseFloat(navBarPoint);
    const sum = convartedNavBarPoint + 1;
    document.getElementById('navbar-point').innerText = sum;

    let now = new Date();
    let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const theHistory = document.getElementById('Activity-History')

    const cardTitle1 = document.getElementById('card-4-title').innerText;


    const div = document.createElement('div');

    div.innerHTML = `
<h1 id="popHistory4" class="h-auto w-auto bg-[#F4F7FF] mt-7 ml-7 mr-4 rounded-lg px-3 py-3" > You have Complete The Task ${cardTitle1} at ${currentTime} </h1>
`
    theHistory.appendChild(div);

    document.getElementById('clearHistoryBtn').addEventListener('click', function () {
        document.getElementById('popHistory4').style.display = 'none';
    })
})

function btn4Disabled() {
    document.getElementById('cardBtn-4').disabled = true;
}
// ---------------------Card - 5 -----------------------------

document.getElementById('cardBtn-5').addEventListener('click', function () {
    alert('Board Update Successfully')



    // Minus-the Task Assigned points in a click =>

    const taskAssigned = document.getElementById('Minus-point').innerText;
    const convartedTaskAssigned = parseFloat(taskAssigned);
    const minus = convartedTaskAssigned - 1;
    if (minus === 0) {
        alert('Congrats!!! You have Completed all the current task')
    }
    else {

    }
    document.getElementById('Minus-point').innerText = minus;

    // Sum-the Task Assigned points in a click =>

    const navBarPoint = document.getElementById('navbar-point').innerText;
    const convartedNavBarPoint = parseFloat(navBarPoint);
    const sum = convartedNavBarPoint + 1;
    document.getElementById('navbar-point').innerText = sum;

    let now = new Date();
    let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const theHistory = document.getElementById('Activity-History')

    const cardTitle1 = document.getElementById('card-5-title').innerText;


    const div = document.createElement('div');

    div.innerHTML = `
<h1 id="popHistory5" class="h-auto w-auto bg-[#F4F7FF] mt-7 ml-7 mr-4 rounded-lg px-3 py-3" > You have Complete The Task ${cardTitle1} at ${currentTime} </h1>
`
    theHistory.appendChild(div);

    document.getElementById('clearHistoryBtn').addEventListener('click', function () {
        document.getElementById('popHistory5').style.display = 'none';
    })

})

function btn5Disabled() {
    document.getElementById('cardBtn-5').disabled = true;
}
// ---------------------Card - 6 -----------------------------

document.getElementById('cardBtn-6').addEventListener('click', function () {
    alert('Board Update Successfully')



    // Minus-the Task Assigned points in a click =>

    const taskAssigned = document.getElementById('Minus-point').innerText;
    const convartedTaskAssigned = parseFloat(taskAssigned);
    const minus = convartedTaskAssigned - 1;



    if (minus === 0) {
        alert('Congrats!!! You have Completed all the current task')
    }
    else {

    }

    document.getElementById('Minus-point').innerText = minus;

    // Sum-the Task Assigned points in a click =>

    const navBarPoint = document.getElementById('navbar-point').innerText;
    const convartedNavBarPoint = parseFloat(navBarPoint);
    const sum = convartedNavBarPoint + 1;
    document.getElementById('navbar-point').innerText = sum;

    let now = new Date();
    let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const theHistory = document.getElementById('Activity-History')

    const cardTitle1 = document.getElementById('card-6-title').innerText;


    const div = document.createElement('div');

    div.innerHTML = `
<h1 id="popHistory6" class="h-auto w-auto bg-[#F4F7FF] mt-7 ml-7 mr-4 rounded-lg px-3 py-3" > You have Complete The Task ${cardTitle1} at ${currentTime} </h1>
`
    theHistory.appendChild(div);

    document.getElementById('clearHistoryBtn').addEventListener('click', function () {
        document.getElementById('popHistory6').style.display = 'none';
    })

})

function btn6Disabled() {
    document.getElementById('cardBtn-6').disabled = true;
}




