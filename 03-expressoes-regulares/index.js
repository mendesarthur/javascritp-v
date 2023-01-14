class PhoneNumber {
    constructor(PhoneNumberString) {
        const fixedString = PhoneNumberString.replace(/[\sa-zA-Z]/g, "")
        this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
        this.dd = fixedString.match(/(?<=\()\d+(?=\))/)
        this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "")
    }
}


console.log(new PhoneNumber('+55 (22) 9 9875-5442'))
console.log(new PhoneNumber('+1 (999) as55-999-666'))


