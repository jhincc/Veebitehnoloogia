var rates = {};

function apiRates(callback) {
    const apikey = "68296aa759a36eb26c8a61f7b50e084c"
    $.ajax({
        url: "http://data.fixer.io/api/latest?access_key="+apikey,
        dataType: 'jsonp',
        success: function(json) {
            rates.gbpRate = json.rates.GBP;
            rates.usdRate = json.rates.USD;
            callback()
        },
        fail: function(error) {
            console.log(error);
        }
    })
}

function loaded() {
    $("#loading").hide()
    $("#converter").removeClass("d-none")
}

$(document).ready(apiRates(loaded))

$("#amount").on("input", function() {
    if (isNaN($("#amount").val())) 
    {
        alert("Input must be a number")
    }
    else {
        if ($('input[name=options]:checked', '#output').attr("id") == "eur" ){
            $("#result").val($("#amount").val())
        }
        if ($('input[name=options]:checked', '#output').attr("id") == "usd" ){
            $("#result").val($("#amount").val() * rates.usdRate)
        }
        if ($('input[name=options]:checked', '#output').attr("id") == "gbp" ){
            $("#result").val($("#amount").val() * rates.gbpRate)
        }
    }

})

$('input[type=radio][name=options]').change(function() {
    if (isNaN($("#amount").val())) 
    {
        
    }
    else {
        if ($('input[name=options]:checked', '#output').attr("id") == "eur" ){
            $("#result").val($("#amount").val())
        }
        if ($('input[name=options]:checked', '#output').attr("id") == "usd" ){
            $("#result").val($("#amount").val() * rates.usdRate)
        }
        if ($('input[name=options]:checked', '#output').attr("id") == "gbp" ){
            $("#result").val($("#amount").val() * rates.gbpRate)
        }
    }

})