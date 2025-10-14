require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIANGhTlucSkdVTwQAAHEHAAAKAAAAY3JlZHMuanNvbpVU2Y7iOBT9F78GNdk3qaQJ2YBAkWIPo34wiQMO2cp2gNDi30ehqrp6pJmemjw5tnXvuWfxD1BWmKIAtcD8AWqCz5ChbsnaGgETDJo0RQT0QAIZBCZ4nS5QnZcZmzmc01oGG2EinXA7C8tQukq7s8qdrcxTdjz*BO49UDf7HMe*KVjuGutWBPtryO9vy3AZHItWiI1Ltmf6MFKlgncyxQivjuc+gXtXEWKCy4NbH1GBCMwD1IYQk6*Bj0YVPxAj+fC8kNvRLZG40m4ufbod6t71Fg14pCaXdf5citbX4EseHc7Sl7nXpuLxqgmV75fbAl6swmdFa3EjLMqpGxTE09*gU3woUTJKUMkwa7*M+8g1LlwuFaqslCpfTlKuefUJnj+v12Lzup1UY8hLK0Qm0uVrwGcr2SJOVFyHqJkN3SYaCduEK72gVsPp8tCU+6KfyfHMuP0NeEg+vHL6P7xPp0fVm2fbSF9y8f5kLIukoTLOhDoW0DQoeEuyBeNULXj3a*CV9nm71ffUh6S+weVCbejG5U5nIVNkedgGq4IXVnw781fuJ3zIGvI7lIfUl7dRNj3VwmS4dkJ5s714zukW7M59Qd0rwSTXyjw41K*xc25Ndv31+Ypb5TkmrXtIRUVBk+q6dTL35Hm66rBmMRjbL0+PiU6oHSXAFO49QNABU0Ygw1X52JP4HoDJeYFigtiDXuDM1AkvttM0PY6X23zdVJYsYS2HUy4*LXwvGxbjZazIuaQ*gR6oSRUjSlEyxJRVpJ0iSuEBUWD++b0HSnRlb8J17SShB1JMKFuVTZ1XMPlQ9eMQxnHVlGzRlrHdLRABJv+5jRjD5YF2PDYlJPERn5F9hIwCM4U5RT8nRAQlwGSkQT9Ta1dJR7wcKvY4Ug3QA8VDEJwAE4iKrBmiJsuaxpuK8Af9dunKwrr+ViIGeiB*XBMMwdAVSZNUXTMEobvZHdx*IuwKJohBnFNgAnuy13UtHrjBFjU09n3LPVj2wQKfE31Y4416v887ONLDl35wqUecjqN1FlwTba9s9D6O9gN5XG+Mk5KX0dM*FAEmUA*8PoJlJL6+8EYkhY6eoVdpPmNMnIrVrvBWl9v0IrHAaIcOv1tyxeUSziVU9OdZ4dKqzpKmcV*9jV3b*bDQfctrLOup65agM47Rr838Y4KqNb6VR+w5tebMx9FEdPAas+u8yGKH3iZTe8PBmpygo*K2ze+SfMst1cmaHhfKYpXFU6GlY6qLztJr9xtp5H2Y9hGa*P2xwg87dVp1vylGj+yXsFPwv7V7A95ZjL*3fqnx*pr8SyIH87NhyUXo8GFLg0V4HhVe1NItErn1OZQL*4JsuD7vZrudCO737z1Q55ClFSmACWCZkAonoAdI1XSeHZVp9ZtmtsWPBu+T55Ay6zMHS1wgymBRA1PQVF7WRF2T3m6FpKqHkB6BCcLNSRl0nm6tul4wyD5SBazuc1+O4P4XUEsBAhQDFAAACAgA0aFOW5xKR1VPBAAAcQcAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAdwQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254792744770',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'SIGEI-KIM',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
