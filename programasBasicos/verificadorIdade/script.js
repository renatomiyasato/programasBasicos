function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var imagem = document.getElementById('imagem')




    if  (fano.value.length == 0 || fano.value >= ano) 
        window.alert('[ERRO] Ano de nascimento inválido.')
    

    else 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')


        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade <= 15) {
                //criança
                imagem = imagem.setAttribute('src', 'bebehomem.png')
            } else if (idade < 18) {
                //jovem
                imagem = imagem.setAttribute('src', 'jovemhomem.png')
            } else if (idade >= 18 && idade < 50) {
                //adulto
                imagem = imagem.setAttribute('src', 'adultohomem.png')
            } else
                //idoso
                imagem = imagem.setAttribute('src', 'senhorhomem.png')



        } else {
            genero = 'Mulher'
            if (idade > 0 && idade <= 15) {
                //criança
                imagem = imagem.setAttribute('src', 'bebemulher.png')
            } else if (idade < 18) {
                //jovem
                imagem = imagem.setAttribute('src', 'jovemmulher.png')
            } else if (idade >= 18 && idade < 50) {
                //adulto
                imagem = imagem.setAttribute('src', 'adultamulher.png')
            } else
                //idoso
                imagem = imagem.setAttribute('src', 'senhoramulher.png')

        }
    

    res.innerHTML = (`Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`)
    res.appendChild(imagem)




}