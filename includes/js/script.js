$(document).ready(function() {$('#search').click(function(event) {
       $('#wrapper').empty();
      var title=$('#tbmovieinput').val();
      $.ajax(
        {
          url: 'http://www.omdbapi.com/?s='+title,
          success:function(data)
          {
               var object={};
               object=data;
               var arr=data.Search;
               arr.forEach(function(obj)
                 {
               var wrapper = $('#wrapper');
               var container,desc;
               container = $('<div class="container"></div>');
               desc = $('<div class="desc"></div>');

               for (var key in obj)
                  {

                      if(key=="Poster")
                        {
                         container.append('<div class="graphic"> <img src='+obj[key]+' alt="cant display image"></div>');
                         }
                      else
                         {
                          desc.append('<p>'+key+':'+obj[key]+'</p>');
                          }

                    }
                      container.append(desc);
                     wrapper.append(container);
            });
        }
     })
                            .done(function() {
                            console.log("success");
                             })
                            .fail(function() {
                            console.log("error");
                             })
                            .always(function() {
                            console.log("complete");
                            });


});
});;
