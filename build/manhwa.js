$.getJSON(
    "https://mangamint.kaedenoki.net/api/manhwa/1",
    function(data){
        console.log(data);

        var manga = data.manga_list;

        var thumb = data.manga_list[0].thumb;
        var title = data.manga_list[0].title;
        var genre = data.manga_list[0].type;
        var updated_on = data.manga_list[0].updated_on;
        var chapter = data.manga_list[0].chapter;
  
        $(".thumb").attr("src", thumb);
        $(".title").append(title);
        $(".genre").append(genre);
        $(".updated_on").append(updated_on);
        $(".chapter").append(chapter);
  
        var thumb1 = data.manga_list[1].thumb;
        var title1 = data.manga_list[1].title;
        var genre1 = data.manga_list[1].type;
        var updated_on1 = data.manga_list[1].updated_on;
        var chapter1 = data.manga_list[1].chapter;
  
        $(".thumb1").attr("src", thumb1);
        $(".title1").append(title1);
        $(".genre1").append(genre1);
        $(".updated_on1").append(updated_on1);
        $(".chapter1").append(chapter1);
  
        var thumb2 = data.manga_list[2].thumb;
        var title2 = data.manga_list[2].title;
        var genre2 = data.manga_list[2].type;
        var updated_on2 = data.manga_list[2].updated_on;
        var chapter2 = data.manga_list[2].chapter;
  
        $(".thumb2").attr("src", thumb2);
        $(".title2").append(title2);
        $(".genre2").append(genre2);
        $(".updated_on2").append(updated_on2);
        $(".chapter2").append(chapter2);
  
        var thumb3 = data.manga_list[3].thumb;
        var title3 = data.manga_list[3].title;
        var genre3 = data.manga_list[3].type;
        var updated_on3 = data.manga_list[3].updated_on;
        var chapter3 = data.manga_list[3].chapter;
  
        $(".thumb3").attr("src", thumb3);
        $(".title3").append(title3);
        $(".genre3").append(genre3);
        $(".updated_on3").append(updated_on3);
        $(".chapter3").append(chapter3);
  
        var thumb4 = data.manga_list[4].thumb;
        var title4 = data.manga_list[4].title;
        var genre4 = data.manga_list[4].type;
        var updated_on4 = data.manga_list[4].updated_on;
        var chapter4 = data.manga_list[4].chapter;
  
        $(".thumb4").attr("src", thumb4);
        $(".title4").append(title4);
        $(".genre4").append(genre4);
        $(".updated_on4").append(updated_on4);
        $(".chapter4").append(chapter4);
    }   
   );