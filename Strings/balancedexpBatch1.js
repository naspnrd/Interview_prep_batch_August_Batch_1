function isBalanced(expr){
    var s = []
    for(i = 0; i < expr.length; i++){
        x = expr[i]
        if(x == '(' || x == '{' || x =='['){
            s.push(x)
            continue;
        }
        // if current character is not a opening
        // bracket, then we will return
        if(s.length == 0)
            return false
        // closing brances
        // ), }, ]
        check = s.pop()
        if(expr[i] == ')' && check == '('){
            continue;
        }
        else if(expr[i] == ']' && check == '[')
            continue;
        else if(expr[i] == '}' && check == '{')
            continue;
        else
            s.push(check)
    }
    if(s.length == 0)
        return true
    else
        return false
}
expr = '[()]}{[()()]()}'
res = isBalanced(expr)
if(res == true)
    console.log("Balanced")
else
    console.log("not Balanced")

// TC = O(n) n = length of string expr
// Sc = O(n)