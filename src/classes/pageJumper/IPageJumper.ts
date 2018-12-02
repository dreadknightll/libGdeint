namespace gdeint {
    export interface IPageJumper {
        setPage(pageName:string , page:IPage);
        isPageReady(pageName:string):boolean;
        gotoPage(pageName:string,readyListener:Function):void;
        getState():number; //0、No page state 1、Idle state 2、Jumping state(Target set and waiting to jump)
    }
}