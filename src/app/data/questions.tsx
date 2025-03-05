export interface Option {
    id: string;
    image: string;
    text: string;
  }
  
  export interface Question {
    id: number;
    image: string;
    text: string;
    options: Option[];
  }
  
  
  export const questions: Question[] = [
    {
        id: 1,
        image: "/question1.png",
        text: "Qual função é usada para somar um intervalo de células?",
        options: [
          { id: "a", image: "/sum.png", text: "=SOMA()" },
          { id: "b", image: "/count.png", text: "=CONT.VALORES()" },
          { id: "c", image: "/average.png", text: "=MÉDIA()" },
          { id: "d", image: "/if.png", text: "=SE()" },
        ],
      },
      {
        id: 2,
        image: "/question2.png",
        text: "Como congelar a linha superior de uma planilha?",
        options: [
          { id: "a", image: "/freeze_top.png", text: "Exibir > Congelar Painéis > Congelar Linha Superior" },
          { id: "b", image: "/freeze_first.png", text: "Exibir > Congelar Painéis > Congelar Primeira Coluna" },
          { id: "c", image: "/freeze_cells.png", text: "Formatar > Células > Congelar" },
          { id: "d", image: "/view_grid.png", text: "Exibir > Linhas de Grade" },
        ],
      },
      {
        id: 3,
        image: "/question3.png",
        text: "Qual atalho copia o conteúdo de uma célula?",
        options: [
          { id: "a", image: "/ctrl_x.png", text: "Ctrl + X" },
          { id: "b", image: "/ctrl_c.png", text: "Ctrl + C" },
          { id: "c", image: "/ctrl_v.png", text: "Ctrl + V" },
          { id: "d", image: "/ctrl_z.png", text: "Ctrl + Z" },
        ],
      },
      {
        id: 4,
        image: "/question4.png",
        text: "Qual formato de arquivo mantém as macros?",
        options: [
          { id: "a", image: "/xls.png", text: ".xls" },
          { id: "b", image: "/xlsx.png", text: ".xlsx" },
          { id: "c", image: "/xlsm.png", text: ".xlsm" },
          { id: "d", image: "/csv.png", text: ".csv" },
        ],
      },
      {
        id: 5,
        image: "/question5.png",
        text: "Como mesclar células sem perder dados?",
        options: [
          { id: "a", image: "/merge_cells.png", text: "Formatar > Mesclar e Centralizar" },
          { id: "b", image: "/concat.png", text: "Usando =CONCATENAR()" },
          { id: "c", image: "/merge_no_data.png", text: "Formatar > Mesclar sem perder dados" },
          { id: "d", image: "/split_cells.png", text: "Dividir células antes de mesclar" },
        ],
      },
      {
        id: 6,
        image: "/question6.png",
        text: "Como transformar uma linha em coluna?",
        options: [
          { id: "a", image: "/transpose_paste.png", text: "Copiar > Colar Especial > Transpor" },
          { id: "b", image: "/drag_cells.png", text: "Arrastando as células" },
          { id: "c", image: "/sort_cells.png", text: "Usando Classificação" },
          { id: "d", image: "/group_cells.png", text: "Agrupando células" },
        ],
      },
      {
        id: 7,
        image: "/question7.png",
        text: "Qual tecla exibe a edição de célula?",
        options: [
          { id: "a", image: "/ctrl_enter.png", text: "Ctrl + Enter" },
          { id: "b", image: "/f2.png", text: "F2" },
          { id: "c", image: "/alt_tab.png", text: "Alt + Tab" },
          { id: "d", image: "/shift_f3.png", text: "Shift + F3" },
        ],
      },
      {
        id: 8,
        image: "/question8.png",
        text: "Como criar uma tabela dinâmica?",
        options: [
          { id: "a", image: "/insert_pivot.png", text: "Inserir > Tabela Dinâmica" },
          { id: "b", image: "/sort_filter.png", text: "Classificar e Filtrar" },
          { id: "c", image: "/chart_options.png", text: "Inserir > Gráficos" },
          { id: "d", image: "/table_options.png", text: "Formatar como Tabela" },
        ],
      },
    // Adicione mais questões...
  ];
  