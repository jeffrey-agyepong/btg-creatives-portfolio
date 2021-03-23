class Header extends HTMLElement {
  constructor(){
  super();
}


connectedCallback(){
this.innerHTML = `
<div class="navbar-fixed">
<nav class="bg-dark-1 darken-3 nav-center" role="navigation" id="header">
  <div class="nav-wrapper container">
    <a id="logo-container" href="https://beyondthegravemusic.com" class="brand-logo ">Beyond The Grave</a>
    <ul class="right hide-on-med-and-down">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <ul id="nav-mobile" class="sidenav black center">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
      <div class=" center" id="">
        <a href=""><i class="fab fa-facebook fa-2x white-text" target="_blank"></i></a>

        <a href="" target=_blank id="profile-link"><i class="fab fa-instagram fa-2x white-text"></i></a>

        <a href="" target="_blank"><i class="fab fa-youtube fa-2x white-text"></i></a>

      </div>
    </ul>
    <a href="#" data-target="nav-mobile" class="sidenav-trigger header_toggle">
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>
</nav>
</div>

`;


}
}
customElements.define('header-component', Header);