{"filter":false,"title":"script.js","tooltip":"/lab/jquery_exercise/js/script.js","undoManager":{"mark":5,"position":5,"stack":[[{"group":"doc","deltas":[{"start":{"row":28,"column":0},"end":{"row":33,"column":3},"action":"remove","lines":["","$(document).ready(function() {","","","","});"]},{"start":{"row":28,"column":0},"end":{"row":63,"column":3},"action":"insert","lines":["","$(document).ready(function() {","\t$(\"#pirate\").remove();","","\t$(\"body\").addClass(\"gradient\");","","\tvar clicked = false;","","\t$(\"#toggle\").click(function() {","\tif (clicked == false) {","\t\t$(\"#status\").html(\"GO\");","\t\t$(\"#toggle\").html(\"Stop\")","\t\t$(\"#status\").css({\"background-color\" : \"green\"});","\t\tclicked = true","\t} else {","\t\t$(\"#toggle\").html(\"Start\");","\t\t$(\"#status\").html(\"STOP\");","\t\t$(\"#status\").css({\"background-color\" : \"red\"});","\t\tclicked = false","\t}","","\t$(\"#status\").mouseenter(function() {","\tif (clicked == true) {","\t\t$(\"#cat\").show();","\t\tclicked = true;","\t}","\t});","\t$(\"#status\").mouseleave(function() {","\tif (clicked == true) {","\t\t$(\"#cat\").hide();","\t\tclicked = true;","\t}","\t});","","\t});","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":0},"end":{"row":34,"column":1},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":0},"end":{"row":34,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":16},"end":{"row":41,"column":0},"action":"insert","lines":["",""]},{"start":{"row":41,"column":0},"end":{"row":41,"column":2},"action":"insert","lines":["\t\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":4},"end":{"row":55,"column":0},"action":"insert","lines":["",""]},{"start":{"row":55,"column":0},"end":{"row":55,"column":1},"action":"insert","lines":["\t"]}]}]]},"ace":{"folds":[],"scrolltop":145,"scrollleft":0,"selection":{"start":{"row":20,"column":0},"end":{"row":20,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":8,"state":"comment_regex_allowed","mode":"ace/mode/javascript"}},"timestamp":1428577544897,"hash":"4bc211e4366094f9c33478856cb4a212f171f4fe"}