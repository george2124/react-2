const productos = [
  
    {
               id: '1', 
             name:'especiales',
         category:'Mas vendidos',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, provident. Recusandae cumque nobis repudiandae eveniet distinctio! Culpa, hic. Quo officiis cumque iste illo dolore eos soluta voluptate neque, nihil laborum!",
            price: 700,
              img: 'https://ibb.co/CWLw4Zw',
           stock : 10,
        },
    {id: '2', name:'especiales', category:'Mas vendidos', description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime cum, necessitatibus ullam recusandae itaque totam optio, consequatur beatae maiores sunt repellendus deserunt! Minus vero dolorem quia possimus, facere quaerat.", price:23000, img: 'https://i.ibb.co/NnPGN9n/hamburguesas-caseras-rellenas-de-queso-cheddar.jpg', stock: 20,},
    {id: '3', name:'especiales', category:'Mas vendidos', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perferendis nulla repellendus maxime mollitia neque eos. Quae totam maiores, aut temporibus voluptatem ipsam quisquam facilis explicabo nulla fugit delectus ducimus.", price: 10000, img: 'https://i.ibb.co/PcMGtDY/mechada.jpg', stock: 50,},
    {id: '4', name:'', category: 'vegana', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime cum, necessitatibus ullam recusandae itaque totam optio, consequatur beatae maiores sunt repellendus deserunt! Minus vero dolorem quia possimus, facere quaerat.", price: 500, img: 'https://i.ibb.co/8Kw96Gk/images3.jpg', stock: 5,},
    {id: '5', name:'', category: 'vegana', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime cum, necessitatibus ullam recusandae itaque totam optio, consequatur beatae maiores sunt repellendus deserunt! Minus vero dolorem quia possimus, facere quaerat.", price: 500, img: 'https://i.ibb.co/F37bBv2/images2.jpg', stock: 5,},
    {id: '6', name:'', category: 'vegana', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime cum, necessitatibus ullam recusandae itaque totam optio, consequatur beatae maiores sunt repellendus deserunt! Minus vero dolorem quia possimus, facere quaerat.", price: 500, img: 'https://i.ibb.co/tJn4Hbw/images4.jpg', stock: 5,},
    {id: '7', name:'oferta 1', category: 'ofertas', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime cum, necessitatibus ullam recusandae itaque totam optio, consequatur beatae maiores sunt repellendus deserunt! Minus vero dolorem quia possimus, facere quaerat.", price: 500, img: 'https://i.ibb.co/x3Z2w02/sandwich-de-milanesa.jpg', stock: 5,},
    {id: '8', name:'oferta 2', category: 'ofertas', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime cum, necessitatibus ullam recusandae itaque totam optio, consequatur beatae maiores sunt repellendus deserunt! Minus vero dolorem quia possimus, facere quaerat.", price: 500, img: '', stock: 5,},
    {id: '9', name:'oferta 3', category: 'ofertas', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime cum, necessitatibus ullam recusandae itaque totam optio, consequatur beatae maiores sunt repellendus deserunt! Minus vero dolorem quia possimus, facere quaerat.", price: 500, img: '', stock: 5,},
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