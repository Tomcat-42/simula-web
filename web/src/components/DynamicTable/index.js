import React from "react";
// import Grid from "react-json-grid";
export default function DynamicTable() {
    return (<></>);
}

// export default function DynamicTable() {
    // const data = [
        // [
            // {
                // Descrição: "Ambiente",
                // Valor: "Cascavel",
            // },
            // {
                // Descrição: "Ambiente",
                // Valor: "Cascavel",
            // },

            // { Descrição: "Doença", Valor: "Dengue" },

            // { Descrição: "Doença", Valor: "Dengue" },

            // { Descrição: "Doença", Valor: "Dengue" },

            // { Descrição: "LotesCasa", Valor: 1642 },

            // { Descrição: "LotesCasa", Valor: 1642 },

            // { Descrição: "LotesCasa", Valor: 1642 },

            // { Descrição: "LotesTrabalho", Valor: 410 },

            // { Descrição: "LotesTrabalho", Valor: 410 },

            // {
                // Descrição: "LotesTrabalho",

                // Valor: 410,
            // },

            // { Descrição: "LotesLazer", Valor: 28 },

            // { Descrição: "LotesLazer", Valor: 28 },

            // { Descrição: "LotesLazer", Valor: 28 },

            // { Descrição: "LotesEstudo", Valor: 16 },

            // { Descrição: "LotesEstudo", Valor: 16 },

            // { Descrição: "LotesEstudo", Valor: 16 },

            // { Descrição: "DuraçãoDia", Valor: 100 },

            // { Descrição: "DuraçãoDia", Valor: 100 },

            // { Descrição: "DuraçãoDia", Valor: 100 },

            // { Descrição: "PorcentagemCasosHumanos", Valor: 0.1 },

            // { Descrição: "PorcentagemCasosHumanos", Valor: 0.1 },

            // { Descrição: "PorcentagemCasosHumanos", Valor: 0.1 },

            // { Descrição: "FraçãoBebesMasculinos", Valor: 0.51 },

            // { Descrição: "FraçãoBebesMasculinos", Valor: 0.51 },

            // { Descrição: "FraçãoBebesMasculinos", Valor: 0.51 },

            // { Descrição: "FraçãoCriançasMasculinas", Valor: 0.5 },

            // { Descrição: "FraçãoCriançasMasculinas", Valor: 0.5 },

            // { Descrição: "FraçãoCriançasMasculinas", Valor: 0.5 },

            // { Descrição: "FraçãoAdolescentesMasculinos", Valor: 0.5 },

            // { Descrição: "FraçãoAdolescentesMasculinos", Valor: 0.5 },

            // { Descrição: "FraçãoAdolescentesMasculinos", Valor: 0.5 },

            // { Descrição: "FraçãoJovensMasculinos", Valor: 0.5 },

            // { Descrição: "FraçãoJovensMasculinos", Valor: 0.5 },

            // { Descrição: "FraçãoJovensMasculinos", Valor: 0.5 },

            // { Descrição: "FraçãoAdultosMasculinos", Valor: 0.48 },

            // { Descrição: "FraçãoAdultosMasculinos", Valor: 0.48 },

            // { Descrição: "FraçãoAdultosMasculinos", Valor: 0.48 },

            // { Descrição: "FraçãoIdososMasculinos", Valor: 0.45 },

            // { Descrição: "FraçãoIdososMasculinos", Valor: 0.45 },

            // { Descrição: "FraçãoIdososMasculinos", Valor: 0.45 },

            // { Descrição: "DuraçãoAno", Valor: 365 },

            // { Descrição: "DuraçãoAno", Valor: 365 },

            // { Descrição: "DuraçãoAno", Valor: 365 },

            // { Descrição: "PorcentagemCasosFemeas", Valor: 0.1 },

            // { Descrição: "PorcentagemCasosFemeas", Valor: 0.1 },

            // { Descrição: "PorcentagemCasosFemeas", Valor: 0.1 },

        // ],
        // [
            // {
                // "0-INI.csv": `Codigo;Min;Max;Descricao
