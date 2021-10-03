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

function setProjects(projectList){
    var element = document.getElementById("projects")
    var result = ""

    for (var i in projectList){
        result += `<br><span>${projectList[i]},</span>\n`
    }

    element.innerHTML = result

}

function tst(){
    console.log("asdasdasdasd")
}

projects = ["supertrunfo", "mentalista", "conversor"]


line_numbers()
getDate()
setProjects(projects)