class HelloWorld {
    static hello(s?: string): string {
        return `Hello, ${s ? s : "World"}!`
    }
}

export default HelloWorld