export class Etudiant {
    numInscription: number;
    adresseETU:string;
    nameETU:string;
    prenomETU:string;
    dateEntree:Date;
    constructor(){
        this.numInscription=0;
        this.adresseETU="";
        this.nameETU="";
        this.prenomETU="";
        this.dateEntree=new Date();
    }
}
