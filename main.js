var tList = new ListNode(5);
var a = new Array(10000);

jslitmus.test('Join 10K elements', function() {
    a.join(' ');
});

jslitmus.test("Link list add elements", function() { 
        for(var i=0; i<10; i++){
            tList.addValue(i);
        }
});

// Log the test results
jslitmus.on('complete', function(test) {
    console.log(test.name, test.count, test.time);
});

// Run it!
jslitmus.runAll();