
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // my solution
    var currentNode = head;
    
      if( currentNode === null){
        head = new Node(element);
      }
      else
      {
        while(currentNode.next !== null){
        currentNode = currentNode.next
        }
        currentNode.next = new Node(element)
      }
    length++;
    // my solution
  };
  
  /* fcc solution
  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };
  */
  
  this.remove = function(element){
    // my solution
    var currentNode = head;
    var previousNode;
    if(head.element === element){
      head = currentNode.next;
      currentNode = null;
    }
    else{
      while(currentNode.element !== element && currentNode.next !== null){
        previousNode = currentNode;
        currentNode = currentNode.next
      }
      if(currentNode.next !== null){
        previousNode.next = currentNode.next;
      }
    }
    length--
    // my solution
  };
  
}
