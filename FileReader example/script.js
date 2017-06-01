var App = (function(){
    'strict mode'

    window.onload = function(){
        document.getElementById("file-upload").addEventListener("change", function(event){
            var isSuccesful = false;
            var file = event.target.files[0];
            var reader = new FileReader();
            var text = "";
            var span = document.getElementById("load-status");
            var progressbar = document.getElementById("progress-bar");
            span.innerHTML = "";
            progressbar.value = 0;
            
            reader.addEventListener("load", function(data){
                var filetext = data.target.result;
                var div = document.getElementById("loaded-files");
                div.innerHTML = filetext    
                
            },false)

            reader.addEventListener("progress", function(data){
                var progress = data.loaded / data.total;
                document.getElementById("progress-bar").value = progress
            },false);

            reader.addEventListener("loadend", function(data){
                var span = document.getElementById("load-status");
                span.innerHTML = "Done";
            },false)

            reader.addEventListener("error", function(data){
                var span = document.getElementById("load-status");
                span.innerHTML = "Failed: "+ data.error;
            })

            text = reader.readAsText(file);
            
        }, false)
    }

})();