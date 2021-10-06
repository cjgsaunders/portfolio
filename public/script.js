
let pages = new Array()
pages.push("sentinel","/")

console.log(pages);



  // This code lets the back button work on a single page site
  window.onpopstate = function(event) {
    currPage = String(document.location).slice(-1)
    console.log("last page: "+ pages[pages.length - 2])
    console.log("current page: "+ currPage)
    
    if (currPage == pages[pages.length - 2]) {
        console.log("back button pressed: " +currPage);
        console.log("pages ", pages)
        console.log("removing: ", pages[pages.length - 1])
        pages.pop()
        pages.pop()     
                
        switch (currPage) {
            case '/':
                
                changePage('block', 'none', 'none', "/");
              break;
            case 'a':
               
                changePage('none', 'flex', 'none', "a");
                break;
            case 'p':
                
                changePage('none', 'none', 'flex', "p");
                
                break  
            default:                                
                console.log("Something is broken")                          
          }
      }
    
  };

// This code changes the page on a single page site
function changePage(home, about, project, nextPage) {    
    document.getElementById("home").style.display = home; 
    document.getElementById("about").style.display = about; 
    document.getElementById("projects").style.display = project;    
    pages.push(nextPage);    
    console.log(pages);
  }





