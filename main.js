// config variables
var projects = ["conversor", "mentalista", "aluraflix", "tabela", "superTrunfo"]

// project config variables

// tabela
var rafa = {nome:"rafa", vitorias:1, empates:0, derrotas:1}
var paulo = {nome:"paulo", vitorias:1, empates:0, derrotas:1}
var gui = {nome:"gui", vitorias:1, empates:0, derrotas:1}
var players = [rafa, paulo, gui]

// mentalista
var secretNum = parseInt(Math.random(0, 10) * 11)
var tentativas = 0

// aluraflix
var watchList = {bakemonogatari:"https://cdn.myanimelist.net/images/anime/11/75274.jpg",
                kizumonogatari:"https://upload.wikimedia.org/wikipedia/en/c/cc/Kizumonogatari_Part_1_Tekketsu_poster.jpeg",
                nisemonogatari:"https://cdn.myanimelist.net/images/anime/1044/103654.jpg",
                hanamonogatari:"https://cdn.myanimelist.net/images/anime/13/65755.jpg"}

// superTrunfo
var bulbasaur = {nome: "bulbasaur",
                sprite: "https://img.pokemondb.net/sprites/firered-leafgreen/normal/bulbasaur.png",
                atributos: {
                    ataque: 49,
                    defesa: 49,
                    hp: 45
                }}
var squirtle = {nome: "squirtle",
                sprite: "https://img.pokemondb.net/sprites/firered-leafgreen/normal/squirtle.png",
                atributos: {
                    ataque: 48,
                    defesa: 65,
                    hp: 44
                }}
var charmander = {nome: "charmander",
                sprite: "https://img.pokemondb.net/sprites/firered-leafgreen/normal/charmander.png",
                atributos: {
                    ataque: 42,
                    defesa: 43,
                    hp: 39
                }}
var cartas = [bulbasaur, squirtle, charmander]
var cardMachine
var cardPlayer

// page functions
function getDate(){
    var today = new Date()
    var dd = String(today.getDate())
    var weekday = today.getDay()
    var mm = today.getMonth()
    var yyyy = String(today.getFullYear())
    var hour = today.getHours().toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false})
    var min = today.getMinutes().toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false})
    var months_name = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    var week_days = ["Sun", "Mon", "Tues", "Wed", "Thrus", "Fri", "Sat"]
    var full_date = `${week_days[weekday]} ${dd} ${months_name[mm]}, ${hour}:${min}`
    var element = document.getElementById("date")
        element.innerHTML = full_date
    }

function line_numbers(n=29){
    var ln = document.getElementById("line-number")
    var result = ""
    for (var i=1;i<=n;i++){
        result += i + "<br>"
    }
    ln.innerHTML = result
}

function setListProjects(projectList){
    var element = document.getElementById("projects")
    var result = ""
    for (var i in projectList){
        result += `<a class="clickable" onclick="setContent(${projectList[i]})">${projectList[i]},</a><br>\n`
    }
    element.innerHTML = result
}

function setContent(content=mentalista){
    resetContent()
    var element = document.getElementById("content")
    element.innerHTML = content
    if (content == tabela){
        createPlayersView(players)
    }else if(content == aluraflix){
        setAnimeList(watchList)
    }
}

function resetContent(){
    document.getElementById("object-info").innerHTML = ""
    document.getElementById("content").innerHTML = ""
}

function setInfoContent(elementId ,content){
    document.getElementById(elementId).innerHTML = `<div class="info">${content}</div>`
}

// project functions

// mentalista
function Chutar(){
        var chute = parseInt(document.getElementById("valor").value)
        var resultado = document.getElementById("resultado")

        if (tentativas > 3){
            resultado.innerHTML = "tentativas esgotadas. o valor ??: " + secretNum
        }
        else if (chute > 10 || chute < 0){
            resultado.innerHTML = "valor invalido, digite um numero de 0 a 10."
        }
        else if (chute == secretNum){
            resultado.innerHTML = "acertou"
        }
        else if (chute < secretNum){
            resultado.innerHTML = "errou, o numero ?? maior"
        }
        else {
            resultado.innerHTML = "errou, o numero ?? menor"
        }

        tentativas ++
}

// conversor
function Converter(conversionValue) {
    var value = document.getElementById("valor").value;
    var realValue = parseFloat(value) * conversionValue;
  
    var valorConvertido = document.getElementById("valorConvertido");
    valorConvertido.innerHTML = "O resultado em real ?? R$: " + realValue;
  }

