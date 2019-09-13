$(document).ready(function(){
  $('#Nsearch').click(function(){
   $('ul').html('');
      var search = $("#search").val();
      var dataList = {
      'action':'query',
      'format': 'json',
      'list':'search',
      'srlimit':'max',
      'srsearch':search,
    };
  $.ajax({url:"https://en.wikipedia.org/w/api.php?"+search,data:dataList, dataType: 'jsonp', type: 'GET',
     success: function(data){
        q = data.query.search;
        q.forEach(function(article){
        var title = article.title;
        var url = article.title.replace(/\s/g,'_');
        var snippet = article.snippet;
        $('ul').append("<div class='result'><h3 class='text-center'>" + title + "</h3><p>"+ snippet+"</p><h5 class='text-center'> <a id='link' href=http://en.wikipedia.org/wiki/"+ url +" target='_blank'>Read more....</a></h5></div>");
        });
      }
  });
});
});
 $('#search').keydown(function(event){    
    if(event.keyCode==13){
       $('#Nsearch').click();
      
    }
  });
