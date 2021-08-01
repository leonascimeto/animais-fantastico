export default function initModal(){
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toogleModal(event){
    console.log('modal teste')
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function fecharModal(event){
    if(event.target === this){
      toogleModal(event);
    }
  }

  btnAbrir.addEventListener('click', toogleModal);
  btnFechar.addEventListener('click', toogleModal);
  containerModal.addEventListener('click', fecharModal)
}