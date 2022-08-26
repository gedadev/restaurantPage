import './style.css';
import Logo from './kklogo.png'

function navbar() {
    const element = document.createElement('div');
    element.id = 'navbar';

    const logo = new Image();
    logo.src = Logo;
    logo.id = 'logo';
    element.appendChild(logo);
  
    return element;
}
  
document.body.appendChild(navbar());