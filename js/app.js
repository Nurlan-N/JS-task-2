/* let text;
  if (confirm("Seçim Edin!") == true) {
        
  } else {
    document.body.style.display = 'none'
  }
  let person = prompt("Yaşınızı Daxil Edin!");
  if (person < 18) {
    alert("Hələ balacasan =)")
    document.body.style.display = 'none'
  }else{
    alert("Xoş Gelmisiniz!")
  } */
  
  function dlt() {
   var input = document.getElementById('inp');
   var group = document.getElementById('group');
   var value = toString(input.value);
        if (value.length > 0) {
            input.value = ''
            group.innerHTML = ""
        }
  }
  function search(){
    var group = document.getElementById('group');
    var input = document.getElementById('inp');
    var value = input.value;
    

    if (value.length < 4 || value.length > 4) {
        group.innerHTML = "Düzgün daxil et!";
        group.style.color = 'yellow'
    }else{
        if (value[value.length-3] == '1') {
            group.style.color = 'yellow'
           group.innerHTML = 'Səhər Qrupu:' + value.toUpperCase();
        }else if(value[value.length-3] == '2') {
            group.style.color = 'red'
            group.innerHTML = 'Günorta Qrupu:' + value.toUpperCase();
        }else if(value[value.length-3] == '3') {
            group.style.color = 'black'
            group.innerHTML =  'Axşam Qrupu:' + value.toUpperCase();
        }
    }

    
  }
  function click_mode() {
    if (document.body.style.filter == 'grayscale(0)') {
        document.body.style.filter = 'grayscale(0.8)'
    }else{
        document.body.style.filter = 'grayscale(0)'
    }
  }
  function info_ic() {
    var text = document.getElementById('name')
    if (text.style.display == 'none') {
        text.style.display = "block"
    }else{
        text.style.display = 'none'
    }
  }