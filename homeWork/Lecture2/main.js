//This is Task 1

function ceilRound(n){
    document.write("<h2>Task 1</h2>")
    document.write(Math.ceil(n))

    document.write("<hr>")
}

ceilRound(58.1)


//This is Task2 

function floorRound(n){
    document.write("<h2>Task 2</h2>")
    document.write(Math.floor(n))

    document.write("<hr>")
}

floorRound(47.9)



//This is Task3

function round(n){
    document.write("<h2>Task 3</h2>")
    document.write(Math.round(n))

    document.write("<hr>")
}

round(22.3)


//This is Task4
//In this task you must chose how to
//round with "ceil", "floor" or just "round"

function roundWith(n, m){
    document.write("<h2>Task 4</h2>")
    
    if(m == "ceil"){
        document.write(Math.ceil(n))
    }else if(m == "floor"){
        document.write(Math.floor(n))
    }else if(m == "round"){
        document.write(Math.round(n))
    }

    document.write("<hr>")
}

roundWith(12.6, "floor")



//This is Task5

function randomNumbers(){
    document.write("<h2>Task 5</h2>")

    document.write(Math.random())

    document.write("<hr>")
}

randomNumbers()



//This is Task6

function randomRoundNumbers(){
    document.write("<h2>Task 6</h2>")

    document.write(Math.floor(Math.random() * (50 - 5)) + 5)

    document.write("<hr>")
}

randomRoundNumbers()



//This is Task7

function absoluteRandom(min, max){
    document.write("<h2>Task 7</h2>")

    document.write(Math.floor(Math.random() * (max - min)) + min)

    document.write("<hr>")
}

absoluteRandom(45, 120)



//This is Task9

function tenRandom(min, max){
    document.write("<h2>Task 9</h2>")

    for(i = 0; i < 10; i++){
        document.write(Math.floor(Math.random() * (max - min)) + min + " ")
    }

    document.write("<hr>")
}

tenRandom(10, 200)



//This is Task11

function randomDays(){
    document.write("<h2>Task 11</h2>")

    arr = ["ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი", "კვირა"]
    i = Math.floor(Math.random() * 7)
    document.write(arr[i])

    document.write("<hr>")
}

randomDays()



//This is Task12

function randomImages(){
    document.write("<h2>Task 12</h2>")
    arr = ["Photos/code.png", "Photos/developing.jpg", "Photos/applications.webp", "Photos/sky.jpg"]
    m = Math.floor(Math.random() * arr.length )
    document.getElementById("img1").src = arr[m]

}

randomImages()


//This is Task13


function randomTwoImages(){
    i = 0

    document.write("<h2>Task 13</h2>")
    arr1 = ["Photos/code.png", "Photos/developing.jpg", "Photos/applications.webp", "Photos/silvia.jpg.crdownload",
    "Photos/sky.jpg", "Photos/img1.jpg", "Photos/img2.jpg", "Photos/img3.jpg",
    "Photos/img4.webp", "Photos/img5.jpg", "Photos/img6.jpg", "Photos/img7.webp", "Photos/img8.jpg",
    "Photos/img9.jpg", "Photos/img10.jpg", "Photos/img11.jpg"]


    arr2 = []

    for(i = 0; i < 4; i++){
        n = Math.floor(Math.random() * arr1.length )
        arr2.push(n)
    }

    document.getElementById("img2").src = arr1[arr2[0]]
    document.getElementById("img3").src = arr1[arr2[1]]
    document.getElementById("img4").src = arr1[arr2[2]]
    document.getElementById("img5").src = arr1[arr2[3]]
}

randomTwoImages()


//This is Task14

function randomaizer(){

    weekArr = ["ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი", "კვირა"]

    imageArr = ["Photos/code.png", "Photos/developing.jpg", "Photos/applications.webp", "Photos/silvia.jpg.crdownload",
    "Photos/sky.jpg", "Photos/img1.jpg", "Photos/img2.jpg", "Photos/img3.jpg",
    "Photos/img4.webp", "Photos/img5.jpg", "Photos/img6.jpg", "Photos/img7.webp", "Photos/img8.jpg",
    "Photos/img9.jpg", "Photos/img10.jpg", "Photos/img11.jpg"]

    i = Math.floor(Math.random() * 7)
    j = Math.floor(Math.random() * imageArr.length)

    document.getElementById("day").innerHTML = weekArr[i]
    document.getElementById("img6").src = imageArr[j]
}

randomaizer()


//this is Task18

function tableWithImage(){

    tableArr = ["Photos/code.png", "Photos/developing.jpg", "Photos/applications.webp",
    "Photos/sky.jpg", "Photos/img1.jpg", "Photos/img2.jpg", "Photos/img3.jpg",
    "Photos/img4.webp", "Photos/img5.jpg", "Photos/img6.jpg", "Photos/img7.webp", "Photos/img8.jpg",
    "Photos/img9.jpg", "Photos/img10.jpg", "Photos/img11.jpg"]


    r = Math.floor(Math.random() * tableArr.length)
    document.getElementById("img6").src = tableArr[4]

    
}
