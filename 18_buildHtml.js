const iter = (data) => {
  if (data[0] instanceof Array) {
    return { type: 'taglist', body: data.map(iter) };
  }
  let body;
  let options;
  if (data.length === 3) {
    [, , body] = data;
    [, options] = data;
  } else if (data.length === 2 && data[0] !== 'span') {
    [, body] = data;
    options = {};
  } else if (data[0] === 'span') {
    body = {};
    [, options] = data;
  }
  const processedBody = body instanceof Array ? iter(body) : body;

  return {
    type: 'tag',
    name: data[0],
    body: processedBody,
    options,
  };
};
const render = (treeAst) => {
  if (treeAst.type === 'taglist') {
    return `${treeAst.body.map(render).join('')}`;
  }
  if (treeAst.type === 'tag') {
    const keys = !treeAst.options ? [] : Object.keys(treeAst.options);
    const newBody = typeof treeAst.body === 'object' ? render(treeAst.body) : treeAst.body;
    const atrib = keys.length > 0 ? keys.reduce((acc, key) => `${acc} ${key}="${treeAst.options[key]}"`, '') : '';
    return `<${treeAst.name}${atrib}>${typeof newBody === 'object' ? '' : newBody}</${treeAst.name}>`;
  }
  return treeAst;
};

const buildHtml = (data) => {
  const ast = iter(data);
  return render(ast);
};

export default buildHtml;