// INI001;12303;12303;Quantidade de Humanos Suscetiveis Bebe Masculino
// INI002;0;0;Quantidade de Humanos Expostos Bebe Masculino
// INI003;0;0;Quantidade de Humanos Infectados Bebe Masculino
// INI004;0;0;Quantidade de Humanos Recuperados Bebe Masculino
// INI005;20544;20544;Quantidade de Humanos Suscetiveis Crianca Masculino
// `,
                // "1-MOV.csv": `Codigo;Min;Max;Descricao
// MOV001;0.10;0.10;Taxa de Mobilidade para Humano Bebe
// MOV002;0.10;0.10;Taxa de Mobilidade para Humano Crianca
// MOV003;0.10;0.10;Taxa de Mobilidade para Humano Adolescente
// MOV004;0.10;0.10;Taxa de Mobilidade para Humano Jovem
// MOV005;0.10;0.10;Taxa de Mobilidade para Humano Adulto
// MOV006;0.10;0.10;Taxa de Mobilidade para Humano Idoso
// MOV007;0.10;0.10;Percentual de Migracao Humanos Infectados
// `,
                // "2-CON.csv": `Codigo;Min;Max;Descricao
// CON001;0.30;0.40;Taxa de Infeccao Humano Suscetivel Bebe
// CON002;0.30;0.40;Taxa de Infeccao Humano Suscetivel Crianca
// CON003;0.30;0.40;Taxa de Infeccao Humano Suscetivel Adolescente
// CON004;0.30;0.40;Taxa de Infeccao Humano Suscetivel Jovem
// CON005;0.30;0.40;Taxa de Infeccao Humano Suscetivel Adulto
// CON006;0.30;0.40;Taxa de Infeccao Humano Suscetivel Idoso
// CON007;0.655;0.655;Constante Complemento`,
                // "3-TRA.csv": `Codigo;Min;Max;Descricao
// TRA001;1;3;Quantidade de Ciclos para Humano Exposto Bebe
// TRA002;1;3;Quantidade de Ciclos para Humano Exposto Crianca
// TRA003;1;3;Quantidade de Ciclos para Humano Exposto Adolescente
// TRA004;1;3;Quantidade de Ciclos para Humano Exposto Jovem
// TRA005;1;3;Quantidade de Ciclos para Humano Exposto Adulto
// TRA006;1;3;Quantidade de Ciclos para Humano Exposto Idoso
// TRA007;2;4;Quantidade de Ciclos para Humano Infectado Bebe
// TRA008;2;4;Quantidade de Ciclos para Humano Infectado Crianca
// TRA009;2;4;Quantidade de Ciclos para Humano Infectado Adolescente`,
            // },
        // ],
        // [
            // {
                // "0-SIM": `Codigo;Min;Max;Descricao
// SIM001;1;1;Quantidade de Simulacoes
// SIM002;214;214;Quantidade de Ciclos por Simulacao`,
            // },
        // ],
    // ];

    // return (
        // <div id="center">
            // <h1> Influenza</h1>
            // <h2> Ambiente </h2>
            // <Grid
                // data={data[0]}
                // onChange={(x, y, objKey, value) => {
                    // data[0][y][objKey] = value;
                // }}
            // />

            // {/* <h2> Humanos </h2> */}
            // {/* <Grid */}
            // {/*     data={data[1]} */}
            // {/*     onChange={(x, y, objKey, value) => { */}
            // {/*         data[1][y][objKey] = value; */}
            // {/*     }} */}
            // {/* /> */}

            // {/* <h2> Simulação </h2> */}
            // {/* <Grid */}
            // {/*     data={data[2]} */}
            // {/*     onChange={(x, y, objKey, value) => { */}
            // {/*         data[2][y][objKey] = value; */}
            // {/*     }} */}
            // {/* /> */}
        // </div>
    // );
// }
