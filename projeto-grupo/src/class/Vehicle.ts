import { ClientProps } from "../props/ClienteProps";
import { VehicleProps } from "../props/VehicleProps";

export class Vehicle {

    private _fabricante: string;
    private _modelo: string;
    private _ano: number;
    private _cor: string;
    private _tipoMotor: string;
    private _transmissao: string;
    private _tipoCombustivel: string;
    private _quilometragem: number;
    private _tipoCarteira: string
    private _alugado: boolean
    private _cliente: ClientProps

    constructor(data: VehicleProps) {
        this._fabricante = data.fabricante;
        this._modelo = data.modelo;
        this._ano = data.ano;
        this._cor = data.cor;
        this._tipoMotor = '';
        this._transmissao = '';
        this._tipoCombustivel = '';
        this._quilometragem = 0;
        this._tipoCarteira = data.tipoCarteira;
        this._alugado = false
        this._cliente = {}
    }

    get fabricante(): string {
        return this._fabricante;
    }

    set fabricante(novoFabricante: string) {
        this._fabricante = novoFabricante;
    }

    get modelo(): string {
        return this._modelo;
    }

    set modelo(novoModelo: string) {
        this._modelo = novoModelo;
    }

    get ano(): number {
        return this._ano;
    }

    set ano(novoAno: number) {
        this._ano = novoAno;
    }

    get cor(): string {
        return this._cor;
    }

    set cor(novaCor: string) {
        this._cor = novaCor;
    }

    get tipoMotor(): string {
        return this._tipoMotor;
    }

    set tipoMotor(novoTipoMotor: string) {
        this._tipoMotor = novoTipoMotor;
    }

    get transmissao(): string {
        return this._transmissao;
    }

    set transmissao(novaTransmissao: string) {
        this._transmissao = novaTransmissao;
    }

    get tipoCombustivel(): string {
        return this._tipoCombustivel;
    }

    set tipoCombustivel(novoTipoCombustivel: string) {
        this._tipoCombustivel = novoTipoCombustivel;
    }

    get quilometragem(): number {
        return this._quilometragem;
    }

    set quilometragem(novaQuilometragem: number) {
        this._quilometragem = novaQuilometragem;
    }

    get tipoCarteira(): string {
        return this._tipoCarteira;
    }

    set tipoCarteira(novoTipoCarteira: string) {
        this._tipoCarteira = novoTipoCarteira;
    }

    get alugado(): boolean {
        return this._alugado;
    }

    set alugado(novoAlugado: boolean) {
        this._alugado = novoAlugado;
    }

    get cliente(): ClientProps {
        return this._cliente;
    }

    set cliente(novoCliente: ClientProps) {
        this._cliente = novoCliente;
    }
}
