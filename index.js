async function books() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'be0e5d2aeemshd5d74f29ca24e24p16bd5ejsn30bf3c459624',
      'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
    }
  };
  

  let response = await fetch('https://hapi-books.p.rapidapi.com/nominees/romance/2020',options);
  let result = await response.json();
  console.log("result",result.length)

  let bookname = [];
  let firstbook = [];
  for (let i = 0; i < result.length; i++) {
    console.log("result",result[i])
    firstbook.push(result[i].name);
    firstbook.push(result[i].author);
    firstbook.push(result[i].cover)
    firstbook.push(result[i].url)
    bookname.push(firstbook);
    firstbook = [];
    console.log("bookname",bookname);
  }
  let randombook = [];
  let randombook1 = bookname[Math.floor(Math.random() * bookname.length)];
  randombook.push(randombook1);
  let randombook2 = bookname[Math.floor(Math.random() * bookname.length)];
  randombook.push(randombook2);
  let randombook3 = bookname[Math.floor(Math.random() * bookname.length)];
  randombook.push(randombook3);
  console.log("randombook", randombook);

  
  let container1 = document.getElementById("book1");
  let container2 = document.getElementById("book2");
  let container3 = document.getElementById("book3");

  let image1 = document.createElement('img');
  let image2 = document.createElement('img');
  let image3 = document.createElement('img');

 
  
  // image1.addEventListener('click', () => {
  //   window.location.href = randombook[0][3];
  // });

  // image2.addEventListener('click', () => {
  //   window.location.href = randombook[1][3];
  // });

  // document.querySelector(image3).addEventListener('click', () => {
  //   window.location.href = randombook[2][3];
  // });

  container1.innerHTML = "Name: " + randombook[0][0] + "             Author: " + randombook[0][1];
  
  container2.innerHTML = "Name: " + randombook[1][0] + "             Author: " + randombook[1][1];
 
  container3.innerHTML = "Name: " + randombook[2][0] + "             Author: " + randombook[2][1] ;
 

  container1.appendChild(image1);
  container2.appendChild(image2);
  container3.appendChild(image3);

 


  


  return bookname;
}

books();
