Recebe arquivo com  formato:

pastas:

    Ambiente:
        arquivos:
            conf
    Humanos:
        arquivos:
            0-INI
                formato:
                    codigo;Min;Max;Descrcao
                    SIM001;1;1;Quantidade de Simulações
                    SIM002;214;214;Quantidade de Ciclos por Simulacao
            1-MOV
            2-CON
            3-TRA
    Simulação:
        arquivos:
            0-SIM



Formato do json
{
    ambiente:{
        conf:[
            .....
        ]
    },
    humanos:{
        0-INI:[
            [codigo,Min,Max,Descrcao],
            [SIM001,1,1,Quantidade de Simulações],
            [SIM002,214,214,Quantidade de Ciclos por Simulacao]
        ]
    },
    simulacao:{
        0-SIM:[
            .........
        ]
    }

}
