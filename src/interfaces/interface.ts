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
    localizacao: string,
    estoqueFuturo?: number,
    dataFutura?: Date, 
    item: IItem
}

export interface IUsuarioNovo{
    idUsuario?: number,
    nome: string,
    senha: string,
    email: string,
    role: string 
}


export interface IUsuarioPublico{
    idUsuario?: number,
    nome: string,
    email: string,
    role: string
}

export interface IMovimentacao{
    idMovimentacao?: number,
    dataMovimentacao: Date,
    origemDestino: string,
    quantidade: number,
    tipo: string,
    item: IItem,
    estoque: IEstoque,
    usuario: IUsuarioPublico
}

export interface INovaMovimentacao{
    origemDestino: string,
    quantidade: number,
    idItem?: number,
    idUsuario?: number
}

export interface IReserva{
    idReserva?: number,
    dataPrevista: Date,
    ordem: string,
    quantidadeReserva: number,
    finalizada: boolean,
    item: IItem,
    usuario: IUsuarioPublico
}

export interface INovaReserva{
    idReserva?: number,
    finalizada: boolean,
    quantidadeReserva: number,
    dataPrevista: Date,
    ordem: string,
    idUsuario: number,
    idItem: number,
}

export interface IPrevisao{
    idPrevisao?: number,
    dataPrevista: Date,
    ordem: string,
    quantidadePrevista: number,
    finalizada: boolean,
    item: IItem,
    usuario: IUsuarioPublico
}

export interface INovaPrevisao{
    idPrevisao?: number,
    ordem: string,
    quantidadePrevista: number,
    idItem: number,
    idUsuario: number,
    dataPrevista: Date,
    finalizada: boolean,
}

export interface ILog{
    idItem?: number,
    tipoMovimentacao: string,
    origemDestino: string,
    data: Date,
    quantidade: number,
    estoqueMomento: number
}

export interface IError{
    error:string,
    message:string,
    path:string
}

export interface ILoginError{
    error:string,
    error_description:string
}

