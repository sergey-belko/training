(function call() {
  console.log('*************************************');
  console.log('Attributes');

  const test = document.getElementById('id');

  console.log('Does it have id?', test.hasAttribute('id'));
  console.log('Does it have id?', test.hasAttribute('test'));
  console.log('id:', test.getAttribute('id'));

  console.log('Setting test-attr');
  const attr = 'test-attr';
  test.setAttribute(attr, 'some value');
  console.log('Does it have id?', test.hasAttribute(attr));
  console.log('id:', test.getAttribute(attr));

  console.log('Remove test-attr');
  console.log('Does it have id?', test.hasAttribute(attr));
  test.removeAttribute(attr);
  console.log('Does it have id?', test.hasAttribute(attr));
}());
