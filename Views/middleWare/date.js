const daterequire = (req,res,next) =>{

    const date = new Date();
    const hours = date.getHours();
console.log(hours)
    if (hours>= 9 && hours <17){
        next();
    }
    else{
        return res.send('sakarna sahbi');
    }
}
module.exports = daterequire;