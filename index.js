let herois = [
    {
        nome: "homem aranha",
        xp: 12.000
}
]

for (let indice = 0; indice <= herois.length - 1; indice++){
    let xp = herois[indice].xp 
    let nome = herois[indice].nome
     console.log(xp,nome)
    if(xp < 1.000){
        nivel = "ferro"
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)
    }else if(xp <= 1.0001 && xp <= 2.000 ){
        nivel = "bronze"
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)
    }else if(xp <= 2.001 && xp <= 5.000){
        nivel = "prata"
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)
    }else if(xp <= 6.001 && xp <= 7.000){
        nivel = "Ouro"
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)
    }else if(xp <= 7.001 && xp <= 8.000 ){
        nivel = "platina"
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)
    }else if(xp <= 8.001 && xp <= 9.000){
        nivel = "ascedente"
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)
    }else if(xp <= 9.001 && xp <= 10.000){
        nivel = "imortal"
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)
    }else if (xp >= 10.001){
        nivel ="radiante"
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)
    }
}
    