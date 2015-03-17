//
// Level1: Computer asks algie. Default program
//
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#6ofb3d
Blockly.Blocks['al_best'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField("Ask")
        .appendField(new Blockly.FieldImage("../../images/AL.png", 80, 50, "Al"));
    this.appendDummyInput()
        .appendField("for his best move.");
    this.setTooltip('Ask Al to do his best');
  }
};
Blockly.JavaScript['al_best'] = function(block) {
// (function() {
//   var choice = (goal-total) % (maxadd + 1);
//   if(choice == 0) choice = Math.floor(1+Math.random()*this.maxadd);
//   return choice;
// })()
  var code = '(function() {\n';
  code += 'var choice = (takers_goal-takers_total) % (takers_maxadd + 1);\n';
  code += 'if(choice == 0) choice=Math.floor(1+Math.random()*takers_maxadd);\n';
  code += 'forward(choice);\n';
  code += '})()'
  return code;
};



//
// Level2: Parameterised ask Al
//
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#4soswe
Blockly.Blocks['al_gorithm'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Ask ")
        .appendField(new Blockly.FieldImage("../../images/AL-25.png", 80, 50, "Algie"));
    this.appendValueInput("algorithm")
        .setCheck("algorithm")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("to use algorithm");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("to pick a move");
    this.setTooltip('Give Al an algorithm to use');
  }
};
Blockly.JavaScript['al_gorithm'] = function(block) {
  var value_total = Blockly.JavaScript.valueToCode(block, 'total', Blockly.JavaScript.ORDER_ATOMIC);
  var value_goal = Blockly.JavaScript.valueToCode(block, 'goal', Blockly.JavaScript.ORDER_ATOMIC);
  var value_maxadd = Blockly.JavaScript.valueToCode(block, 'maxadd', Blockly.JavaScript.ORDER_ATOMIC);
  var value_algorithm = Blockly.JavaScript.valueToCode(block, 'algorithm', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'forward('+value_algorithm+')';
  return code;
};


/* algorithm 1 */
//
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#o4jymj
//
Blockly.Blocks['a1'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../images/a1-25.png", 80, 50, "a1"));
    this.setOutput(true, "algorithm");
    this.setTooltip('algorithm 1');
  }
};
Blockly.JavaScript['a1'] = function(block) {
  var code = '(function() {\n';
  code += '  var left = takers_goal-takers_total\n;';
  code += '  if(left > takers_maxadd) {\n';
  code += '    return 1+Math.floor(takers_maxadd*Math.random());\n';
  code += '  }\n';
  code += '  else {\n';
  code += '    return left;'
  code += '  }';
  code += '}).call(this)';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};


/* algorithm 2 */
//
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#o4jymj
//
Blockly.Blocks['a2'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../images/a2-25.png", 80, 50, "a2"));
    this.setOutput(true, "algorithm");
    this.setTooltip('algorithm 2');
  }
};
Blockly.JavaScript['a2'] = function(block) {
  var code = '(function() {\n';
  code += '  var left = takers_goal-takers_total\n;';
  code += '  if(left > takers_maxadd) left -= (takers_maxadd + 1);\n';
  code += '  if(left === 0 || left > takers_maxadd) {\n';
  code += '    return 1+Math.floor(takers_maxadd*Math.random());\n';
  code += '  }\n';
  code += '  else {\n';
  code += '    return left;'
  code += '  }';
  code += '}).call(this)';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

/* algorithm 2 */
//
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#o4jymj
//
Blockly.Blocks['a3'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../images/a3-25.png", 80, 50, "a3"));
    this.setOutput(true, "algorithm");
    this.setTooltip('algorithm 3');
  }
};
Blockly.JavaScript['a3'] = function(block) {
  var code = '(function() {\n';
  code += '  var left = takers_goal-takers_total\n;';
  code += '  while(left > takers_maxadd) left -= (takers_maxadd + 1);\n';
  code += '  if(left === 0) {\n';
  code += '    return 1+Math.floor(takers_maxadd*Math.random());\n';
  code += '  }\n';
  code += '  else {\n';
  code += '    return left;'
  code += '  }';
  code += '}).call(this)';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};


