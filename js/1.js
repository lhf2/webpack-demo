export default(text = 'hello world')=>{
    const element = document.createElement('p');
    element.innerHTML = text;

    const  p = document.createElement('input');
    p.type = 'checkbox';

    element.appendChild(p);

    return element;
}
