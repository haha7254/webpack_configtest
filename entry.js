//require("style-loader!css-loader!./style.css");
require('./style')
document.write(require("./content"));


require.ensure(['./a'], function(require){
  var content = require('./a')
  document.open();
  document.write('<h1>'+ content +'</h1>')
  document.close();
})
