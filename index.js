Blockly.Blocks['move'] = {
    init: function () {
        this
            .appendValueInput("x")
            .setCheck("Number")
            .appendField("X");
        this
            .appendValueInput("y")
            .setCheck("Number")
            .appendField("Y");
        this
            .appendValueInput("twist")
            .setCheck("Number")
            .appendField("Twist");
        this
            .appendValueInput("time")
            .setCheck("Number")
            .appendField("Time");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("Move Forward");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['move'] = function (block) {
    var value_x = Blockly
        .JavaScript
        .valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly
        .JavaScript
        .valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var angle_turn = Blockly
        .JavaScript
        .valueToCode(block, "twist", Blockly.JavaScript.ORDER_ATOMIC);
    var value_time = Blockly
        .JavaScript
        .valueToCode(block, "time", Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = JSON.stringify({x: value_x, y: value_y, theta: angle_turn});
    var empty = JSON.stringify({x: 0.0, y: 0.0, theta: 0.0})
    if (value_time) {
        return `console.log(${code}); sleep.msleep(${value_time * 1000}); console.log(${empty});`;
    } else {
        return `console.log(${code});`;
    }
};