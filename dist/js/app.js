new Vue({
  el: '#vue-app',
  data: {
        currentFilter: 'ALL',
        category: '',
        projectList: [
         {
              title: 'For The Rock', 
              link: 'fortherock.html', 
              img: 'dist/img/ftr.webp',
              category: 'Graphic Designers'
         },
            {
              title:'Concise Web Designs', 
              link:'https://cwd.beyondthegravemusic.com/', 
              img: 'dist/img/cwd.png',
               category: 'Web Designers'
          },
           
  
           
        ], 
    },
  
  methods: {
    setFilter: function (filter) {
      this.currentFilter = filter;
        } 
    },
    
  });