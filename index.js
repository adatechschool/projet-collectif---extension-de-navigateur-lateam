async function books () {

    const options = {
        method: 'GET',
        url: 'https://hapi-books.p.rapidapi.com/nominees/romance/2020',
        headers: {
          'X-RapidAPI-Key': 'fdbe3dd835msh650295f34ceb017p126015jsn52284abe399c',
          'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
      };

    let response = await fetch ('https://hapi-books.p.rapidapi.com/nominees/romance/2020', options )
    let result = await response.json();

   
    let bookname = result[0].name
    
    document.getElementById('books').innerHTML= bookname
   
    // for (let i = 0; i < result.length; i++) {
    //     // const element = result[i][0];
    //     console.log(result[i][0]); 
    // }
  
    console.log(bookname)
    return result;
}

books()







async function books () {

    const options = {
        method: 'GET',
        url: 'https://hapi-books.p.rapidapi.com/nominees/romance/2020',
        headers: {
          'X-RapidAPI-Key': 'fdbe3dd835msh650295f34ceb017p126015jsn52284abe399c',
          'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
      };

    let response = await fetch ('https://hapi-books.p.rapidapi.com/nominees/romance/2020', options )
    let result = await response.json();

   
    let bookname = result[0].name
    
    document.getElementById('books').innerHTML= bookname
   
    // for (let i = 0; i < result.length; i++) {
    //     // const element = result[i][0];
    //     console.log(result[i][0]); 
    // }
  
    console.log(bookname)
    return result;
}

books()