//
// Computer thinks
//
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#teo9qm
Blockly.Blocks['takers_computer'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Ask ")
        .appendField(new Blockly.FieldImage("../../images/AL-25.png", 80, 50, "Algie"))
        .appendField("to");
    this.appendStatementInput("playTurn");
    this.setTooltip('Ask Al to run these blocks');
    this.setColour(330);
//    this.setDeletable(false);
//     this.setMovable(false);
  }
};
Blockly.JavaScript['takers_computer'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'playTurn');
  // var value_name = Blockly.JavaScript.valueToCode(block, 'playTurn', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = statements_name;
  return code;
};


//
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#hmwjuu
//
Blockly.Blocks['takers_try_else'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(270);
    this.appendValueInput("thatNumber")
        .appendField("try to reach");
    this.appendDummyInput()
        .appendField("else");
    this.appendStatementInput("else");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Move here if rules allow, else do this');
  }
};
Blockly.JavaScript['takers_try_else'] = function(block) {
  var thatNumber = Blockly.JavaScript.valueToCode(block, 'thatNumber', Blockly.JavaScript.ORDER_ATOMIC) || 1000;
  var statements_else = Blockly.JavaScript.statementToCode(block, 'else');

  // TODO: Assemble JavaScript into code variable.
  var code = 'if(' 
    + '(('+thatNumber+')-(takers_total) <= takers_maxadd) &&\n'
    + '(('+thatNumber+')-(takers_total) > 0)) {\n'
    +    'moveTo('+thatNumber+');\n'
    + '} else {\n'
    + statements_else
    + '}\n';
  return code;
};

//
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#hmwjuu
//
Blockly.Blocks['takers_try_forward_else'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(270);
    this.appendValueInput("thatNumber")
        .appendField("Try to move forward");
    this.appendStatementInput("else")
        .appendField("else");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Move forward if rules allow, else do this');
  }
};
Blockly.JavaScript['takers_try_forward_else'] = function(block) {
  var thatNumber = Blockly.JavaScript.valueToCode(block, 'thatNumber', Blockly.JavaScript.ORDER_ATOMIC) || 1000;
  var statements_else = Blockly.JavaScript.statementToCode(block, 'else');

  // TODO: Assemble JavaScript into code variable.
  var code = 'if('+thatNumber+' <= takers_maxadd &&\n'
    + '('+thatNumber+' > 0)) {\n'
    +    'forward('+thatNumber+');\n'
    + '} else {\n'
    + statements_else
    + '}\n';
  return code;
};

//
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#hmwjuu
//
Blockly.Blocks['takers_try_move'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(270);
    this.appendValueInput("thatNumber")
        .appendField("Try to reach");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('move to this square if rules allow, else...');
  }
};
Blockly.JavaScript['takers_try_move'] = function(block) {
  var thatNumber = Blockly.JavaScript.valueToCode(block, 'thatNumber', Blockly.JavaScript.ORDER_ATOMIC) || 1000;
  // TODO: Assemble JavaScript into code variable.
  var code = 'if(' 
    + '(('+thatNumber+')-(takers_total) <= 4) &&\n'
    + '(('+thatNumber+')-(takers_total) > 0))\n'
    + '{\n'
    +    'moveTo('+thatNumber+');\n'
    + '}\n';
  return code;
};

