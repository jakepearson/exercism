class Transcriptor {
    mappings: { [index: string]: string } = {
        C: 'G',
        G: 'C',
        A: 'U',
        T: 'A',
    }

    toRna(codes: string): string {
        let result = ''
        for (const c of codes) {
            const opposite = this.mappings[c]
            if (!opposite) {
                throw new Error('Invalid input DNA.')
            }
            result += opposite
        }
        return result
    }
}

export default Transcriptor