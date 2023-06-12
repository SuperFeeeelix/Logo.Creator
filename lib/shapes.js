//create the class for the shapes
class Shape{
    //this defines a class called shape which has a constructor initilizing color also sets the "color" to have value.
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
}

class Square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}"> `
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
    }
};

module.exports = {Circle, Square, Triangle}