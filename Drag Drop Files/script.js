var App = (function(){

    function onDragStart(event){
        console.log(event); 
        event.dataTransfer.setData("text/plain", event.target.innerHTML);
    }

    function onDrag(event){
        event.target.classList.add("dragged")
    }

    function onDragEnd(event){
        event.target.classList.remove("dragged")
    }

    function onDragEnter(event){
        event.target.classList.add("dragEntered")
    }

    function onDragLeave(event){
        event.target.classList.remove("dragEntered")
    }

    function onDragOver(event){
        event.preventDefault();
        event.dataTransfer.dropEffect="copy";
    }

    function onDrop(event){
        event.preventDefault();
        var files = event.dataTransfer.files;
        var len = files.length;
        var list = document.createElement("ul");
        for(var i = 0; i < len; i++){
            var item = document.createElement("li")
            item.innerHTML = "Filename: " + files[i].name + ", LastModified: " + files[i].lastModifiedDate;
            list.appendChild(item);
        }
        document.getElementById("list-container").appendChild(list);
    }

    return {
        onDragStart:onDragStart,
        onDrag:onDrag,
        onDragEnd:onDragEnd,
        onDragEnter:onDragEnter,
        onDragLeave:onDragLeave,
        onDragOver:onDragOver,
        onDrop:onDrop
    }
})();