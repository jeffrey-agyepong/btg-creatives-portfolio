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
      <h5 class="white-text">Footer Content</h5>
      <p class="grey-text text-lighten-4"></p>
    </div>
    <div class="col l4 offset-l2 s12">
      <h5 class="white-text">Links</h5>
      <ul>
        <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
        <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
        <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
        <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
      </ul>
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