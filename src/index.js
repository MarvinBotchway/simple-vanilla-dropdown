import './styles.css';

const Content = document.getElementById('content');
const Heading = document.createElement('h2');

Heading.textContent = 'Hello World!';
Content.appendChild(Heading);
