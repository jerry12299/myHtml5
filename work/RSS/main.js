$(function(){
    $("button").on("click",loadServerData);
});

function loadServerData(){
    let rss2json ="https://api.rss2json.com/v1/api.json?rss_url=";
    // $.getJSON(rss2json+"https://www.mohw.gov.tw/rss-16-1.html")
    $.getJSON(rss2json+"https://news.ltn.com.tw/rss/society.xml")
    // $.getJSON( "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.mohw.gov.tw%2Frss-16-1.html")
    .done(function(data) {
    //   debugger;
        for(let x=0;x<data.items.length;x++){
        let thisrow = `<tr><td><a target='_blank' href='${data.items[x].link}'>${data.items[x].title}</a></td><td>${data.items[x].pubDate.split(" ")[0]}</td></tr>`;
        $("#dataTable").append(thisrow);
        // $("#dataTable").append(`<tr><td><a target='_blank' href='${data.items[x].link}'>${data.items[x].title}</a></td><td>${data.items[x].pubDate.split(" ")[0]}</td></tr>`);
        }console.log("Success");
    })
    .fail(function(){ console.log("Error");})
    .always(function(){console.log("Always");});
}