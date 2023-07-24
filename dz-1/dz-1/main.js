var userday = +prompt('enter your birthday')
var userMonth = prompt('enter your month')
if (userMonth === 'january' && userday>=21 && userday<=31 || userMonth==='february' && userday>=1 && userday<=19){
    console.log('aquarius')
}else if(userMonth  === 'february' && userday>=20 && userday<=28|| userMonth==='march' && userday>=1 && userday<=20){
    console.log('pisces')
}else if(userMonth === 'march' && userday>=21 && userday<=31 || userMonth==='april' && userday>=1 && userday<=20){
    console.log('aries')
}else if(userMonth ==='april' && userday>=21 && userday<=30 || userMonth==='may' && userday>=1 && userday<=21){
    console.log('taurus')
}else if(userMonth === 'may'  && userday>=22 && userday<=31 || userMonth==='juny' && userday>=1 && userday<=21){
    console.log('gemini')
}else if(userMonth === 'juny' && userday>=22 && userday<=30 || userMonth==='july' && userday>=1 && userday<=22){
    console.log('cancer')
}else if(userMonth ==='july' && userday>=23 && userday<=31 || userMonth==='august' && userday>=1 && userday<=21){
    console.log('leo')
}else if(userMonth ==='august' && userday>=22 && userday<=31 || userMonth==='september' && userday>=1 && userday<=23){
    console.log('virgo')
}else if(userMonth ==='september' && userday>=24 && userday<=30 || userMonth==='october' && userday>=1 && userday<=23){
    console.log('libra')
}else if(userMonth ==='october' && userday>=24 && userday<=31 || userMonth==='november' && userday>=1 && userday<=22){
    console.log('scorpio')
}else if(userMonth ==='november' && userday>=23 && userday<=30 || userMonth==='deceber' && userday>=1 && userday<=22){
    console.log('sagittarius')
}else if(userMonth ==='december' && userday>=23 && userday<=31 || userMonth==='january' && userday>=1 && userday<=20){
    console.log('capricom')
}else {
    console.error('error')
}
