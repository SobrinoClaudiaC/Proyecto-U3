$(document).ready(function(){

function getPvz() {
    $.ajax({
        type: "GET",
        url: 'https://pvz-2-api.vercel.app/docs' ,
        dataType: "json",
        async: true,
        success: true,
    });
} getPvz();

});