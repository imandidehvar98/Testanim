var t = -1.6;
var t2 = -1.6;
var x = 0;
var t = [-1.6, -1.6, -1.6],
    delta = [0.05, 0.03, 0.02],
    finish = [1.4, 1.0, 0.6];
function moveit(i) {
    t[i] += delta[i];
    var r = $('.circle').height / 2 * 0.90;         // radius
    var xcenter = $('.circle').height / 2;   // center X position
    var ycenter = $('.circle').height / 2;   // center Y position

    var newLeft = Math.floor(xcenter + (r * Math.cos(t[i])));
    var newTop = Math.floor(ycenter + (r * Math.sin(t[i])));

    $('#item' + i).animate({
        top: newTop,
        left: newLeft,
    }, 1, function () {
        if (t[i] < finish[i]) moveit(i);
    });
}

function changeSelection(i) {
    var s = 0
    $(".menu").children().each((index, element) => {
        if (s == i){
            $(".menu").children().eq(index).addClass("selected");
            changeData(i)
            selected = s
        }
        else
            $(".menu").children().eq(index).removeClass("selected");
        s++
    });
}

function changeData(i) {
    if(i == 0) {
        $(".data").html(`
        
        <svg width="110px" height="70px" viewBox="0 0 315 107" version="1.1">

        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
            <path d="M2.10546875,95.75 L40.5546875,68.3476562 L55.2109375,81.1796875 L65.2148437,76.3945312 L96.1835937,86.8320312 L131.023438,19.9414062 L142.15625,23.7226562 L183.605469,2.1953125 L211.007812,22.3320312 L234.320312,71.5664062 L234.667969,83.0039062 L244.019531,83.0039062 L247.105469,88.8320312 L312.695312,104.839844" id="Path-1" stroke="white" stroke-width="4" sketch:type="MSShapeGroup" class="path"></path>
        </g>
    </svg>

        `)
    }
    else if(i == 1){
        $(".data").html("<p>Second</p>")
    }
    else if(i == 2){
        $(".data").html("<p>Third</p>")
    }
}

$(document).ready(function () {

    let selected = 0


    let pos1 = { top: -215, left: 15 }
    // let pos2 = { top: -90, left: 170 }
    let pos2 = { top: -75, left: 160 }
    let pos3 = { top: -240, left: -140 }


    $("#item1").css(pos1)
    $("#item2").css(pos2)
    $("#item3").css(pos3)
    changeData(selected)

    $("#item1").on('click', function () {
        // $("#item1").css(pos1)
        // $("#item2").css(pos2)
        // $("#item3").css(pos3)
        changeSelection(0)
        $(".circle").css({transform: 'rotate(0deg)'})
        $('.data').css({transform: 'rotate(0deg)'})

    })


    $("#item2").on('click', function () {
        // $("#item1").css(pos2)
        // $("#item2").css(pos1)
        // $("#item3").css(pos3)
        changeSelection(1)
        $(".circle").css({transform: 'rotate(-120deg)'})
        $('#item2').css({transform: 'rotate(120deg)'})
        $('.data').css({transform: 'rotate(120deg)'})

    })


    $("#item3").on('click', function () {
        // $("#item1").css(pos3)
        // $("#item2").css(pos2)
        // $("#item3").css(pos1)
        changeSelection(2)
        $(".circle").css({transform: 'rotate(+120deg)'})
        $("#item3").css({transform: 'rotate(-120deg)'})
        $(".data").css({transform: 'rotate(-120deg)'})
    })

    // var ctx = document.getElementById('myChart').getContext('2d');

    // var chart = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'line',

    //     // The data for our dataset
    //     data: {
    //         datasets: [{
    //             backgroundColor: 'rgb(255, 99, 132)',
    //             borderColor: 'rgb(255, 99, 132)',
    //             data: [0, 20, 50, 30, 30, 30, 40, 45, 45, 30, 10]
    //         }]
    //     },

    //     // Configuration options go here
    //     options: {}
    // });

})