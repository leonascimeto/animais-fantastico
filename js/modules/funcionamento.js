export default function initFuncionamento(){
  const now = new Date();
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horario = funcionamento.dataset.horario.split(',').map(Number);

  const nowDayWeek = now.getDay();
  const nowHour = now.getHours();

  const weekOpen = diasSemana.indexOf(nowDayWeek) !== -1;

  const hourOpen = (nowHour >= horario[0] && nowHour < horario[1]);

  if(hourOpen === true && weekOpen === true){
    funcionamento.classList.remove('fechado');
    funcionamento.classList.add('aberto');
  }
  else{
    funcionamento.classList.remove('aberto');
    funcionamento.classList.add('fechado');
  }


}