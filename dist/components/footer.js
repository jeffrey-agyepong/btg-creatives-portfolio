class Footer extends HTMLElement {
  constructor(){
  super();
}


connectedCallback(){
this.innerHTML =`
<footer class="container footer footer_links bg-dark">
<p class="white-text center-align">Developed by: <a href="" target="_blank" class="copyright">Concise Web
    Designs</a></p>
<p class="copyright center-align white-text">&copy; 2021 Beyond The Grave</p>
<p class="center-align white-text"><a href="https://beyondthegravemusic.com/privacy-policy.html" target="_blank" rel="noopener noreferrer"
  class="center-align">Privacy
  Policy</a></p>

</footer>
`;

}

}

customElements.define('footer-component', Footer);