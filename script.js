const formatador = (data) => {
  return {
    dia: {
      numerico: dayjs(data).format("DD"),
      semana: {
        curto: dayjs(data).format("ddd"),
        longo: dayjs(data).format("dddd"),
      },
    },
    mes: dayjs(data).format("MMMM"),
    hora: dayjs(data).format("HH:mm"),
  };
};

formatador(new Date("2024-04-01"));

let atividades = [
  {
    nome: "Almoço",
    data: new Date("2024-07-08 10:00"),
    finalizada: true,
  },
  {
    nome: "Academia em grupo",
    data: new Date("2024-07-09 12:00"),
    finalizada: false,
  },
  {
    nome: "Gamming session",
    data: new Date("2024-07-09 16:00"),
    finalizada: true,
  },
];

const criarItemDeAtividade = (atividade) => {
  let input = '<input type="checkbox" ';

  if (atividade.finalizada) {
    input += "checked";
  }

  input += ">";

  const formatar = formatador(atividade.data);

  return `
  <div>
    ${input}
    <span>${atividade.nome}</span>
    <time>
      ${formatar.dia.semana.longo},
      dia ${formatar.dia.numerico} 
      de ${formatar.mes} 
      às ${formatar.hora}h 
    </time>
  </div>
  `;
};

const atualizarListaDeAtividades = () => {
  const section = document.querySelector("section");

  if (atividades.length == 0) {
    section.innerHTML = "<p>Nenhuma atividade cadastrada</p>";
    return;
  }

  for (let atividade of atividades) {
    section.innerHTML += criarItemDeAtividade(atividade);
  }
};

atualizarListaDeAtividades();
