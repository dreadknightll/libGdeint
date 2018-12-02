namespace gdeint {

/*
	使用方法：new -> setThisObj -> setTmpSavedDataCache -> setTaskList -> runTasks
*/
	export class CTaskListRunner {
		public constructor() {
		}

		private m_thisObj:any;
		private m_taskList:Array<Array<any>>;
		private m_curTaskTag:number = 0;

		/* m_tmpSavedDataPointer 实际上是指向一维数组的指针。
		   通过本指针可重新定义数组大小等。对m_tmpSavedDataPointer[0]进行new操作即可。
		   m_tmpSavedDataPointer[1]不合法，请勿访问。*/
		public m_tmpSavedDataPointer:Array<Array<any>> = null;

		public setThisObj(o:any) {
			this.m_thisObj = o;
		}

		public setTmpSavedDataCache(dc:Array<Array<any>>) {
			this.m_tmpSavedDataPointer = dc;
		}

		public setTaskList(arr:Array<Array<any>>):void {
			this.m_taskList = arr;
			this.m_curTaskTag = 0;
		}

		public runTasks():void {
			this.runSomeTasks(0,this.m_taskList.length-1);
		}

		private runSomeTasks(start:number,end:number) {
			this.m_curTaskTag = start;
			if(start > end) {
				return;
			}
			else {
				<Function>(this.m_taskList[start][0]).apply(this.m_thisObj , [this.m_taskList[start][1],this]);
			}
		}

		public postCmplEvt():void {
			++this.m_curTaskTag;
			this.runSomeTasks(this.m_curTaskTag , this.m_taskList.length-1);
		}
	}
}