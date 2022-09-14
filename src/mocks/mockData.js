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
    {id: '2', name:'especiales', category:'Mas vendidos', description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime cum, necessitatibus ullam recusandae itaque totam optio, consequatur beatae maiores sunt repellendus deserunt! Minus vero dolorem quia possimus, facere quaerat.", price:23000, img: 'https://ibb.co/rp93gVk', stock: 20,},
    {id: '3', name:'especiales', category:'Mas vendidos', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perferendis nulla repellendus maxime mollitia neque eos. Quae totam maiores, aut temporibus voluptatem ipsam quisquam facilis explicabo nulla fugit delectus ducimus.", price: 10000, img: 'https://ibb.co/1rMGbzn', stock: 50,},
    {id: '4', name:'', category: 'vegana', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime cum, necessitatibus ullam recusandae itaque totam optio, consequatur beatae maiores sunt repellendus deserunt! Minus vero dolorem quia possimus, facere quaerat.", price: 500, img: 'https://ibb.co/JBTH58Z', stock: 5,},
    {id: '5', name:'', category: 'vegana', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime cum, necessitatibus ullam recusandae itaque totam optio, consequatur beatae maiores sunt repellendus deserunt! Minus vero dolorem quia possimus, facere quaerat.", price: 500, img: 'https://ibb.co/7CyJGcP', stock: 5,},
    {id: '6', name:'', category: 'vegana', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime cum, necessitatibus ullam recusandae itaque totam optio, consequatur beatae maiores sunt repellendus deserunt! Minus vero dolorem quia possimus, facere quaerat.", price: 500, img: 'https://ibb.co/KrBX59c', stock: 5,},
    {id: '7', name:'oferta 1', category: 'ofertas', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est maxime cum, necessitatibus ullam recusandae itaque totam optio, consequatur beatae maiores sunt repellendus deserunt! Minus vero dolorem quia possimus, facere quaerat.", price: 500, img: '', stock: 5,},
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