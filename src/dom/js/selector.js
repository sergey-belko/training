(function call() {
  console.log('*************************************');
  console.log('Selectors');

  console.log('Document', document);
  console.log('Window', window);

  console.log('getElementById', document.getElementById('id'));
  console.log('getElementsByName', document.getElementsByName('name'));
  console.log('getElementsByTagName', document.getElementsByTagName('section'));
  console.log('getElementsByClassName', document.getElementsByClassName('test'));
  console.log('getElementsByTagNameNS', document.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'p'));

  const div1 = document.getElementById('div1');
  console.log('There are ', div1.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'p'));

  console.log('querySelector', document.querySelector('.query'));
  console.log('querySelectorAll', document.querySelectorAll('.query'));
}());