// tabela
function calcPoints(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}
function adicionarVitoria(i){
    players[i].vitorias++
    createPlayersView(players)
}
function adicionarEmpate(i){
    players[i].empates++
    createPlayersView(players)
}
function adicionarDerrota(i){
    players[i].derrotas++
    createPlayersView(players)
}

function resetPlayer(i){
    players[i].vitorias = 0
    players[i].empates = 0
    players[i].derrotas = 0
    createPlayersView(players)
}

function addPlayer(){
    var playerName = document.getElementById("playerName")
    var newPlayer = {nome: playerName.value, vitorias:0, empates:0, derrotas:0}
    players.push(newPlayer)
    createPlayersView(players)
}

function createPlayersView(players){
    var element = ""
    for (var i=0; i<players.length; i++){
        element += "<tr><td>"+ players[i].nome +"</td>"
        element += "<td>"+ players[i].vitorias +"</td>"
        element += "<td>"+ players[i].empates +"</td>"
        element += "<td>"+ players[i].derrotas +"</td>"
        element += "<td>"+ calcPoints(players[i]) +"</td>"
        element += "<td><button onClick='adicionarVitoria("+ i +")'>Vit??ria</button></td>"
        element += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        element += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
        element += "<td><button onClick='resetPlayer("+ i +")'>Reset</button></td>"
        element += "</tr>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = element
}

// aluraflix
function setAnimeList(list){
    var element = document.getElementById("animeList")
    var animeList = ""
    var func = ""

    for (var anime in list){
        func = `setAnimeImage(watchList.${anime})`
        animeList += `<a class="indent-two selected-line selectable" onclick="${func}">${anime},</a><br>`
    }
    element.innerHTML = animeList
}

function setAnimeImage(url){
    var content = `<img src="${url}"><br>`
    content += `<span style="text-align: center">${name}</span><br>`
    setInfoContent("object-info", content)
}

// superTrunfo
function setPokemon(pokemon){
    var content = ""

    content += `<img src="${pokemon.sprite}"><br>`
    content += `nome: "${pokemon.nome}"<br>`
    content += `atributos: <br>`
    for (var attr in pokemon.atributos){
        content += `<span class="indent selectable">${attr}: "${pokemon.atributos[attr]}"</span>
          <input type='radio' name='atributo' value='${attr}'><br>`
    }
    content += `<div id="resultado"></div>`
    content += `<div id="enemy"></div>`
    setInfoContent("object-info", content)
}

function setPokemonEnemy(pokemon){
    var content = ""

    content += `<img src="${pokemon.sprite}"><br>`
    content += `nome: "${pokemon.nome}"<br>`
    content += `atributos: <br>`
    for (var attr in pokemon.atributos){
        content += `<span class="indent selectable">${attr}: "${pokemon.atributos[attr]}"</span><br>`
    }
    content += "<button onClick='resetContent()'>Fechar</button>"
    setInfoContent("enemy", content)
}

function sortearCarta(){
    var machineCard = parseInt(Math.random() * 3)
    var playerCard = parseInt(Math.random() * 3)

    while (machineCard == playerCard){
        playerCard = parseInt(Math.random() * 3)
    }

    cardMachine = cartas[machineCard]
    cardPlayer = cartas[playerCard]

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    setPokemon(cardPlayer)
    //exibirCarta("carta-jogador", cardPlayer, input=true)
}

function obtemAtributoSelecionado(){
    var atributos = document.getElementsByName("atributo")

    for (var i=0; i<atributos.length; i++){
        if (atributos[i].checked){
            return atributos[i].value
        }
    }
}

function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado()
    var elementoResultado = document.getElementById("resultado")
    var valorCartaJogador = cardPlayer.atributos[atributoSelecionado]
    var valorCartaMaquina = cardMachine.atributos[atributoSelecionado]
    var resultado = ""

    if (valorCartaJogador > valorCartaMaquina){
        resultado = "Voc?? venceu!"
    }
    else if (valorCartaJogador < valorCartaMaquina){
        resultado = "Voc?? perdeu!"
    }
    else if (valorCartaJogador == undefined){
        resultado = "Escolha um atributo!"
    }
    else if (valorCartaJogador == valorCartaMaquina){
        resultado = "Empate!"
    }
    elementoResultado.innerHTML = `<p class="resultado-filnal">${resultado}</p>`
    document.getElementById("btnJogar").disabled = true;
    //exibirCarta("carta-maquina", cardMachine)
    setPokemonEnemy(cardMachine)
}

