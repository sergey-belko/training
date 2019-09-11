(function call() {
  console.log('*************************************');
  console.log('Node creation, update, delete');

  const div = document.createElement('div');
  div.style.background = 'red';
  div.textContent = 'Text in div';
  const { body } = document;
  body.appendChild(div);
  body.insertBefore(div, body.children[0]);

  const div1 = document.getElementById('div1');
  const paragraph = document.createElement('p');
  div1.appendChild(paragraph);
  // div1.appendChild(div);

  paragraph.textContent = 'Text in paragraph';
  // paragraph.innerHTML = "I'm a <strong>bold</strong> paragraph!";
  // paragraph.remove();
  // div1.removeChild(paragraph);

  const sp1 = document.createElement('div');
  const sp1Content = document.createTextNode('new replacement div element.');
  sp1.appendChild(sp1Content);

  const sp2 = document.getElementById('replace');
  sp2.parentNode.replaceChild(sp1, sp2);
}());
