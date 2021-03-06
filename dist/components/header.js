class Header extends HTMLElement {
  constructor(){
  super();
}


connectedCallback(){
this.innerHTML = `
<div class="navbar-fixed">
<nav class="bg-dark-1 darken-3 nav-center" role="navigation" id="header">
  <div class="nav-wrapper container">
    <a href="https://beyondthegravemusic.com">Beyond The Grave</a>
    <ul class="right hide-on-med-and-down">
    <li> <a href="https://bands.beyondthegravemusic.com/">Bands</a></li>
    <li><a href="https://www.beyondthegravemusic.com/tag/Interviews/">Interviews</a></li>
    <li><a href="https://www.beyondthegravemusic.com/tag/Album-Reviews/">Reviews</a></li>
    <li><a href="https://www.beyondthegravemusic.com/tag/News/">News</a></li>
    <li><a href="https://www.beyondthegravemusic.com/submit/">Submit</a></li>
    <li><a href="https://www.beyondthegravemusic.com/about/">About</a></li>
    <li><a href="https://www.hire.beyondthegravemusic.com">Hire</a></li>
    </ul>
    <ul id="nav-mobile" class="sidenav black center">
        <li><a href="https://beyondthegravemusic.com/" class="white-text">Beyond The Grave</a></li>
    <li><a href="https://bands.beyondthegravemusic.com/" class="white-text">Bands</a></li>
    <li><a href="https://www.beyondthegravemusic.com/tag/Interviews/" class="white-text">Interviews</a></li>
    <li><a href="https://www.beyondthegravemusic.com/tag/Album-Reviews/" class="white-text">Reviews</a></li>
    <li><a href="https://www.beyondthegravemusic.com/tag/News/" class="white-text">News</a></li>
    <li><a href="https://www.beyondthegravemusic.com/submit/" class="white-text">Submit</a></li>
    <li><a href="https://www.beyondthegravemusic.com/about/" class="white-text">About</a></li>
    <li><a href="https://www.hire.beyondthegravemusic.com" class="white-text">Hire</a></li>
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
