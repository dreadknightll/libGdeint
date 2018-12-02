namespace gdeint {
    export interface IRenderFilter //Dispatch graphic before rendering to screen. Eg. doing hor-ver calibration.
    {
        xOConv(x:number):number;
        xIConv(x:number):number;
        yOConv(y:number):number;
        yIConv(y:number):number;
        ptOConv(pt:gdeint.CPoint):gdeint.CPoint;
        ptIConv(pt:gdeint.CPoint):gdeint.CPoint;
    }
}