//
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#hmwjuu
//
Blockly.Blocks['takers_try_move_from'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(270);
    this.appendValueInput("thatNumber")
        .appendField("Try to reach");
    this.appendValueInput("thisNumber")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("from");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('move to this square if rules allow');
  }
};
Blockly.JavaScript['takers_try_move_from'] = function(block) {
  var thatNumber = Blockly.JavaScript.valueToCode(block, 'thatNumber', Blockly.JavaScript.ORDER_ATOMIC) || 1000;
  var thisNumber = Blockly.JavaScript.valueToCode(block, 'thisNumber', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'if((takers_total===('+thisNumber+')) &&\n' 
    + '(('+thatNumber+')-('+thisNumber+') <= takers_maxadd) &&\n'
    + '(('+thatNumber+')-('+thisNumber+') > 0))\n'
    + '{\n'
    +    'moveTo('+thatNumber+');\n'
    + '}\n';
  return code;
};



// //
// // https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#t49j3w
// //
// // return If I can reach [] from [] then [] else
// //
// Blockly.Blocks['takers_choose_move'] = {
//   init: function() {
//     this.setHelpUrl('http://www.example.com/');
//     this.setColour(315);
//     this.appendValueInput("thatNumber")
//         .setCheck("Number")
//         .appendField("if I can reach");
//     this.appendValueInput("thisNumber")
//         .setCheck("Number")
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField("from");
//     this.appendValueInput("thenMove")
//         .setCheck("move")
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField("then");
//     this.appendValueInput("elseMove")
//         .setCheck("move")
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField("else");
//     this.setOutput(true, "move");
//     this.setTooltip('Choose a move');
//   }
// };
// Blockly.JavaScript['takers_choose_move'] = function(block) {
//   var value_thatnumber = Blockly.JavaScript.valueToCode(block, 'thatNumber', Blockly.JavaScript.ORDER_ATOMIC);
//   var value_thisnumber = Blockly.JavaScript.valueToCode(block, 'thisNumber', Blockly.JavaScript.ORDER_ATOMIC);
//   var value_thenmove = Blockly.JavaScript.valueToCode(block, 'thenMove', Blockly.JavaScript.ORDER_ATOMIC);
//   var value_elsemove = Blockly.JavaScript.valueToCode(block, 'elseMove', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...';
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };


//
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#xy78m8
//
// move by number
Blockly.Blocks['takers_cast_move'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("move")
        .setCheck("Number")
        .appendField("move");
    this.setInputsInline(true);
    this.setOutput(true, "move");
    this.setTooltip('');
    this.setColour(270);
  }
};
Blockly.JavaScript['takers_cast_move'] = function(block) {
  var value_move = Blockly.JavaScript.valueToCode(block, 'move', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};



// // https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#s9jzm8
// //
// // if I can reach [] from [] then [do this] 
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#yxcsen
// Blockly.Blocks['takers_get_move'] = {
//   init: function() {
//     this.setHelpUrl('http://www.example.com/');
//     this.setColour(300);
//     this.appendValueInput("thatNumber")
//         .setCheck("Number")
//         .appendField("if I can reach");
//     this.appendDummyInput("dum")
//         .appendField("then I will");
//     this.setInputsInline(true);
//     // this.setOutput(true, "Number");
//     this.setTooltip('');
//     this.setPreviousStatement(true);
//     this.setNextStatement(true);
//   }
// };
// Blockly.JavaScript['takers_get_move'] = function(block) {
//   var value_thatnumber = Blockly.JavaScript.valueToCode(block, 'thatNumber', Blockly.JavaScript.ORDER_ATOMIC);
//   var value_thisnumber = Blockly.JavaScript.valueToCode(block, 'thisNumber', Blockly.JavaScript.ORDER_ATOMIC);
//   var statements_choosewinner = Blockly.JavaScript.statementToCode(block, 'chooseWinner');
//   var statements_tryagain = Blockly.JavaScript.statementToCode(block, 'tryAgain');
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...';
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };


/* choice */
Blockly.Blocks['takers_move_one'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.appendDummyInput("thatNumber")
        .appendField("move forward");
//    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('move one square forward');
    this.setColour(270);
  }
};
Blockly.JavaScript['takers_move_one'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'forward(1);';
  return code; //[code, Blockly.JavaScript.ORDER_NONE];
};

//
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#zvsnmk
//
// move difference




