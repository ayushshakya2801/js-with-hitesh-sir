//  filter a book data code 

const books = [ {Title: 'book1', price: 100, punlished: 2010, genre: 'History'},
                {Title: 'book2', price: 200, punlished: 2011, genre: 'Science'},    
                {Title: 'book3', price: 300, punlished: 2012, genre: 'Math'},
                {Title: 'book4', price: 400, punlished: 2013, genre: 'History'},
                {Title: 'book5', price: 500, punlished: 2014, genre: 'Science'},
                {Title: 'book6', price: 600, punlished: 2015, genre: 'Math'},
                {Title: 'book7', price: 700, punlished: 2016, genre: 'History'},
                {Title: 'book8', price: 800, punlished: 2017, genre: 'Science'},
                {Title: 'book9', price: 900, punlished: 2018, genre: 'Math'},
];

//    const Books = books.filter((books) => books.genre === 'Science');
    //  const Books = books.filter((bk) => bk.price >600)
      const Books = books.filter((bk) => bk.punlished >2015 && bk.genre ==='Science')
   console.log(Books);
   