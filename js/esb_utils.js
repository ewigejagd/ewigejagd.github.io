function customTag(tagName, fn){
    document.createElement(tagName);
    var tagInstances = document.getElementsByTagName(tagName);
    for ( var i = 0; i < tagInstances.length; i++) {
        fn(tagInstances[i]);
    }
}

function skillLink(element){
    if (element.attributes.id){
        var id = element.attributes.id.value;
        if (element.innerHTML){
            element.innerHTML = '<a href="https://www.elderscrollsbote.de/skill='+id+'" target=\"_blank\">'+element.innerHTML+'</a>';
        } else {
            element.innerHTML = '<a href="https://www.elderscrollsbote.de/skill='+id+'" target=\"_blank\"><img src="https://www.elderscrollsbote.de/esodb/images/skills/'+id+'.png"></a>';
        }
    }
}

function setLink(element){
    if (element.attributes.id && element.innerHTML){
        var id = element.attributes.id.value;
        element.innerHTML = '<a href="https://www.elderscrollsbote.de/set='+id+'" target=\"_blank\">'+element.innerHTML+'</a>';
    }
}

customTag("eso_skill", skillLink);
customTag("eso_set", setLink);