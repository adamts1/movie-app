class ActorsModel {
    constructor(name, year, pic) {
        this.name = name;
        this.year  = year;
        this.pic = pic;
    }

    ActorAge(){
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.year;
        return age;    
    }
}

export default ActorsModel;