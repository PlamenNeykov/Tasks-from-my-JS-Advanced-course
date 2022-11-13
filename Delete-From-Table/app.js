function deleteByEmail() {
    let inputValue = document.querySelector('input[name="email"]').value;
    let tableInfo = Array.from(document.querySelectorAll('tbody tr'));

    let faund = false;
    for (const element of tableInfo) {
        if (element.children[1].textContent == inputValue){
            let parent = element.parentElement;
            parent.removeChild(element);
            faund = true;
        }
    }
    let result = document.getElementById('result');
    if (faund) {
        result.textContent = 'Deleted';
    }  else {
        result.textContent = 'Not found.';
    }
}