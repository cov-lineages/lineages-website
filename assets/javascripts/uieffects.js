//var colors = ["#984464", "#86b0a6", "#52495a", "#557b86", "#b88f89", "#eb7e83", "#cdcdcd"];
//var lightColors = ["#faf4f7", "#f1f6f5", "#efedf0", "#EEF1F2", "#f3eceb", "#fdf5f5", "#f4f4f4"];

var colors = ["#984464", "#86b0a6", "#52495a", "#557b86", "#b88f89", "#eb7e83"];
var lightColors = ["#faf4f7", "#f1f6f5", "#efedf0", "#EEF1F2", "#f3eceb", "#fdf5f5"];

$(document).ready(function(){
    

  resizeSplashSVG=function() {
    if(window.innerHeight > $("#splash svg").height()) {
      $("#splash svg").height("calc(100% - 50px)");
      $("#splash svg").width("auto");
    } else {
      $("#splash svg").width("calc(100% - 50px)");
      $("#splash svg").height("auto");
    }
  }

  resizeSplashSVG();

  window.onresize = resizeSplashSVG;

  var index = 0;

  for(child of $("#software_logos").children()){
    console.log(child);

    $(child).css('background', colors[index]);

    index = index + 1;
    if(index == colors.length) {
      index = 0;
    }
  }

  $(".footer").css('top', document.documentElement.scrollHeight);

  var sPath = window.location.pathname;
  var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
  console.log(sPage);

  checkScrolls=function() {
    scroll_start = $(this).scrollTop();
    if(scroll_start > 25) {
        //$(".nav").css('background', '#2E86C1');
        $(".nav").css('background', '#262626');
        $("#mobile_menu").css('background', '#262626');
     } else {
      $(".nav").css('background-color', 'transparent');
      $("#mobile_menu").css('background-color', 'transparent');
     }

     /*if(scroll_start >= $("#software_logos").offset().top && scroll_start < ($("#software_logos").offset().top + $("#software_logos").height())) {
       $(".nav").css('border-top', 'none')
       $(".nav").css('top', '25px')
     } else {
       $(".nav").css('border-top', '25px solid white')
       $(".nav").css('top', '0px')
     }*/
  }

  if(sPage == "index.html" || sPage == "" || sPage.includes("#")){
    checkScrolls();
    $(document).scroll(function() { 
      checkScrolls();
    });
  } else {
    $(".nav").css('background', '#262626');
  }
  generateGitHubIssueLinks();
});

$(function(){
  // get hash value
  var hash = window.location.hash;
  hash = hash.substring(1);

  console.log(hash);

  if(document.getElementById(hash)) {
    // now scroll to element with that id
    document.getElementById(hash).scrollIntoView();
  }
});

index = 0;

for(child of $("section .course-preview")){
  console.log(child);

  $(child).css('background', colors[index]);

  index = index + 1;
  if(index == colors.length) {
    index = 0;
  }
}

index = 0;

for(child of $(".resourcesSection").children()){
  console.log(child);

  $(child).css('background', lightColors[index]);

  index = index + 1;
  if(index == lightColors.length) {
    index = 0;
  }
}

index = 0;

for(child of $(".contrib")) {
  $(child).css('background', lightColors[index]);

  index = index + 1;
  if(index == lightColors.length) {
    index = 0;
  }
}

index = 0;

for(child of $(".thead-light th")) {
  console.log(child);

  $(child).css('background', colors[index]);

  index = index + 1;
  if(index == colors.length) {
    index = 0;
  }
}

index = 0;

for(child of $(".tutorial-container .img-container img")) {
  console.log(child);

  $(child).css('border', "20px solid " + colors[index]);

  index = index + 1;
  if(index == colors.length) {
    index = 0;
  }
}


function doSearch(filter, table, fields) {
  var tr, td, i, txtValue;
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    var display = false;

    if(fields == "Lineage" && tr[i].getElementsByTagName("td").length > 0) {

      var cell = tr[i].getElementsByTagName("td")[0].innerHTML;

      if (cell.toUpperCase().indexOf(filter) > -1) {
          display = true;;
      }

    } else {

      for (cell of tr[i].getElementsByTagName("td")) {

        cell = cell.innerHTML;

        if (cell.toUpperCase().indexOf(filter) > -1) {
          display = true;;
        }
      }
    }

    if(display) {
      tr[i].style.display = "";
    } 
    else {
      tr[i].style.display = "none";
    }

    tr[0].style.display = "";
  
  }

}


function search(form) {

  var input, filter;
  input = form;
  fields = form.parentElement.children[0].children[0].value;

  filter = input.value.toUpperCase();
  table = form.parentElement.parentElement;

  doSearch(filter, table, fields);
}


function reportSearch(myInput, myTable) {
  var input, filter;
  input = document.getElementById(myInput);
  filter = input.value.toUpperCase();
  table = document.getElementById(myTable);

  doSearch(filter, table, "All Fields");
}


function generateGitHubIssueLinks() {
  const descItems = document.querySelectorAll('.desc-td');
  for (const item of descItems) {
    if (item.innerHTML.match(/#(\d+)/)) {
      item.innerHTML = 
        item.innerHTML.replace(/#(\d+)/, `<a href="https://github.com/cov-lineages/pango-designation/issues/$1" target="_blank">#$1</a>`);
    }
  }
}
