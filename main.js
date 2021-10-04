// config variables
var projects = ["conversor", "mentalista", "aluraflix", "tabela", "supertrunfo"]

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
    console.log(content)
    var element = document.getElementById("content")
    element.innerHTML = content
    if (content == tabela){
        createPlayersView(players)
    }else if(content == aluraflix){
        setAnimeList(watchList)
    }
}

function resetContent(){
    document.getElementById("content").innerHTML = ""
}

// project functions
function Chutar(){
        var chute = parseInt(document.getElementById("valor").value)
        var resultado = document.getElementById("resultado")

        if (tentativas > 3){
            resultado.innerHTML = "tentativas esgotadas. o valor é: " + secretNum
        }
        else if (chute > 10 || chute < 0){
            resultado.innerHTML = "valor invalido, digite um numero de 0 a 10."
        }
        else if (chute == secretNum){
            resultado.innerHTML = "acertou"
        }
        else if (chute < secretNum){
            resultado.innerHTML = "errou, o numero é maior"
        }
        else {
            resultado.innerHTML = "errou, o numero é menor"
        }

        tentativas ++
}

function Converter(conversionValue) {
    var value = document.getElementById("valor").value;
    var realValue = parseFloat(value) * conversionValue;
  
    var valorConvertido = document.getElementById("valorConvertido");
    valorConvertido.innerHTML = "O resultado em real é R$: " + realValue;
  }

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
    console.log(players)
    createPlayersView(players)
}

function createPlayersView(players){
    console.log(players)
    var element = ""
    for (var i=0; i<players.length; i++){
        element += "<tr><td>"+ players[i].nome +"</td>"
        element += "<td>"+ players[i].vitorias +"</td>"
        element += "<td>"+ players[i].empates +"</td>"
        element += "<td>"+ players[i].derrotas +"</td>"
        element += "<td>"+ calcPoints(players[i]) +"</td>"
        element += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
        element += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        element += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
        element += "<td><button onClick='resetPlayer("+ i +")'>Reset</button></td>"
        element += "</tr>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = element
}

function setAnimeList(list){
    var element = document.getElementById("animeList")
    var animeList = ""
    var style = `{ background-image: url('${list[anime]}'); background-repeat: no-repeat; background-position: center bottom; height:20px width:100px; display:block; }`

    for (var anime in list){
        animeList += `<span style="${style}" class="indent-two selected-line">${anime},</span><br>`
    }
    element.innerHTML = animeList
}




// project-html-variables
const mentalista = `
<br>
<span class="selected-line">var project = {</span><br>
<span class="indent selected-line">name: "mentalista",</span><br>
<span class="indent selected-line">text: "Digite um número de 0 a 10",</span><br>
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
<span class="indent selected-line">button: <button type="submit" onclick="Converter(5.5)">Converter Dollar</button> ,</span><br>
<span class="indent selected-line">button: <button type="submit" onclick="Converter(6.25)">Converter Dollar</button> ,</span><br>
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
<th>Vitórias</th>
<th>Empates</th>
<th>Derrotas</th>
<th>Pontos</th>
<th colspan="3">Ações</th>
</tr>
</thead>
<tbody id="tabelaJogadores">
<tr>
<td>Paulo</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><button onClick="adicionarVitoria()">Vitória</button></td>
<td><button onClick="adicionarEmpate()">Empate</button></td>
<td><button onClick="adicionarDerrota()">Derrota</button></td>
</tr>
<tr>
<td>Rafa</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><button onClick="adicionarVitoria()">Vitória</button></td>
<td><button onClick="adicionarEmpate()">Empate</button></td>
<td><button onClick="adicionarDerrota()">Derrota</button></td>
</tr>
<tr>
<td>Gui</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td><button onClick="adicionarVitoria()">Vitória</button></td>
<td><button onClick="adicionarEmpate()">Empate</button></td>
<td><button onClick="adicionarDerrota()">Derrota</button></td>
</tr>
</tbody>
</table>
`

line_numbers()
getDate()
setListProjects(projects)