function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date() 
    //var hora = data.getHours()
    var hora = 17
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora <12){
        //bomdia
        img.innerHTML = '<img/fotomanha.png>'
        document.body.style.background= '#4f3014'
    } else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'img/fototarde.png'
        document.body.style.background= '#d35707'
    } else {
        //boa noite
        img.src = 'img/fotonoite.png'
        document.body.style.background= '#0b0c1a'
        
    }
} 