new Vue({
    el: '#app',
    data: {
        inputNumber: '',
        results: []
    },
    methods: {
        calculateSquare() {
            const number = Number(this.inputNumber);
            const square = number * number;
            const resultMessage = `${number}'ın karesi = ${square}`;
            this.results.push(resultMessage);
        }
    }
});
