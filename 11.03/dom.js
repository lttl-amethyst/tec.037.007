
const demo_id = document.getElementById('demo');
// alterar a cor da borda
demo_id.style.border = '1px solid purple';

const demo_class = document.getElementsByClassName('demo');
for (i=0; i<demo_class.length; i++) {
    demo_class[i].style.border = '2px dotted blue';
}

const articleTag = document.getElementsByTagName('article');
for (i =0; i < articleTag.length; i++){
    articleTag[i].style.border = '3px dashed green';
}
const demoQuery = document.querySelector('#demo-query');
demoQuery.style.border = '1px solid yellow';

const demoQueryAll= document.querySelectorAll('.demo-query-all');
demoQueryAll.forEach(caixa => {
    caixa.style.border = '1px solid red';
    caixa.style.color = 'gray';
})