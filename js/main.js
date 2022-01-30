const inputTxt = document.querySelector('.txt')

const paises = async () => {

    const response = await fetch('https://restcountries.com/v3.1/all');
    if (response.status !== 200)
        throw new Error('Não é possível ler os dados');

    const data = await response.json();

    return data; 
};        
            
paises()
    .then(data => {
        adicionarCard(data)
    })
    .catch(err => { console.log('Promise rejeitada', err.message) });


function adicionarCard(data){
    var cards = ""
    data.forEach((pais)=> {
        cards += `                
        <div class="card">
            <img class="card-img-top" src="${pais.flags.png}" alt="${pais.flag}">
            <div class="card-body">
                <h5 class="card-title">${pais.name.common}</h5>
                <hr class="style-two"  >
                <p class="card-text">${pais.region}</p>
            </div>
        </div>
      `
    });

    document.querySelector('.conteudo').innerHTML=cards;
}
    
inputTxt.addEventListener('keyup', (e) => {
    if(e.key == "Enter"){
        console.log(e.key)
    }
})

window.addEventListener('click', e => {
    console.log(e.target)
    if(e.target.alt != undefined){
        console.log(e.target.alt)
    }
})
console.log(inputTxt)


/*

 <div class="card">
    <img class="card-img-top" src="/Flag_of_Brazil.svg" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">Brasil</h5>
    <hr class="style-two"  >
    <p class="card-text">America</p>
    </div>
  </div>

*/