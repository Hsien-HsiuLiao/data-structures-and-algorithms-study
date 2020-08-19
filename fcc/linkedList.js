
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
}
