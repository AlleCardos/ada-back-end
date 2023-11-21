import { Solicitacao } from "./class/Solicitacoes"

const solicitacoesAprovadas = Solicitacao.getSolicitacoesAprovadas()
Solicitacao.arquivarSolicitacoes(solicitacoesAprovadas)