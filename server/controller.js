module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }
    // getFortune: (req, res) => {
    //     const fortunes = ["Be Yourself!"];

    //     let randomIndex = Math.floor(Math.random() * fortunes.length);
    //     let randomFortune = fortunes[randomIndex];

    //     res.status(200).send(randomFortune);
    // }
//Something went wrong here , not sure yet
        // pickArmour: (req, res) => {
        //     const armours = {"That is a good one!"};
        //     let randomIndex = Math.floor(Math.random() * compliments.length);
        //     let randomCompliment = compliments[randomIndex];
          
        //     res.status(200).send(randomCompliment);
            
        // }

//This is for my Drop Down List
}