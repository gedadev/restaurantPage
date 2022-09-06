import './style.css';
import Logo from './kklogo.png'
import content from './home';
import galley from './menu';
import info from './info';
const main = document.querySelector('#content');
const body = document.createElement('div');
body.id = 'body';

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
            if (element.toLowerCase() === 'home') {
                while (body.firstChild) {
                    body.removeChild(body.lastChild);
                }
                body.appendChild(content());
            }
            if (element.toLowerCase() === 'galley grub') {
                while (body.firstChild) {
                    body.removeChild(body.lastChild);
                }
                body.appendChild(galley());
            }
            if (element.toLowerCase() === 'info') {
                while (body.firstChild) {
                    body.removeChild(body.lastChild);
                }
                body.appendChild(info());
            }
        });
    });
    
    return container;
}

main.appendChild(navbar());
main.appendChild(body);
body.appendChild(content());