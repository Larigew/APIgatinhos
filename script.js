function fetchimage(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then((data) => {
        let imagem = document.querySelector('#imagem');

        
        data.map((item)=>{
            imagem.setAttribute('src', item.url)    
        })
    })
}