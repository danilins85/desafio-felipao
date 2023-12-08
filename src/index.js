let nomeHeroi = "Novo Heroi";
let XP = 8.000
let nivelHeroi

switch (true)
{
    case XP >= 1.000:
        nivelHeroi = "Ferro";
        break;
    case XP <= 2.001:
        nivelHeroi = "Bronze";
        break;
    case XP <= 5.001:
        nivelHeroi = "Prata;";
        break;
    case XP <=6.001:
        nivelHeroi = "Ouro";
        break;
    case XP <= 7.001:
        nivelHeroi = "Platina";
        break;
    case XP <= 8.001:
        nivelHeroi = "Asecendente";
        break;
    case XP <= 9.001:
        nivelHeroi = "Imortal";
        break;
   default:
        nivelHeroi = "Radiante"
        break;  

}

XP = 8.000;

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)