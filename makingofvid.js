
var dadosHTML = '';

const mFil = (data) =>{
 
  let fCar = JSON.parse(data.target.response)
    let filme = fCar.results[1];
 
    dadosHTML += `
    <iframe width="400" height="315" src="https://www.youtube.com/embed/${filme.key}" title="YouTube video player" frameborder="0" allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="padding-left:10px"></iframe>`
  
    document.getElementById('filmemf').innerHTML = dadosHTML;

}

const errar = (data)=>{
  alert("Erro na requisição");
}
const st =  () =>{
  
  let id = JSON.parse(localStorage.getItem('idmf'))
 for(let i=0;i<id.length;i++){
    let xhr = new XMLHttpRequest();
    var url = `https://api.themoviedb.org/3/movie/${id[i]}/videos?api_key=59c67e0c91611dc2beed6e4fd2b9667a&`; 
    xhr.onload = mFil;
    xhr.onerror= errar;
    xhr.open('GET', url,true);
    xhr.send();
  }
 
   
}


document.onload=st();