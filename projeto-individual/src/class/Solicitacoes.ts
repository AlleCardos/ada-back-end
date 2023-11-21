import { File } from "../utils/File"

export abstract class Solicitacao{

    private static pathReadFile = './solicitacoes.json'
    private static pathWriteFile = './assets/emprestimos-aprovados.json'

    static getSolicitacoes(){
        return File.fileRead(this.pathReadFile)
    }

    static getSolicitacoesAprovadas(){
        const solicitacoes = this.getSolicitacoes()
        return solicitacoes.filter(( solicitacao: any ) => {
            if(this.validarSolicitacao(solicitacao)){
                return solicitacao
            }
        })
    }

    static validarSolicitacao(solicitacao: any){
        if(solicitacao.idade > 18 && 
            solicitacao.emprestimo.valorTotal > solicitacao.emprestimo.valorRequerido &&
            solicitacao.emprestimo.valorTotal === (solicitacao.emprestimo.numeroParcelas * solicitacao.emprestimo.valorParcela)
            ){
                return true
        }
        return false
    }

    static arquivarSolicitacoes(data: any){
        File.fileWrite(data, this.pathWriteFile)
        console.log('Solicitacoes aprovadas registradas com sucesso!');
    }
}