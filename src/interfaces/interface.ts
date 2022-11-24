export interface IItem{
    idItem?: number,
    descricao: string,
    estoqueSeguranca: number,
    familia: string,
    grupo: string,
    unidade: string
}

export interface IEstoque{
    idEstoque?: number,
    estoqueReal: number,
    localizacao: String,
    //estoqueFuturo?: number, 
    item: IItem
}

export interface IUsuario{
    idUsuario?: number,
    email: string,
    nome: string,
    perfil: string,
    senha: string
}

export interface IMovimentacao{
    idMovimentacao?: number,
    dataMovimentacao: Date,
    origemDestino: string,
    quantidade: number,
    tipo: string,
    item: IItem,
    estoque: IEstoque,
    usuario: IUsuario
}

export interface INovaMovimentacao{
    origemDestino: string,
    quantidade: number,
    idItem?: number,
    idUsuario?: number
}

export interface IReserva{
    id_reserva?: number,
    data_prevista: Date,
    ordem: string,
    quantidade_reserva: number,
    finalizada: boolean,
    item: IItem,
    usuario: IUsuario
}

export interface IPrevisao{
    id_previsao?: number,
    data_prevista: Date,
    ordem: string,
    quantidade_prevista: number,
    finalizada: boolean,
    item: IItem,
    usuario: IUsuario
}
