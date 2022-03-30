const projectFactory = (title, description, due, priority) => {
    return { title, description, due, priority };
}

let projectLibrary = [];

export function createForm() {
    const main = document.querySelector('.main');

    const projectForm = document.createElement('form');

    const titleLabel = document.createElement('label')
    titleLabel.setAttribute('for', 'title');
    titleLabel.innerHTML = 'Title';
    
    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('id', 'title');
    title.setAttribute('name', 'title');
    title.setAttribute('placeholder', 'Title');

    const descriptionLabel = document.createElement('label')
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.innerHTML = 'Description';
    
    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.setAttribute('id', 'description');
    description.setAttribute('name', 'description');
    description.setAttribute('placeholder', 'Description');

    const dueLabel = document.createElement('label')
    dueLabel.setAttribute('for', 'due');
    dueLabel.innerHTML = 'Due Date';
    
    const due = document.createElement('input');
    due.setAttribute('type', 'text');
    due.setAttribute('id', 'due');
    due.setAttribute('name', 'due');
    due.setAttribute('placeholder', 'Due Date');

    const priorityLabel = document.createElement('label')
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.innerHTML = 'Priority';
    
    const priority = document.createElement('input');
    priority.setAttribute('type', 'text');
    priority.setAttribute('id', 'priority');
    priority.setAttribute('name', 'priority');
    priority.setAttribute('placeholder', 'Priority');

    const submitBtn = document.createElement('button');
    submitBtn.innerHTML = 'Submit';
    submitBtn.classList.add('submit-button');
    submitBtn.addEventListener('click', function getTarget(e) {
        e.preventDefault();
        addProjectToLibrary();
        publishProjects();
    })

    main.appendChild(projectForm);

    projectForm.appendChild(titleLabel);
    projectForm.appendChild(descriptionLabel);
    projectForm.appendChild(dueLabel);
    projectForm.appendChild(priorityLabel);

    projectForm.appendChild(title);
    projectForm.appendChild(description);
    projectForm.appendChild(due);
    projectForm.appendChild(priority);

    main.appendChild(submitBtn);
};

function addProjectToLibrary() {
    const titleInput = document.getElementById('title').value;
    console.log(titleInput)
    const descriptionInput = document.getElementById('description').value;
    console.log(descriptionInput)
    const dueInput = document.getElementById('due').value;
    console.log(dueInput)
    const priorityInput = document.getElementById('priority').value;
    console.log(priorityInput)

    const newProject = projectFactory(titleInput, descriptionInput, dueInput, priorityInput);
    console.log(newProject);

    projectLibrary.push(newProject);
}

function publishProjects() {
    const section = document.querySelector('.section');
    section.innerHTML = null;

    for (let i = 0; i < projectLibrary.length; i++) {
        const newDiv = document.createElement('div');
        const newTitle = document.createElement('p');
        const newDescription = document.createElement('p');
        const newDue = document.createElement('p');
        const newPriority = document.createElement('p');

        newTitle.innerHTML = projectLibrary[i].title;
        newDescription.innerHTML = projectLibrary[i].description;
        newDue.innerHTML = projectLibrary[i].due;
        newPriority.innerHTML = projectLibrary[i].priority;

        newDiv.classList.add('card');
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newDescription);
        newDiv.appendChild(newDue);
        newDiv.appendChild(newPriority);
        section.appendChild(newDiv);
    }
}
