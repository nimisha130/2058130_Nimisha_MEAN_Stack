function addData() {
     
    
    var title = document.getElementById("title").value
    console.log(title)
    var article = document.getElementById("article").value
    console.log(article)
    var pic = document.getElementById("pic").value
    console.log(pic)

    
    //var myPTag = document.createElement("p");
    
    // //This code create text node 
    //var myPTagContent = document.createTextNode("Title : "+title+" Article: "+article+" Image "+img)
    
    
    //myPTag.setAttribute("style","color:black;");     //inline css 
    //myPTag.setAttribute("class","myPClass");        // external Css 
    
    
    // //This code add text node to p tag 
    //myPTag.appendChild(myPTagContent);
 
    // refer the tag using id selector and append the p tag to div tag
    //document.getElementById("info").appendChild(myPTag);

    let t = document.createElement("t");
    t.innerHTML = title;
    let p = document.createElement("p");
    p.innerHTML = article;
    let img = document.createElement("img")
    img.setAttribute("src",pic)
    
    document.getElementById("info").appendChild(t)
    document.getElementById("info").appendChild(p)

    document.getElementById("info").appendChild(img)

    
 }