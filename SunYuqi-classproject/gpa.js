$('#btn').click(()=>{
    let values = $("#hours").val();
    if(values){
        let value = values.trim().split(";");
        let arr = value.filter(i=>i.length>0);

        let newarr = arr.map(i=>{
            let num = parseInt(i.split(",")[0], 10);
            let str = i.split(",")[1];
            return [num, str]
            }
        );
        console.log(calculateAvGPA(...newarr));
        $("#GPA").html(calculateAvGPA(...newarr))
    }
})


function calculateAvGPA(...reset){
    const  inputs = reset;
    let sumGrade = 0,
        sumHours = 0;
    inputs.forEach(i => {
        sumGrade += i[0] * getGrade(i[1]);
        sumHours += i[0]
    });
    return (sumGrade/sumHours).toFixed(2);
}

function getGrade(Letter){
    switch (Letter) {
        case 'A':
            return 4;
            break;
        case 'B':
            return 3;
            break;
        case 'C':
            return 2;
            break;
        case 'D':
            return 1;
            break;
        case 'F':
            return 0;
            break;
        default:
    }
}