var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  console.log('script')

  var quotes=''

  function get_quotes()
  {
    //   return(fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    //   .then(response=>{console.log(response); return response.json()}))
    return(fetch("https://api.quotable.io/quotes")
    .then(response =>{console.log(response); return response.json()}))
  }

  function getRandomQuote(){
      var max = quotes.length;
      var index = Math.floor(Math.random()*max);
      var result={
        curr_quote : quotes[index].content,
        curr_author : quotes[index].author
      }
      return result;
      
  }

  function getQuote(){
      var {curr_quote,curr_author} = getRandomQuote();
      $('#tweet-quote').attr('href','https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+encodeURIComponent('"'+curr_quote+'"'+curr_author ));
      $('#quote-text').animate({opacity:0},500,function(){
          $(this).animate({opacity:1},500)
          $("#text").text(curr_quote);
      })
      $('#quote-author').animate({opacity:0},500,function(){
        $(this).animate({opacity:1},500)
        $("#author").text(curr_author);
       })
       var color_index = Math.floor(Math.random()*11);
       $('body').animate({
           backgroundColor:colors[color_index],
           color:colors[color_index]
       },1000)
       $('.button').animate({
        backgroundColor:colors[color_index],
    },1000)
      
  }
$(document).ready(function () {
   
      get_quotes().then((data)=>{
          console.log(data)
          quotes = data.results;
          console.log(quotes[0])
           getQuote();
      })
      $('button').on('click',getQuote)
});

