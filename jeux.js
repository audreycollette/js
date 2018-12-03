var character = {
    init : function(name, force, strenght){
        this.name = name,
        this.force = force,
        this.strenght = strenght
    },
    describe : function() {
        var description = this.name + " a " + this.force + " points de force et " + this.strenght + "points de vie";
        return description; 
    },
    attack : function(target) {
        var descriptiondattack = this.name + " attaque " + target ;
        console.log(descriptiondattack);
        target.strenght=target.strenght-this.force;
        if (target.strenght > 0){
            console.log(target.name + " a " + target.strenght + " points de vie restant");

        }
        else {
            console.log(target.name + "est mort");
        }
    }
}

var player = Object.create(character);

player.initplayer = function(name, force, strenght){
    player.init(name, force, strenght),
    player.xp = 0,
}



}