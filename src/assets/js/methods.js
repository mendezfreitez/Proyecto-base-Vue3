const methods = {
   setColor: (index) => {
     const el = document.getElementsByClassName('listItem')[index];
     const el2 = document.getElementById('lista2').getElementsByClassName('listItem')[index];
     const listItems = document.getElementsByClassName('listItem');

     for (let l_item of listItems) {
         l_item.style.borderTopRightRadius = '0px';
         l_item.style.borderBottomRightRadius = '0px';
         l_item.querySelector('div>div').style.background = "#00897b";
         l_item.style.background = "#00897b";
         l_item.querySelector('a').style.color = "#FFF";
         el2.querySelector('a').style.color = "#212121";
     }
     
     document.getElementsByClassName('listItem')[index - 1].style.borderBottomRightRadius = '22px';
     document.getElementsByClassName('listItem')[index + 1].style.borderTopRightRadius = '22px';
     el.querySelector('div>div').style.background = "#bbfff3";
     el.style.background = "transparent";
     el.querySelector('a').style.color = "#212121";
   },
}

export default methods;