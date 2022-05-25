export class Relation
{
    other:string="";
    
    private _isParent:boolean =false;
    get isParent():boolean
    {
        return this._isParent;
    }
    set isParent(val:boolean)
    {
        if(this._isParent != val)
        {
            if(val)
            {
            this.isGuardian=false;
            this.isRelationOther=false;
            }
            this._isParent = val;
        }
    }

    private _isGuardian:boolean =false;
    get isGuardian():boolean
    {
        return this._isGuardian;
    }
    set isGuardian(val:boolean)
    {
        if(this._isGuardian != val)
        {
            if(val)
            {
            this.isParent=false;
            this.isRelationOther=false;
            }
            this._isGuardian = val;
        }
    }

    
    private _isRelationOther:boolean =false;
    get isRelationOther():boolean
    {
        return this._isRelationOther;
    }
    set isRelationOther(val:boolean)
    {
        if(this._isRelationOther != val)
        {
            if(val)
            {
            this.isParent=false;
            this._isGuardian=false;
            }
            this._isRelationOther = val;
        }
    }
}