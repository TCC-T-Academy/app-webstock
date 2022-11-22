export interface IItem{
    id_item?: number,
    descricao: string,
    estoque_seguranca: number,
    familia: string,
    grupo: string,
    unidade_medida: string
}

export interface IEstoque{
    id_estoque?: number,
    estoque_real: number,
    localizacao: String,
    estoque_futuro?: number, 
    item: IItem
}

export interface IUsuario{
    id_usuario?: number,
    email: string,
    nome: string,
    perfil: string,
    senha: string
}

export interface IMovimentacao{
    id_movimentacao?: number,
    data_movimentacao: Date,
    origem_destino: string,
    quantidade: number,
    tipo_movimentacao: string,
    item: IItem,
    estoque: IEstoque,
    usuario: IUsuario
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
