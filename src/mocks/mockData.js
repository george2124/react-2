const productos = [
  
    {
               id: '1', 
             name:'Especiales-1',
         category:'Mas vendidos',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, provident. Recusandae cumque nobis repudiandae eveniet distinctio! Culpa, hic. Quo officiis cumque iste illo dolore eos soluta voluptate neque, nihil laborum!",
            price: 1.700,
              img: 'https://i.ibb.co/hLQ8jvV/mila-promo.jpg',
           stock : 10,
        },
    {id: '2', name:'especiales-2', category:'Mas vendidos', description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime cum, necessitatibus ullam recusandae itaque totam optio, consequatur beatae maiores sunt repellendus deserunt! Minus vero dolorem quia possimus, facere quaerat.", price:23000, img: 'https://i.ibb.co/gJmF4k5/hamburguesa-cheddar-promo.webp', stock: 20,},
    {id: '3', name:'especiales-3', category:'Mas vendidos', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perferendis nulla repellendus maxime mollitia neque eos. Quae totam maiores, aut temporibus voluptatem ipsam quisquam facilis explicabo nulla fugit delectus ducimus.", price: 10000, img: 'https://i.ibb.co/Bw7L8kR/especial-de-hollowen.jpg', stock: 50,},
    {id: '4', name:'', category: 'vegana', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime cum, necessitatibus ullam recusandae itaque totam optio, consequatur beatae maiores sunt repellendus deserunt! Minus vero dolorem quia possimus, facere quaerat.", price: 500, img: 'https://i.ibb.co/8Kw96Gk/images3.jpg', stock: 5,},
    {id: '5', name:'', category: 'vegana', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime cum, necessitatibus ullam recusandae itaque totam optio, consequatur beatae maiores sunt repellendus deserunt! Minus vero dolorem quia possimus, facere quaerat.", price: 500, img: 'https://i.ibb.co/F37bBv2/images2.jpg', stock: 5,},
    {id: '6', name:'', category: 'vegana', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime cum, necessitatibus ullam recusandae itaque totam optio, consequatur beatae maiores sunt repellendus deserunt! Minus vero dolorem quia possimus, facere quaerat.", price: 500, img: 'https://i.ibb.co/tJn4Hbw/images4.jpg', stock: 5,},
    {id: '7', name:'oferta 1', category: 'ofertas', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime cum, necessitatibus ullam recusandae itaque totam optio, consequatur beatae maiores sunt repellendus deserunt! Minus vero dolorem quia possimus, facere quaerat.", price: 500, img: 'https://i.ibb.co/cYcKDGr/promo-4.webp', stock: 5,},
    {id: '8', name:'oferta 2', category: 'ofertas', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime cum, necessitatibus ullam recusandae itaque totam optio, consequatur beatae maiores sunt repellendus deserunt! Minus vero dolorem quia possimus, facere quaerat.", price: 500, img: 'https://i.ibb.co/xX8v3CW/especial-5.jpg', stock: 5,},
    {id: '9', name:'oferta 3', category: 'ofertas', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime cum, necessitatibus ullam recusandae itaque totam optio, consequatur beatae maiores sunt repellendus deserunt! Minus vero dolorem quia possimus, facere quaerat.", price: 500, img: 'https://i.ibb.co/D42Jg51/LOMITO-OK-promo.jpg', stock: 5,},
  ]; 
  
  
  export  const data = new Promise((resolver, reject) => {
  
      let condition = true
      setTimeout(() => {
        if(condition){
          resolver(productos);
        }else{
          reject('salio mal: no esta tu pedido');
        }
      }, 2000);
    });