import './style.css';
import Logo from './kklogo.png'
import content from './home';

function navbar() {
    const container = document.createElement('div');
    container.id = 'navbar';

    const logo = new Image();
    logo.src = Logo;
    logo.id = 'logo';
    container.appendChild(logo);

    let menu = ['Home', 'Galley Grub', 'Info'];
    menu.forEach((element) => {
        const menuDiv = document.createElement('div');
        menuDiv.className = 'menu-item';
        menuDiv.innerHTML = element;
        container.appendChild(menuDiv);
        menuDiv.addEventListener('click', (e) => {
            document.querySelector('#content').appendChild(content());
        });
    });
    
    return container;
}

document.querySelector('#content').appendChild(navbar());
document.querySelector('#content').appendChild(content());