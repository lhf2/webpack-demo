console.log(2);
import compontent from './1.js';
import compontent1 from './3.js';
document.body.appendChild(compontent('我是2页面'));

if(module.hot){
    module.hot.accept('./3',function(){
        console.log('3.js的内容改变了');
        compontent1.log();
    })
}