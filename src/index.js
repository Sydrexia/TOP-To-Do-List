import { createForm } from './projects.js';
import './style.css';

function component() {
    const main = document.createElement('div');
    main.classList.add('main');

    const createProjectButton = document.createElement('button')
    createProjectButton.innerHTML = 'Create New Project';
    createProjectButton.addEventListener('click', () => {
        console.log('Gucci!')
        createForm();
        // This will call the various function in projects.
    })

    main.appendChild(createProjectButton);
    
    return main
}

function section() {
    const section = document.createElement('div');
    section.classList.add('section');

    return section
}

document.body.appendChild(component());
document.body.appendChild(section());