//this is Task1

function writeText(s){
    document.write("<p style='font-size: 25px; margin:0 '>"+"Task1"+"</p>")
    document.write("<p class='p1'>"+s+"</p>")
    document.write("<hr>")
}

writeText('JavaScript')


//this is Task2

function sum(a, b){
    document.write("<p style='font-size: 25px; margin:0 '>"+"Task2"+"</p>")
    document.write(a + b)
    document.write("<hr>")
}

sum(10, 36)

//this is Task3

function changeSize(s1, size){
    document.write("<p style='font-size: 25px; margin:0 '>"+"Task3"+"</p>")
    document.write("<p style='font-size: "+size+"px'>"+s1+"</p>")
    document.write("<hr>")
}

changeSize('programing', 35)


//this is Task4

function changeWidth(w){
    document.write("<p style='font-size: 25px; margin:0 '>"+"Task4"+"</p>")
    document.write("<table border='1' width='"+w+"px'>")
            document.write("<tr>")
                    document.write("<td>1</td>")
                    document.write("<td>1</td>")
            document.write("</tr>")

            document.write("<tr>")
                    document.write("<td>1</td>")
                    document.write("<td>1</td>")
            document.write("</tr>")

    document.write("</table>")
    document.write("<hr>")
}

changeWidth(200);


//this is Task5

function changeHeight(h){
    document.write("<p style='font-size: 25px; margin:0 '>"+"Task5"+"</p>")
    document.write("<table border='1' height='"+h+"px'>")
            document.write("<tr>")
                    document.write("<td>1</td>")
                    document.write("<td>1</td>")
            document.write("</tr>")

            document.write("<tr>")
                    document.write("<td>1</td>")
                    document.write("<td>1</td>")
            document.write("</tr>")

    document.write("</table>")
    document.write("<hr>")
}

changeHeight(150)



//this is Task6

function makeTable(width, height){
    document.write("<p style='font-size: 25px; margin:0 '>"+"Task6"+"</p>")
    document.write("<table border='1' width='"+width+"px' height='"+height+"px'>")
            document.write("<tr>")
                    document.write("<td>1</td>")
                    document.write("<td>1</td>")
            document.write("</tr>")

            document.write("<tr>")
                    document.write("<td>1</td>")
                    document.write("<td>1</td>")
            document.write("</tr>")

    document.write("</table>")
    document.write("<hr>")
}

makeTable(200, 200)



//this is Task7

function changeColor(color1, color2){
    document.write("<p style='font-size: 25px; margin:0 '>"+"Task7"+"</p>")
    document.write("<table border='1' width='250px' height='250px'>")
            document.write("<tr bgcolor="+color1+">")
                    document.write("<td>1</td>")
                    document.write("<td>1</td>")
            document.write("</tr>")

            document.write("<tr bgcolor="+color2+">")
                    document.write("<td>1</td>")
                    document.write("<td>1</td>")
            document.write("</tr>")

    document.write("</table>")
    document.write("<hr>")
}

changeColor('red', 'yellow')



//this is task8

function changeBorderSize(num){
    document.write("<p style='font-size: 25px; margin:0 '>"+"Task8"+"</p>")
    document.write("<table border='"+num+"' width='250px' height='250px'>")
            document.write("<tr>")
                    document.write("<td>1</td>")
                    document.write("<td>1</td>")
            document.write("</tr>")

            document.write("<tr>")
                    document.write("<td>1</td>")
                    document.write("<td>1</td>")
            document.write("</tr>")

    document.write("</table>")
    document.write("<hr>")
}

changeBorderSize(10)



//this is task9

function buildTable(w1, h1, b, c){
    document.write("<p style='font-size: 25px; margin:0 '>"+"Task9"+"</p>")
    document.write("<table border='"+b+"' width='"+w1+"px' height='"+h1+"px'>")
            document.write("<tr bgcolor='"+c+"'>")
                    document.write("<td>1</td>")
                    document.write("<td>1</td>")
            document.write("</tr>")

            document.write("<tr bgcolor='"+c+"'>")
                    document.write("<td>1</td>")
                    document.write("<td>1</td>")
            document.write("</tr>")

    document.write("</table>")
    document.write("<hr>")
}

buildTable(300, 350, 15, 'yellow')


//this is Task10
buildTable(400, 500, 10, 'green')



//this is Task11

function teenNatural(){

    document.write("<p style='font-size: 25px; margin:0 '>"+"Task11"+"</p>")
    
    for(let i = 1; i <= 10; i++){
        document.write(i)
    }

    document.write("<hr>")
}

teenNatural()



//this is Task12


function naturalNumbers(n){

        document.write("<p style='font-size: 25px; margin:0 '>"+"Task12"+"</p>")
        
        for(let i = 1; i <= n; i++){
            document.write(i, "<br>")
        }

        document.write("<hr>")
}
    
naturalNumbers(28)


//this is Task13

function naturalNumbers1(m, n){

        document.write("<p style='font-size: 25px; margin:0 '>"+"Task13"+"</p>")

        for(let i = m; i <= n; i++){
                document.write(i, "<br>")
        }

        document.write("<hr>")
}

naturalNumbers1(24, 56)


//this is Task 15

    
function buildTable1(r, c){
        document.write("<p style='font-size: 25px; margin:0 '>"+"Task15"+"</p>")
        document.write("<table border='1' width='400px' height='200px'>")
        for(let i = 0; i < r; i++){
                document.write("<tr>")
                for(let j = 1; j <= c; j++){
                        document.write("<td></td>")
                }
                document.write("</tr>")
        }

        document.write("</table>")
        document.write("<hr>")
}

buildTable1(3, 5)



//this is Task16


function buildTable2(r, c){
        document.write("<p style='font-size: 25px; margin:0 '>"+"Task16"+"</p>")
        document.write("<table border='1' width='600px' height='400px'>")
        for(let i = 1; i <= r; i++){
                document.write("<tr>")
                for(let j = 1; j <= c; j++){
                        document.write("<td>"+i+""+'.'+""+j+"</td>")
                }
                document.write("</tr>")
        }

        document.write("</table>")
        document.write("<hr>")
}

buildTable2(5, 7)



//this is Task17

function buildTable3(w, h, b, co, r, c){
        document.write("<p style='font-size: 25px; margin:0 '>"+"Task17"+"</p>")
        document.write("<table border='"+b+"' width='"+w+"px' height='"+h+"px'>")
        for(let i = 1; i <= r; i++){
                document.write("<tr bgcolor='"+co+"'>")
                for(let j = 1; j <= c; j++){
                        document.write("<td>"+i+""+'.'+""+j+"</td>")
                }
                document.write("</tr>")
        }

        document.write("</table>")
        document.write("<hr>")
}

buildTable3(500, 300, 5, "yellow", 6, 8)