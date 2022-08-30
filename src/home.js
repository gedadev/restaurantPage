import mrKrabs from './MrKrabs.png'

export default function content() {
    const body = document.createElement('div');
    body.id = 'home';

    const picture = new Image();
    picture.src = mrKrabs;
    picture.id = 'picture';
    body.appendChild(picture);

    const greeting = document.createElement('div');
    greeting.innerHTML = 'Welcome to the Krusty Krab, the home of the Krabby Patty.';
    greeting.id = 'greeting';
    body.appendChild(greeting);

    return body;
}