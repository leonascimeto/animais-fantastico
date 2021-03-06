export default function initTooltip(){
  const tooltip = document.querySelectorAll('[data-tooltip]');
  tooltip.forEach((item) => item.addEventListener('mouseover', onMouseOver));

  function onMouseOver(event){
    const tooltipBox = createTooltip(this);
   
    tooltipBox.style.top = event.pageY + 'px';
    tooltipBox.style.left = event.pageX + 'px';
   
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);
  
    onMouseLeave.tooltipBox = tooltipBox;
    this.addEventListener('mouseleave', onMouseLeave);
  
    onMouseLeave.element = this;
    
  }
  
  const onMouseMove = {
    handleEvent(event){
      this.tooltipBox.style.top = event.pageY + 20 +'px';
      this.tooltipBox.style.left = event.pageX + 20 +'px';
    }
  }
  
  const onMouseLeave = {
    handleEvent(){
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }
  }
  
  
  
  function createTooltip(element){
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}


