
export function clickPricingBtnHandler(e){
  document.querySelector('.pricing-tag--selected').classList.remove('pricing-tag--selected')
  e.currentTarget.classList.add('pricing-tag--selected')
}