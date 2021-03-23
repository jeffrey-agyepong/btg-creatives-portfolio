class Footer extends HTMLElement {
  constructor(){
  super();
}


connectedCallback(){
this.innerHTML =`
<div class="bg-dark">

<div class="container footer_links ">

<p class="white-text center-align">Developed by: <a href="" target="_blank" class="copyright">Concise Web
    Designs</a></p>
<p class="copyright center-align white-text">&copy; 2021 Beyond The Grave</p>
<p class="center-align white-text"><a href="https://beyondthegravemusic.com/privacy-policy.html" target="_blank" rel="noopener noreferrer"
  class="center-align">Privacy
  Policy</a></p>

</div>


</div>
`;

}

}

customElements.define('footer-component', Footer);