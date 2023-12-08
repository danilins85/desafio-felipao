let nomeHeroi = "Novo Heroi";
let XP = 8000
let nivelHeroi

switch (true) {
    case XP < 1000:
        nivelHeroi = "Ferro";
        break;
    case XP >= 1001 && XP <= 2000:
        nivelHeroi = "Bronze";
        break;
    case XP >= 2001 && XP <= 5000:
        nivelHeroi = "Prata";
        break;
    case XP >= 5001 && XP <= 7000:
        nivelHeroi = "Ouro";
        break;
    case XP >= 7001 && XP <= 8000:
        nivelHeroi = "Platina";
        break;
    case XP >= 8001 && XP <= 9000:
        nivelHeroi = "Ascendente";
        break;
    case XP >= 9001 && XP <= 10000:
        nivelHeroi = "Imortal";
        break;
    default:
        nivelHeroi = "Radiante";  

}

XP = 8000;

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)