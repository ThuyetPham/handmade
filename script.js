
const handmades = [
    {
        id : '1',
        img : 'https://lud.vn/wp-content/uploads/2020/03/1547207042499_7509532.jpg',
        name : '1',
        title : 'Thú cute',
        price : '95',
        type : 'Móc_Khóa'
    },
    {
        id : '2',
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqUhUpvsePmDP88YCuYGh_kJb3PNWVLaKRzw&usqp=CAU',
        name : '2',
        title : 'Gấu mini',
        price : '50',
        type : 'Móc_Khóa'
    },
    {
        id : '3',
        img : 'https://quatangvang.vn/wp-content/uploads/2019/01/18-lam-qua-tang-nguoi-yeu-10.jpg',
        name : '3',
        title : 'Móc khóa xinh',
        price : '60',
        type : 'Móc_Khóa'
    },
    {
        id : '4',
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzzGl1wt7Day_Y7uiHvOs5x7VVmZ80B5075g&usqp=CAU',
        name : '4',
        title : 'Hộp đựng cute',
        price : '90',
        type : 'Hộp_đựng'
    },
    {
        id : '5',
        img : 'https://cf.shopee.vn/file/955fa70da81a3ad183210cfa15f21cfc',
        name : '5',
        title : 'Bút chì hình thú',
        price : '50',
        type : 'Hộp_đựng'
    },
    {
        id : '6',
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeH-UnMd4p37MiOTLXnF5IHsjTDiG7ga0bYQ&usqp=CAU',
        name : '6',
        title : 'Các loại móc cute',
        price : '30',
        type : 'Móc_Khóa'
    },
    {
        id : '7',
        img : 'https://cf.shopee.vn/file/dc8a86bd1cffd3c0f1840194c185b31f',
        name : '7',
        title : 'Thú để bàn dễ thương',
        price : '40',
        type : 'Thú_trang_trí'
    },
    {
        id : '8',
        img : 'https://meohaycuocsong.com/wp-content/uploads/2019/07/49703.jpg',
        name : '8',
        title : 'Cú mèo',
        price : '55',
        type : 'Thú_trang_trí'
    },
    {
        id : '9',
        img : 'https://cf.shopee.vn/file/bbde098d521bfa41dbc65c75c53ffed9',
        name : '9',
        title : 'Móc gấu',
        price : '35',
        type : 'Móc_Khóa'
    },
    {
        id : '10',
        img : 'https://vanchuyendailoan.com/wp-content/uploads/2019/12/gui-do-handmade-di-dai-loan.jpg',
        name : '10',
        title : 'Móc gấu',
        price : '75',
        type : 'Móc_Khóa'
    },
    {
        id : '11',
        img : 'https://quynam.net//file/kinhnghiem/1557894166-do-handmade.jpg',
        name : '11',
        title : 'Lọ cây mini',
        price : '59',
        type : 'Thú_trang_trí'
    },
    {
        id : '12',
        img : 'https://static.salekit.vn/image/shop/2/source/ban-do-handmade-3.jpg',
        name : '12',
        title : 'Thỏ xám',
        price : '98',
        type : 'Thú_trang_trí'
    },
    {
        id : '13',
        img : 'https://afamilycdn.com/2019/10/9/13-15706191058631432082861.png',
        name : '13',
        title : 'Chậu mini',
        price : '35',
        type : 'Hộp_đựng'
    },
    {
        id : '14',
        img : 'https://metunhien.vn/wp-content/uploads/sites/1/2017/11/maxresdefault-7.jpg',
        name : '14',
        title : 'Tranh cá',
        price : '35',
        type : 'Thú_trang_trí'
    },


]
const menus = [

    { title: ' Tất Cả', type: 'All'},
    { title: ' Móc Khóa cute', type: 'Móc_Khóa'},
    { title: ' Hộp đựng đồ', type: 'Hộp_đựng'},
    { title: ' Thú trang trí bàn', type: 'Thú_trang_trí'}
]
addHandMade(handmades);
rendermenuHandMade(menus);
function addHandMade(arrayHandMade) {
    let content = '';
    arrayHandMade.forEach(handmade => {
        content += `
            <div class="book">
                <div class="book-img">
                    <img src="${handmade.img}" alt="">
                </div>
                <h3 class="book-title">${handmade.title}</h3>
                <div class="book-price">
                    ${handmade.price}  vnđ

                    <button type="button" onClick = "idToCart(${handmade.id})">Mua </button>
                </div>
            </div>
        `
    })
    document.querySelector('.content__body').innerHTML = content;
}  

