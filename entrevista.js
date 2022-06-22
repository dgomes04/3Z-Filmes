
const f = {

}



const mFilm = (data) =>{
  let dadosHTML1 = '';
  let dadosHTML2 = '';
  let f = JSON.parse(data.target.response)
  let ids = new Array();
  for(let i=0;i<3;i++){
    let filme = f.results[i];
  

    ids[i]=filme.id
     
  }  
  
  localStorage.setItem('idmf',JSON.stringify(ids))

  // document.getElementById('filmeVid').innerHTML = dadosHTML1;
  document.getElementById('filmeCar').innerHTML = dadosHTML2;
}

const errado = (data)=>{
  alert("Erro na requisição");
}
const start =  () =>{
  let xhr = new XMLHttpRequest();
  let url = "https://api.themoviedb.org/3/movie/popular?api_key=59c67e0c91611dc2beed6e4fd2b9667a&language=pt-BR";
 
  xhr.onload = mFilm;
  xhr.onerror= errado;
  xhr.open('GET', url,true);
  xhr.send();
   
}



document.onload=start();

                                
                                