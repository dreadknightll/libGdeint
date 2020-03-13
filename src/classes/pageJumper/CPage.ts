namespace gdeint {
	export class CPage implements IPage{
		public constructor() {
		}

		public showOnFront():void {
			this.onShownOnFront();
		}

		public show():void {
		}

		public hide():void {

		}

		public onShownOnFront():void {
	//		window.alert("super.onPageShow");
		}

		public isVisible():boolean {
			return true;
		}
	}
}