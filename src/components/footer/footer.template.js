export function getFooter(self) {
  self.root.innerHTML = footerTemplate
  
}

const footerTemplate = 
    `<div class="footer">
            <div class="footer__content" data-type="expand">+</div>
            <div class="footer__content" data-type="collapse">&#8212;</div>
            <div class="footer__content" data-type="reverse">&#8657</div>
            <div class="footer__content footer__table" data-type="table">
             I &nbsp; &nbsp; I &nbsp; &nbsp; I
            </div>
          </div>`
