class Bob {
    hey(input: string): string {
        if (input.toUpperCase() === input) {
            return 'Whoa, chill out!'
        }
        if (input.indexOf('?') >= 0) {
            return 'Sure.'
        }
        if (input === "" || !input) {
            return 'Fine. Be that way!'
        }
        return 'Whatever.'
    }
}

export default Bob