function rendermenuHandMade(arraymenus) {
    let contenMenu = '';
    arraymenus.forEach((item, index) => {
        contenMenu += `
            <li class = " ${(index === 0) ? 'active' : ''}" onClick = "seclecHandMade('${item.type}', ${index})"> ${item.title} </li>;
            `
    })

    document.querySelector('.sidebar-categories').innerHTML = contenMenu;
}

    
// function seclecHandMade(type , index) {
//     setActiveMenu(index);
//     const result = [];
    
//     if( type === 'All') {
//         result = [...handmades];
//     }
//     else {
//         handmades.forEach(handmade => {
//             if( handmade.type === type) {
//                 result.push(handmade);
//             }
//         })
//     }
//     addHandMade(result);
// }

function seclecHandMade(type , index) {
    setActiveMenu(index);
    const result = [];
    
    if( type === 'All') {
        handmades.forEach(handmade => {
            if( handmade.type != type) {
                result.push(handmade);
            }
        })
    }
    else {
        handmades.forEach(handmade => {
            if( handmade.type === type) {
                result.push(handmade);
            }
        })
    }
    addHandMade(result);
}

function setActiveMenu(index){
    let tagLi = document.querySelectorAll('.sidebar-categories li');
    let menuActive = tagLi[index];
    tagLi.forEach(item => {
        item.classList.remove('active');
    })
    menuActive.classList.add('active');
}
 // addcart
 const Cart = [
    //  { 
    //     img : 'https://lud.vn/wp-content/uploads/2020/03/1547207042499_7509532.jpg',
    //     title : 'Thú cute',
    //     price : '95',
    //     qty : '1'
    // },
    // { 
    //     img : 'https://lud.vn/wp-content/uploads/2020/03/1547207042499_7509532.jpg',
    //     title : 'Thú cute',
    //     price : '95',
    //     qty : '1'
    // }

 ]

 function addToCart(arrayCart) {
     let content_cart = '';
     arrayCart.forEach((item, index) => {
         content_cart += `
                <li>
                <img src="${item.img}" alt="">
                <div class="infor">
                    <div class="title">
                        <span>${item.title}</span>
                        <button type="button" onClick = "removeCart(${index})"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="actions">
                        <span class="price">${item.price}</span>
                        <div class="qty">
                            <button type="button" onClick = "outcreasingCart(${index})"> - </button>
                            <input type="text" value="${item.qty}">
                            <button type="button"  onClick = "increasingCart(${index})">+</button>
                        </div>
                    </div>
                </div>
            </li>
         `
     })
     document.querySelector('.cart-item-body').innerHTML = content_cart;   
 }
    addToCart(Cart);

 // addToCart theo id

 function idToCart(id){
     
     handmades.forEach(handmade => {
         if(handmade.id == id){
             let newHandmade = {};
            newHandmade = {
                 title: handmade.title,
                 img: handmade.img,
                 price: handmade.price,
                 qty: '1'

             }
             
            Cart.push(newHandmade);
         }
         addToCart(Cart);
         totalCart();
     })
 }
 // tính total

 function totalCart(){
     let total = 0;
     Cart.forEach(item => {
         total = total + item.qty*item.price
     })
     document.querySelector('.total span').textContent = `${total} vnđ`;
 }
 totalCart();
  // add thêm + or -
  function increasingCart(index){
        Cart[index].qty = parseInt(Cart[index].qty) + 1;
        totalCart();
        addToCart(Cart);
  }
  function outcreasingCart(index){
      if(Cart[index].qty > 1 ){
      Cart[index].qty = parseInt(Cart[index].qty) - 1;
      }
      totalCart(Cart);
      addToCart(Cart);
  }
  // Search


function searchHM(text){
    let newHM = [];
    handmades.forEach(item => {
        if(item.title.includes(text)){
            newHM.push(item);
        }
    })
    addHandMade(newHM);
}
// xóa Cart

function removeCart(index){
    Cart.splice(index , 1);
    addToCart(Cart);
    totalCart(Cart);
}

