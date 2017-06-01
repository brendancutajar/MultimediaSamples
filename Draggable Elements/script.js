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
        var data = event.dataTransfer.getData("text/plain");
        event.target.innerHTML = data;
        event.target.classList.remove("dragEntered");
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