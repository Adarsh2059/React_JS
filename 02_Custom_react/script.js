function customRender(  element,container){
    const dom=document.createElement(element.type);
    dom.innerHTML=element.children;
    for(const key in element.props){
        dom.setAttribute(key,element.props[key]);
    }
    container.appendChild(dom);
}

const ownelement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
    },
    children:'Google ko visit kare'
}
const container=document.getElementById('root');
customRender(ownelement,container);
