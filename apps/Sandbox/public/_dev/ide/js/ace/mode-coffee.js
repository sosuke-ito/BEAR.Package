define("ace/mode/coffee",function(a,b,c){function j(){this.$tokenizer=new d((new e).getRules()),this.$outdent=new f}var d=a("ace/tokenizer").Tokenizer,e=a("ace/mode/coffee_highlight_rules").CoffeeHighlightRules,f=a("ace/mode/matching_brace_outdent").MatchingBraceOutdent,g=a("ace/range").Range,h=a("ace/mode/text").Mode,i=a("pilot/oop");i.inherits(j,h);var k=j.prototype,l=/(?:[({[=:]|[-=]>|\b(?:else|switch|try|catch(?:\s*[$A-Za-z_\x7f-\uffff][$\w\x7f-\uffff]*)?|finally))\s*$/,m=/^(\s*)#/,n=/^\s*###(?!#)/,o=/^\s*/;k.getNextLineIndent=function(a,b,c){var d=this.$getIndent(b),e=this.$tokenizer.getLineTokens(b,a).tokens;(!e.length||e[e.length-1].type!=="comment")&&a==="start"&&l.test(b)&&(d+=c);return d},k.toggleCommentLines=function(a,b,c,d){console.log("toggle");var e=new g(0,0,0,0);for(var f=c;f<=d;++f){var h=b.getLine(f);if(n.test(h))continue;m.test(h)?h=h.replace(m,"$1"):h=h.replace(o,"$&#"),e.end.row=e.start.row=f,e.end.column=h.length+1,b.replace(e,h)}},k.checkOutdent=function(a,b,c){return this.$outdent.checkOutdent(b,c)},k.autoOutdent=function(a,b,c){this.$outdent.autoOutdent(b,c)},b.Mode=j}),define("ace/mode/coffee_highlight_rules",function(a,b,c){function d(){var a="[$A-Za-z_\\x7f-\\uffff][$\\w\\x7f-\\uffff]*",b="(?![$\\w]|\\s*:)",c={token:"string",regex:".+"};this.$rules={start:[{token:"identifier",regex:"(?:@|(?:\\.|::)\\s*)"+a},{token:"keyword",regex:"(?:t(?:h(?:is|row|en)|ry|ypeof)|s(?:uper|witch)|return|b(?:reak|y)|c(?:ontinue|atch|lass)|i(?:n(?:stanceof)?|s(?:nt)?|f)|e(?:lse|xtends)|f(?:or (?:own)?|inally|unction)|wh(?:ile|en)|n(?:ew|ot?)|d(?:e(?:lete|bugger)|o)|loop|o(?:ff?|[rn])|un(?:less|til)|and|yes)"+b},{token:"constant.language",regex:"(?:true|false|null|undefined)"+b},{token:"invalid.illegal",regex:"(?:c(?:ase|onst)|default|function|v(?:ar|oid)|with|e(?:num|xport)|i(?:mplements|nterface)|let|p(?:ackage|r(?:ivate|otected)|ublic)|static|yield|__(?:hasProp|extends|slice|bind|indexOf))"+b},{token:"language.support.class",regex:"(?:Array|Boolean|Date|Function|Number|Object|R(?:e(?:gExp|ferenceError)|angeError)|S(?:tring|yntaxError)|E(?:rror|valError)|TypeError|URIError)"+b},{token:"language.support.function",regex:"(?:Math|JSON|is(?:NaN|Finite)|parse(?:Int|Float)|encodeURI(?:Component)?|decodeURI(?:Component)?)"+b},{token:"identifier",regex:a},{token:"constant.numeric",regex:"(?:0x[\\da-fA-F]+|(?:\\d+(?:\\.\\d+)?|\\.\\d+)(?:[eE][+-]?\\d+)?)"},{token:"string",regex:"'''",next:"qdoc"},{token:"string",regex:'"""',next:"qqdoc"},{token:"string",regex:"'",next:"qstring"},{token:"string",regex:'"',next:"qqstring"},{token:"string",regex:"`",next:"js"},{token:"string.regex",regex:"///",next:"heregex"},{token:"string.regex",regex:"/(?!\\s)[^[/\\n\\\\]*(?: (?:\\\\.|\\[[^\\]\\n\\\\]*(?:\\\\.[^\\]\\n\\\\]*)*\\])[^[/\\n\\\\]*)*/[imgy]{0,4}(?!\\w)"},{token:"comment",regex:"###(?!#)",next:"comment"},{token:"comment",regex:"#.*"},{token:"lparen",regex:"[({[]"},{token:"rparen",regex:"[\\]})]"},{token:"keyword.operator",regex:"\\S+"},{token:"text",regex:"\\s+"}],qdoc:[{token:"string",regex:".*?'''",next:"start"},c],qqdoc:[{token:"string",regex:'.*?"""',next:"start"},c],qstring:[{token:"string",regex:"[^\\\\']*(?:\\\\.[^\\\\']*)*'",next:"start"},c],qqstring:[{token:"string",regex:'[^\\\\"]*(?:\\\\.[^\\\\"]*)*"',next:"start"},c],js:[{token:"string",regex:"[^\\\\`]*(?:\\\\.[^\\\\`]*)*`",next:"start"},c],heregex:[{token:"string.regex",regex:".*?///[imgy]{0,4}",next:"start"},{token:"comment.regex",regex:"\\s+(?:#.*)?"},{token:"string.regex",regex:"\\S+"}],comment:[{token:"comment",regex:".*?###",next:"start"},{token:"comment",regex:".+"}]}}a("pilot/oop").inherits(d,a("ace/mode/text_highlight_rules").TextHighlightRules),b.CoffeeHighlightRules=d})