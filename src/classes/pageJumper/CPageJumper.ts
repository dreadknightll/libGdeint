namespace gdeint {
	export class CPageJumper implements IPageJumper {
		//不调用gotoPage，则页面显示状态维持原状。
		public constructor() {
			this.m_pages = {};
			this.m_curState = 0;
		}

		public setPage(pageName:string , page:IPage):void {
			this.m_pages[pageName] = page;
		}

		public getPage(pageName:string):IPage {
			return this.m_pages[pageName];
		}

		public isPageReady(pageName:string):boolean {
			return false;
		}

		public gotoPage(pageName:string,readyListener:Function/*Not used*/):void {
			this.m_targetPage = pageName;

			var curPage:IPage;
			curPage = this.m_pages[pageName];

	//		if(curPage.isReady()) {
				curPage.showOnFront();

	//	Hide other pages:
				for(var tmpKey in this.m_pages) {
					if(tmpKey != pageName) {
						if(undefined != this.m_pages[tmpKey]) {
							this.m_pages[tmpKey].hide();
						}
					}
				}
	//		}
	//		else {
	//			add to action queue.
	//		}
		}

	/*	pubilc onPageLoadReady(pageName:string):void {
			pageName
		}*/

		public getState():number {
			//1、Idle state 2、Jumping state(Target set and waiting to jump)

			return this.m_curState;
		}

		public m_pages:any; // Type:Map<IPage>
		public m_targetPage:string;
		public m_curState:number;
	}
}