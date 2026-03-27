class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp
        this.mana = mana;
        this.energia = energia;
    }

    atacar(alvo, habilidade) {
        //verificar mana suficiente
        if(this.mana >= habilidade.custo && this.energia >= habilidade.energia) {
            //dano no alvo
            alvo.hp -= habilidade.dano;
            //debitar mana
            if (habilidade.custo > 0) {
                this.mana -= habilidade.custo;
                this.energia += 50;
            }
            //esvaziar energia
            if (habilidade.energia > 0) {
                this.energia = 0;
            }
            //retornar msg
            return `${this.nome} usou ${habilidade.nome}`;
            } else {
            return `sem mana ou energia para usar ${habilidade.nome}`
        }
    }

    boss_atacar(alvo) {
        if(this.energia == 100) {
            alvo.hp -= 15;
            this.energia = 0;
            return ` Lich usou sua habilidade `
        } else {
            this.energia += 50;
            return ` Lich carregou o ataque `
        }
    }
}

class Habilidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano
        this.custo = custo;
        this.energia = energia;
    }
}

// Criar os objetos
let hero = new Personagem("Finn", "O Humano", 100, 100, 0);
let boss = new Personagem("Lich", "Skull Man", 100, 0, 50);

// Preencher status
document.getElementById("nome-heroi").textContent = `${hero.nome}`;
document.getElementById("titulo-heroi").textContent = `⚔️ ${hero.titulo}`;

document.getElementById("nome-boss").textContent = `${boss.nome}`;
document.getElementById("titulo-boss").textContent = `💀 ${boss.titulo}`;

// Criar array de turnos
const turnos = ["Aguardando Ação"];

//Atualizar as barras de vida
const atualizarInterface = (msg_hero, msg_boss)=> {
    
    //barras heroi
    document.getElementById("hp-heroi").value = hero.hp;
    document.getElementById("mp-heroi").value = hero.mana;
    document.getElementById("en-heroi").value = hero.energia;

    //barras boss
    console.log(boss.energia)
    document.getElementById("hp-boss").value = boss.hp;
    document.getElementById("en-boss").value = boss.energia;

    //turnos
    document.getElementById("log-hero").textContent = msg_hero;
    document.getElementById("log-boss").textContent = msg_boss;

    if (boss.hp<= 0){
        document.getElementById("tela").innerHTML = "Você venceu!";
    }
    if (hero.hp<= 0){
        document.getElementById("tela").innerHTML = "Você perdeu!";
    }
}

// Criar habilidades e botões
let container = document.getElementById("controles");
let listaHabilidades = [
    new Habilidade(1, "attack", 4, 0, 0),
    new Habilidade(2, "skill", 8, 10, 0),
    new Habilidade(3, "ultimate", 15, 0, 100)
];

listaHabilidades.forEach(hab => {
    let btn = document.createElement("button");
    btn.innerText = hab.nome;
    btn.classList.add("btn", "btn-dark");
    container.appendChild(btn);
    btn.onclick = () => {
        let msg_hero = hero.atacar(boss, hab);
        let msg_boss = boss.boss_atacar(hero);
        atualizarInterface(msg_hero, msg_boss);
        
    }
});
