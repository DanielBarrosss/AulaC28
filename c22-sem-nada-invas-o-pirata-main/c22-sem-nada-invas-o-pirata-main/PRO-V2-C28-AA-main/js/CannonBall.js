class CannonBall {
    constructor(x, y) {
        var opitons = {
            isStatic: true
        }

        this.r = 30
        this.image = loadImage("./assets/cannonball.png")
        this.body = Bodies.circle(x, y, this.r, opitons)
        World.add(world, this.body)


    }

    shoot(){
    Matter.Body.setStatic(this.body,false)   
    }

    display(){
        var pos=this.body.position

        push()
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.r,this.r)
        pop()

    }
}