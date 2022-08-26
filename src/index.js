import './style.css';
import Logo from './kklogo.png'

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
    });
  
    return container;
}
  
document.body.appendChild(navbar());