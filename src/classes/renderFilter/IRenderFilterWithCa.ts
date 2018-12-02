namespace gdeint {
    export interface IRenderFilterWithCa extends IRenderFilter {
        setCaRat(caRat:number):void;
        _getCaRat():number;
        rectOConv(rect:gdeint.CRect):gdeint.CRect;
        rectIConv(rect:gdeint.CRect): gdeint.CRect;
    }
}