function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    if (horas >= 0 && horas < 12){       
        msg.innerHTML = (`Agora são ${horas}:${minutos} horas da manhã`)
        img.src = 'manha.png'
        document.body.style.background = '#E3A466'
        img.style.boxShadow = '0px 0px 25px #E3A466'
    } else if (horas >= 12 && horas < 18) {            
            msg.innerHTML = (`Agora são ${horas}:${minutos} horas da tarde`)
            img.src = 'tarde.png'
            document.body.style.background = '#C7680B'
            img.style.boxShadow = '0px 0px 25px #C7680B'
        } else if(horas >= 18 && horas <= 23) {                
                msg.innerHTML = (`Agora são ${horas}:${minutos} horas da noite`)
                img.src = ('noite.png')
                document.body.style.background = '#272000'
                img.style.boxShadow = '0px 0px 25px #272000'
    } 
}