module.exports = function() {
  this.ListNode = function(val) {
       this.val = val;
       this.next = null;
       this.length = function() {
         var count = 1;
         var now = this.next;
         while (now) {
           count++;
           now = now.next;
         }
         return count;
       };
       this.getValue = function(nodeNum) {
         var pointer = 0;
         var now = this;
         if (nodeNum > this.length() - 1){
           return "error";
         }
         while (pointer < nodeNum) {
           pointer++;
           now = now.next;
         }
         return now.val;
       };
       this.addValue = function(value, nodeNum) {
         var pointer = 0;
         var now = this;
         while (now.next) {
           pointer++;
           now = now.next;
         }
         now.next =  {
           val: value,
           next: null
         };
         return;
       };
       this.removeNode = function(nodeNum) {
         var length = this.length();
         var pointer = 0;
         var now = this;
         var previous = null;
         while (pointer <= nodeNum) {
           if (pointer == nodeNum) {
             removeNode = now;
             previous.next = now.next;
             return removeNode;
           }
           else {
             pointer++;
             previous = now;
             now = now.next;
           }
         }
         return;
       };
    }
}
