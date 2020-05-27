// IIFE function for drag and drop
(function(){
    if(!document.querySelectorAll || !('draggable' in document.createElement('div')))
    {
        return; 
    }
    
    var taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    
    // reads the collection of draggable items and add their draggable attribute
    for(var outputs = document.querySelectorAll('[data-draggable="dragtarget"]'), 
      count = outputs.length, 
      i = 0; i < count; i ++)
      {
        outputs[i].setAttribute('draggable', 'true');
      }
      

  // variable for storing the dragging target reference 
    var dragtarget = null;

    	// DRAGSTART event to initiate mouse dragging
        document.addEventListener('dragstart', function(e){
            dragtarget = e.target;
             e.dataTransfer.setData("taskId", dragtarget.getAttribute("taskId"));   
        }, false);

        // DRAGOVER event to allow the drag by preventing its default
        document.addEventListener('dragover', function(e){
          if(dragtarget){
            e.preventDefault();
          }
        }, false);	
            
        // DRAGDROP event to allow the element to be dropped into valid targets
        document.addEventListener('drop', function(e){
       
           if(e.target.getAttribute('data-draggable') == 'target'){
                const taskId = e.dataTransfer.getData("taskId");
                var taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
                const task = taskList.find(task => task.id === taskId);
                task.deleted = true;

                window.localStorage.setItem("taskList", JSON.stringify(taskList));
                
                e.target.appendChild(dragtarget);
                e.preventDefault();
                renderTask();
            }
        }, false);
        
        // DRAGEND event to clean-up after drop or abort
        document.addEventListener('dragend', function(e){
        dragtarget = null;
        }, false);  
 })();