(function call() {
  console.log('*************************************');
  console.log('Node type, child nodes, parent node');

  const { ...all } = Node;
  console.log(all);
  console.log('Is body type element node?', Node.ELEMENT_NODE === document.body.nodeType);
  console.log('Is head type element node?', Node.ELEMENT_NODE === document.head.nodeType);

  console.log('Body\'s child nodes:', document.body.childNodes);
  console.log('Body\'s parent node:', document.body.parentNode);
}());
