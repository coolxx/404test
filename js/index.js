$(function () {

    $('#zg_kyappo').click(function () {
        $('.mask').show()
        $('.zg_kyappo').show()
    })
    $('.zg_kyappo em').click(function () {
        $('.mask').hide();
        $('.zg_kyappo').hide()
    })


    var n=0;
    setInterval(function () {
        n++;
        var index=n%2;
        if(index==0){
            $('#zx').css('width','0.46rem').attr('src','images/m5-0.png')
        }else{
            $('#zx').css('width','0.51rem').attr('src','images/m5-1.png')
        }
    },1000)

})