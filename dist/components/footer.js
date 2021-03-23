class Footer extends HTMLElement {
  constructor(){
  super();
}


connectedCallback(){
this.innerHTML =`
<footer class="page-footer">
<div class="container">
  <div class="row">
    <div class="col l6 s12">
      <h5 class="white-text">Consider Supporting Us</h5>
      <p class="grey-text text-lighten-4"> <a href="https://www.buymeacoffee.com/beyondthegrave" target="_blank"><img
      src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee"
      style="height: 60px !important;width: 217px !important;"></a></p>
    </div>
    <div class="col l4 offset-l2 s12">
    <h5 class="white-text center-align">Connect With Us</h5>
    <div class="flex icons center-align">

      <span><a href="https://web.facebook.com/Beyondthegrave777" class="icon brands fab fa-facebook fa-3x"><span
            class="label"></span></a></span>
      <span><a href="https://www.instagram.com/beyond.the.grave_/" class="icon brands fab fa-instagram fa-3x"><span
            class="label"></span></a></span>
      <span><a href="https://www.youtube.com/channel/UCCXafO-fbIZnTHNoRlx2QWg
        " class="icon brands fab fa-youtube fa-3x"><span class="label"></span></a></span>

    </div>
    </div>
  </div>
</div>
<div class="footer-copyright">
  <div class="container">
  © 2021 Beyond The Grave
  <a class="grey-text text-lighten-4 right" href="#!">Concise Web Designs</a>
  </div>
</div>
</footer>`
;

}

}

customElements.define('footer-component', Footer);