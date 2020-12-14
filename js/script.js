var app = new Vue ({ //instanzio vue
  el: "#app",
  data: {
    logoHeader: "img/img/logo-sidearea-1.png",
    headerMenu: "img/svg/svg-1.svg",
    classe13: "size13",
    classe16: "size16",
    classeFab: "fab",
    logoFooter: "img/img/logo-sidearea-1.png",
    classFooSez: "footerSez",
    navBar: [
      {
        testo: "HOME",
        linkHref:"http://www.google.com"
      },
      {
        testo: "PAGES",
        linkHref:"http://www.google.com"
      },
      {
        testo: "PORTFOLIO",
        linkHref:"http://www.google.com"
      },
      {
        testo: "BLOG",
        linkHref:"http://www.google.com"
      },
      {
        testo: "SHOP",
        linkHref:"http://www.google.com"
      },
      {
        testo: "ELEMENTS",
        linkHref:"http://www.google.com"
      }
    ],
    footer: [
      {
        // immagine: true,
        urlImg: "img/img/logo-sidearea-1.png",
        testoP1: "",
        testoP2:"Let's Get Creative",
        // icona: false,
        fontAwesome: []
      },
      {
        // immagine: false,
        urlImg: "",
        testoP1: "maree.qode@gmail.com",
        testoP2:"+44645321789",
        // icona: false,
        fontAwesome: []
      },
      {
        // immagine: false,
        urlImg: "",
        testoP1: "Avenue d'Auderghem 10",
        testoP2:"1040 Brussels, Belgium",
        // icona: false,
        fontAwesome: []
      },
      {
        // immagine: false,
        urlImg: "",
        testoP1: "Stay in touch with us",
        testoP2:"",
        // icona: true,
        fontAwesome: ["fa-twitter", "fa-pinterest-p", "fa-facebook-f", "fa-linkedin-in"]
      }
    ]
  }
});
