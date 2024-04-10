const { Builder, By, Key, until } = require('selenium-webdriver');

const delay = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

async function start() {

    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:8501');


//  Primeiro Teste: Calculos retornarem o resultado correto
    try {

        await delay(1000);

        //acrescenta o caractere no fim do número já setado por padrão
        await driver.findElement(By.id("number_input_1")).sendKeys('0'); 
        await driver.findElement(By.id("number_input_2")).sendKeys('');
        await driver.findElement(By.id("number_input_3")).sendKeys('0');
        await driver.findElement(By.xpath('//*[@id="root"]/div[1]/div[1]/div/div/div/section/div[1]')).click();
    
        const resultado1 = await driver.findElement(By.xpath('//*[@id="root"]/div[1]/div[1]/div/div/div/section/div[1]/div/div/div/div[4]/div/div/p'))
            .getText();

            await delay(1000);


        const expectativa1 = 'The interest is 5000.0';
    
        if (resultado1 == expectativa1) {
          console.log('Teste 1 bem-sucedido: O resultado exibido é o esperado.');
        } else {
          console.error(`Teste 1 falhou: O resultado exibido (${resultado1}) não corresponde ao esperado (${expectativa1}).`);
        }
      } catch (erro) {
        console.error('Ocorreu um erro durante a execução do teste:', erro);
    }

//  Segundo Teste: Número negativo no campo "Principal Amount"
    try {

        await delay(1000);

        //acrescenta o caractere "-" no ínicio de Principal Amount
        await driver.findElement(By.id("number_input_1")).sendKeys(Key.HOME);
        await driver.findElement(By.id("number_input_1")).sendKeys('-');
        await driver.findElement(By.id("number_input_2")).sendKeys('');
        await driver.findElement(By.id("number_input_3")).sendKeys('');
        await driver.findElement(By.xpath('//*[@id="root"]/div[1]/div[1]/div/div/div/section/div[1]')).click();
    
        const resultado2 = await driver.findElement(By.xpath('//*[@id="root"]/div[1]/div[1]/div/div/div/section/div[1]/div/div/div/div[4]/div/div/p'))
            .getText();

            await delay(1000);


        const expectativa2 = 'Valor inválido';
    
        if (resultado2 == expectativa2) {
          console.log('Teste 2 bem-sucedido: O resultado exibido é o esperado.');
        } else {
          console.error(`Teste 2 falhou: O resultado exibido (${resultado2}) não corresponde ao esperado (${expectativa2}).`);
        }
      } catch (erro) {
        console.error('Ocorreu um erro durante a execução do teste:', erro);
      } finally {

        await driver.quit();
      }

}

start();