function exibirCarta(element, card, input=false){
    var elementCartaJogador = document.getElementById(element)
    elementCartaJogador.style.backgroundImage = `url(${card.sprite})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div  id='opcoes' class='carta-status'>"
    var nome = `<p class="carta-subtitle">${card.nome}</p>`
    var opcoesTexto = ""

    if(input){
        var type = "input"
    }
    else{
        var type = "p"
    }
    for (var atributo in card.atributos){
        opcoesTexto += `<${type} type='radio' name='atributo' value='${atributo}'>`
        opcoesTexto += atributo +":"+ card.atributos[atributo]
        opcoesTexto += "<br>"
    }
    elementCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

// project-html-variables
const mentalista = `
<br>
<span class="selected-line">var project = {</span><br>
<span class="indent selected-line">name: "mentalista",</span><br>
<span class="indent selected-line">text: "Digite um n??mero de 0 a 10",</span><br>
<span class="indent selected-line">input: <input type="number" id="valor" /> ,</span><br>
<span class="indent selected-line">button: <button type="submit" onclick="Chutar()">Chutar</button> ,</span><br>
<span class="indent selected-line">result: "<span class="resultado" id="resultado"></span> "<br>
<span class="indent selected-line">sponsor:"alura"</span><br>
<span class="indent selected-line">}</span><br>
`
const conversor = `
<br>
<span class="selected-line">var project = {</span><br>
<span class="indent selected-line">name: "conversor de moedas",</span><br>
<span class="indent selected-line">text: "Descubra os valores em dolar U$",</span><br>
<span class="indent selected-line">input: <input type="number" id="valor" /> ,</span><br>
<span class="indent selected-line">button_dollar: <button type="submit" onclick="Converter(5.5)">Converter Dollar</button> ,</span><br>
<span class="indent selected-line">button_euro: <button type="submit" onclick="Converter(6.25)">Converter Euro</button> ,</span><br>
<span class="indent selected-line">result: "<span id="valorConvertido"></span> "<br>
<span class="indent selected-line">sponsor:"alura"</span><br>
<span class="indent selected-line">}</span><br>
`
const aluraflix = `
<br>
<span class="selected-line">var project = {</span><br>
<span class="indent selected-line">name: "aluraflix",</span><br>
<span class="indent selected-line">list: [</span><br>
    <div id="animeList">
    </div>
<span class="indent-two selected-line">]</span><br>
<span class="indent selected-line">sponsor: "alura"</span><br>
<span class="indent selected-line">}</span><br>
`
var tabela = `
<table style="width:100%">
<thead>
<tr>
<th>Nome</th>
<th>Vit??rias</th>
<th>Empates</th>
<th>Derrotas</th>
<th>Pontos</th>
<th colspan="3">A????es</th>
</tr>
</thead>
<tbody id="tabelaJogadores">
<tr>
<td>Paulo</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><button onClick="adicionarVitoria()">Vit??ria</button></td>
<td><button onClick="adicionarEmpate()">Empate</button></td>
<td><button onClick="adicionarDerrota()">Derrota</button></td>
</tr>
<tr>
<td>Rafa</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><button onClick="adicionarVitoria()">Vit??ria</button></td>
<td><button onClick="adicionarEmpate()">Empate</button></td>
<td><button onClick="adicionarDerrota()">Derrota</button></td>
</tr>
<tr>
<td>Gui</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><button onClick="adicionarVitoria()">Vit??ria</button></td>
<td><button onClick="adicionarEmpate()">Empate</button></td>
<td><button onClick="adicionarDerrota()">Derrota</button></td>
</tr>
</tbody>
</table>
`
const superTrunfo = `
<br>
<span class="selected-line">var project = {</span><br>
<span class="indent selected-line">name: "superTrunfo",</span><br>
<span class="indent selected-line">button_sortear_carta: <button onclick="sortearCarta()" id="btnSortear">Sortear carta</button>,</span><br>
<span class="indent selected-line">text: "Escolha o seu atributo",</span><br>
<span class="indent selected-line">button_jogar: <button class="button-jogar" type="button" id="btnJogar" onclick="jogar()" disabled="false">Jogar</button>,</span><br>
<span class="indent selected-line">sponsor: "alura"</span><br>
<span class="indent selected-line">}</span><br>
`

line_numbers()
getDate()
setListProjects(projects)
