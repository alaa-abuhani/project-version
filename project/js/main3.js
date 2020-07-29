// $(document).ready(function () {

//     $.ajax({

//         url: "https://raw.githubusercontent.com/alv2017/DataSets/master/Europe/europe-capital-cities.json",
//         dataType: 'json',
//         cache: false,
//         success: function (data, status) {
//             // $.each(data ,function(index){
//             //     $("#data").append('<div>'+ data[index].username + '</div>');
//             // });
//             console.log("hi");

//         },
//         error: function (xhr, textstatus, err) {
//             console.log(xhr);
//             console.log(textstatus);
//             console.log(err);


//         }


//     });
// })
//select itemcontainer


$(document).ready(function () {
    var itemContainer = $('.wrapper-item-slide div.item .product ');
    var itemContainer2 = $('.wrapper-item-slide .slick-initialized .slick-slider');
    console.log(itemContainer2.text());

    $.ajax({
        url: "https://raw.githubusercontent.com/alaa-abuhani/yaya/master/dist/pro.json",
        success: function (result) {
            let obj = JSON.parse(result);


            // let obj = JSON.parse(this.responseText);
            console.log(obj[0]);
            console.log(itemContainer);
        }
    });


    // function creatProduct($itemContainer, $obj) {

    // }

});