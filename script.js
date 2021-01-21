$(".to-pack-button").click(function() {
     let listitem = $(".to-pack-input").val();
    $(".packing-list").append("<li>i'm going to pack  " + listitem + "</li>");
    });