import { DiagnosisHistory } from './diagnosis-history';
import { Relation } from './relationship';
export class FormInfo{
    defaultDiagnosisHistory=5;
    name:string="";
    relation:Relation;
    diagnosisHistory:DiagnosisHistory[]=[];

    /**
     *
     */
    constructor() {
        this.relation = new Relation();
        for(let i=0; i < this.defaultDiagnosisHistory; i++)
        {
            this.diagnosisHistory.push(new DiagnosisHistory());
        }
    }

   
}

