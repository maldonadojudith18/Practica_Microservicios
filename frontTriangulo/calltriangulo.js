function getAreaTriangulo (){
    var mybase = $(`#base`).val();
    var myaltura = $(`#altura`).val();
  
    var url = "http://localhost:8085/triangulo/?base=" + mybase + "&altura=" + myaltura;
    console.log(`url`);
    console.log(url);
    $.getJSON(url,
        function(json){
            console.log(json);
            console.log(json);
            $(`#resultado`).html(`<h1>` + json.area + `</h1>`);
        }
    )
  }
  
  function hola(){
    console.log("Hola mundo");
  }