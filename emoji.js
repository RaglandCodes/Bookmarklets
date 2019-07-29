(function(){
    let paragraphs = document.getElementsByTagName('p');

    alert(paragraphs.length)
    for (p of paragraphs)
    {
        p.innerHTML =  "winner"
        console.log(`${p.innerHTML} 👈ps` );
        
    }
})();
