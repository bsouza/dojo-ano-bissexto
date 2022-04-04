class Ano {

    constructor(private ano: number){      
    }
 
    isBissexto() {
        const isDivisibleBy400 = this.isDivisibleBy(400);

        if (isDivisibleBy400) {
            return true;
        }

        const isDivisibleBy4 = this.isDivisibleBy(4);
        const isDivisibleBy100 = this.isDivisibleBy(100);

        return isDivisibleBy4 && !isDivisibleBy100;
    }

    private isDivisibleBy(divider: number) {
        const restOfDivision = this.ano % divider;
        return restOfDivision === 0;
    }
    
}

describe('CalculdoraDeAnoBissexto', function () {

    test('o ano 2000 deve ser bissexto', () => {
        const isBissexto = new Ano(2000).isBissexto();        
        expect(isBissexto).toBeTruthy();        
    });

    test('o ano 1600 deve ser bissexto', () => {
        const isBissexto = new Ano(1600).isBissexto();        
        expect(isBissexto).toBeTruthy();        
    });

    test('o ano 1700 não deve ser bissexto', () => {
        const isBissexto = new Ano(1700).isBissexto();        
        expect(isBissexto).toBeFalsy();        
    });

    test('ano divisível por 4 e não por 100 são bissextos', () => {
        const isBissexto = new Ano(2008).isBissexto();        
        expect(isBissexto).toBeTruthy();        
    });

    test('o ano 200 não é bissexto',()=>{
        const isBissexto = new Ano(200).isBissexto();        
        expect(isBissexto).toBeFalsy(); 
    })

});

