function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

  let rows = document.querySelectorAll('tbody tr');
  let searchString = document.getElementById('searchField');
  
  function onClick () {
   
   for (let element of rows) {
      element.classList.remove('select');
      if (element.innerHTML.includes(searchString.value)) {
         element.className = 'select';
      }
   }

   searchString.value = '';
  }
}
