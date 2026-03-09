class conta {
    constructor(tipo, titular, saldo) {
        this.tipo = tipo;
        this.titular = titular;
        this.saldo = saldo;
    }
    mostrar_extrato(){
        return `A conta ${this.tipo} do ${this.titular} tem ${this.saldo} reais`;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
}
let conta_corrente = new conta("corrente", "João", 10000);
let conta_poupanca = new conta("poupanca", "Maria", 50000);
console.log(conta_corrente.mostrar_extrato());
conta_corrente.depositar(1500);
console.log(conta_corrente.mostrar_extrato());