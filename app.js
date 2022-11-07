var carta1 = {
    nome: "Hannibal Lecter",
    imagem:
      "https://img.elo7.com.br/product/original/3192A05/placa-decorativa-mdf-466-hannibal-lecter-annabelle.jpg",
    atributos: {
      Crueldade: 10,
      Maldade: 9,
      Loucura: 7
    }
  };
  
  var carta2 = {
    nome: "Darth Vader",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Star_Wars_-_Darth_Vader.jpg",
    atributos: {
      Crueldade: 9,
      Maldade: 7,
      Loucura: 9
    }
  };
  
  var carta3 = {
    nome: "Coringa",
    imagem:
      "https://zonafantasmanet.files.wordpress.com/2021/07/the_joker_vol_2_1_exclusive_scorpion_comics_variant_b.jpg",
    atributos: {
      Crueldade: 9,
      Maldade: 8,
      Loucura: 10
    }
  };
  
  var carta4 = {
    nome: "Voldemort",
    imagem:
      "http://2.bp.blogspot.com/-hvofcScgU-A/ToX0feiRJmI/AAAAAAAAAUA/igGdff80XtI/s1600/Lord%2BVoldemort.jpg",
    atributos: {
      Crueldade: 7,
      Maldade: 9,
      Loucura: 7
    }
  };
  
  var carta5 = {
    nome: "Pennywise",
    imagem: "https://wallpaper.dog/large/20422567.jpg",
    atributos: {
      Crueldade: 10,
      Maldade: 9,
      Loucura: 8
    }
  };
  
  var carta6 = {
    nome: "Hera Venenosa",
    imagem:
      "https://i.pinimg.com/474x/d7/cc/8d/d7cc8d05e1de341043c6ffe210e3dea2.jpg",
    atributos: {
      Crueldade: 6,
      Maldade: 8,
      Loucura: 6
    }
  };
  
  var carta7 = {
    nome: "Tubarão",
    imagem:
      "https://i.pinimg.com/736x/4a/c4/23/4ac42314c4d6444c8c911729b1a49501--disneyland-california-finding-nemo.jpg",
    atributos: {
      Crueldade: 6,
      Maldade: 9,
      Loucura: 5
    }
  };
  
  var carta8 = {
    nome: "Norman Bates",
    imagem:
      "http://s2.glbimg.com/nvZ3ffkRGWEY7VhAgLKe-2Q73D0=/smart/e.glbimg.com/og/ed/f/original/2016/01/28/bates-motel-.jpg",
    atributos: {
      Crueldade: 8,
      Maldade: 8,
      Loucura: 9
    }
  };
  
  var carta9 = {
    nome: "Malévola",
    imagem:
      "https://4.bp.blogspot.com/-Vd7OzDO3Poo/XYlFNlG72BI/AAAAAAAAvbI/qBztKVBxfOME4f8bJesXvbdiI4LNz2ipACLcBGAsYHQ/s1600/malevola-estupro-e-male-tears.jpg",
    atributos: {
      Crueldade: 6,
      Maldade: 7,
      Loucura: 8
    }
  };
  
  var carta10 = {
    nome: "Ursula",
    imagem: "https://epipoca.com.br/wp-content/uploads/2021/02/5594177.jpg",
    atributos: {
      Crueldade: 7,
      Maldade: 9,
      Loucura: 9
    }
  };
  
  var cartaMaquina;
  var cartaJogador;
  var cartas = [
    carta1,
    carta2,
    carta3,
    carta4,
    carta5,
    carta6,
    carta7,
    carta8,
    carta9,
    carta10
  ];
  
  function sortearCarta() {
    cartaMaquina = cartas[parseInt(Math.random() * 10)];
    cartaJogador = cartas[parseInt(Math.random() * 10)];
    while (cartaMaquina == cartaJogador) {
      cartaJogador = cartas[parseInt(Math.random() * 10)];
    }
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    document.getElementById("btnJogarNovamente").disabled = false;
  
    console.log(cartaJogador);
  
    exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
  
    for (i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function jogarNovamente() {
    location.reload();
  }
  