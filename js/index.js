
function fibonacciSimple(number) {

    var past_first = 0, past_second = 1, next = 1;

    for(var i = 2; i <= number; i++) {
        next = past_first + past_second;
        past_first = past_second;
        past_second = next;
    }
    return next;
};

document.write('Result Simple  = ');
document.write((prompt('Enter number')));





function fibonacciLoopAndArray(number) {

	var sequence = [1, 1];

	for (var i = 2; i < number; i++) {
		sequence[i] = sequence[i-1]+ sequence[i-2];
	}

	return sequence[number-1];
}
document.write('Result LoopAndArray = ');
document.write(fibonacciLoopAndArray(prompt('Enter number')));



//recurtion
function fibonacciRecurtion(number) {

	if (number < 1)
		return 0;

	if (number <= 2)
		return 1;

   return fibonacciRecurtion(number - 1) + fibonacciRecurtion(number - 2);
}

document.write('Result recurtion = ');
document.write(fibonacciRecurtion(prompt('Enter number')));