Blockly.Blocks['takers_move_n'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("n")
        .setCheck("Number")
        .appendField("move forward");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(260);
  }
};

Blockly.JavaScript['takers_move_n'] = function(block) {
  var value_n = Blockly.JavaScript.valueToCode(block, 'n', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'forward('+value_n+');\n';
  return code;
};


/*

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#gic4gi
Blockly.Blocks['takers_bad_move'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(0);
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("If I reach");
    this.appendDummyInput()
        .appendField("I might lose.");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.JavaScript['takers_bad_move'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#qkk8ez
Blockly.Blocks['takers_good_move'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(180);
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("If I reach");
    this.appendDummyInput()
        .appendField("I win");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.JavaScript['takers_good_move'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};
*/

/* goal */

Blockly.Blocks['takers_goal'] = {
  // Block for row variable getter.
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(240);
    this.appendDummyInput()
        .appendField("%1", 'title')
        .appendField(new Blockly.FieldImage("../../images/star.png", 15, 15, "*"));
    this.setOutput(true, 'Number');
    this.setTooltip('The square containing the star');
  },
  customUpdate: function(context) {
    this.setFieldValue(
        context.goal.toString(), 'title');
  }
};
Blockly.JavaScript['takers_goal'] = function(block) {
  // Generate JavaScript for goal getter.
  return ['takers_goal', Blockly.JavaScript.ORDER_MEMBER];
};

/* total */
Blockly.Blocks['takers_total'] = {
  // Block for row variable getter.
  init: function() {
    this.setColour(180);
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.appendDummyInput()
        .appendField("square %1", 'title')
        .appendField(new Blockly.FieldImage("../../images/spot.png", 15, 15, "*"));
    this.setOutput(true, 'Number');
    this.setTooltip('The square with the counter');
  },
  customUpdate: function(context) {
    //this.setFieldValue("%1".replace('%1', context.total), 'title');
    this.setFieldValue(context.total.toString(), 'title');
  }
};
Blockly.JavaScript['takers_total'] = function(block) {
  // Generate JavaScript for total getter.
  return ['takers_total', Blockly.JavaScript.ORDER_MEMBER];
};

/* maxadd */
Blockly.Blocks['takers_maxadd'] = {
  // Block for row variable getter.
  init: function() {
    this.setColour(240);
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.appendDummyInput()
        .appendField("square %1", 'title')
        .appendField(new Blockly.FieldImage("../../images/whiteSquare.png", 15, 15, "*"));
    this.setOutput(true, 'Number');
    this.setTooltip('Biggest allowed move');
  },
  customUpdate: function(context) {
    //this.setFieldValue("%1".replace('%1', context.maxadd), 'title');
    console.log('maxadd = ' + context.maxadd);
    this.setFieldValue(context.maxadd.toString(), 'title');
    console.log('takers_maxadd = ' + this.getFieldValue('title'));
  }
};
Blockly.JavaScript['takers_maxadd'] = function(block) {
  // Generate JavaScript for maxadd getter.
  return ['takers_maxadd', Blockly.JavaScript.ORDER_MEMBER];
};

/* maxadd */
Blockly.Blocks['takers_to_go'] = {
  // Block for row variable getter.
  init: function() {
    this.setColour(180);
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.appendDummyInput()
        .appendField("%1 to go", 'title')
    this.setOutput(true, 'Number');
    this.setTooltip('Moves left to go');
  },
  customUpdate: function(context) {
    this.setFieldValue("%1 to go".replace('%1', context.goal-context.total), 'title');
  }
};
Blockly.JavaScript['takers_to_go'] = function(block) {
  // Generate JavaScript for maxadd getter.
  return ['(takers_to_go)', Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.Blocks['alert'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(65);
    this.appendValueInput("message")
        .setCheck("Number")
        .appendField("message");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('alert message');
  }
};
Blockly.JavaScript['alert'] = function(block) {
  var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'alert(' + value_message + ');\n';
  return code;
};

