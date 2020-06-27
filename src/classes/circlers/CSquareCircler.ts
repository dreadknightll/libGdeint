namespace gdeint {
	export class CSquareCircler implements ICircler {

		private m_circlerRect:CRect;
		private m_itemRect:CRect;
		private m_pullGapHor:number;
		private m_pullGapVer:number;
		private m_pushGapHor:number;
		private m_pushGapVer:number;

		public constructor() {
		}
        public setInpPos(p:CPoint):void {
			this.m_itemRect.m_left = p.m_x;
			this.m_itemRect.m_top = p.m_y;
		}
        public getOutpPos():CPoint {
			var ret:CPoint = new CPoint();
			if(this.m_itemRect.m_left > this.m_circlerRect.m_left+this.m_pullGapHor) {
				ret.m_x = this.m_circlerRect.m_left+this.m_pullGapHor;
			}
			if(this.m_itemRect.m_left+this.m_itemRect.m_width <
				this.m_circlerRect.m_left+this.m_circlerRect.m_width-this.m_pullGapHor) {
				ret.m_x = this.m_circlerRect.m_left+this.m_circlerRect.m_width-this.m_pullGapHor-this.m_itemRect.m_width;
			}
			if(this.m_itemRect.m_top > this.m_circlerRect.m_top + this.m_pullGapHor) {
				ret.m_y = this.m_circlerRect.m_top + this.m_pullGapHor;
			}
			else if(this.m_itemRect.m_top+this.m_itemRect.m_height < this.m_circlerRect.m_top+this.m_circlerRect.m_height-this.m_pullGapVer) {
				ret.m_y = this.m_circlerRect.m_top+this.m_circlerRect.m_height-this.m_pullGapVer-this.m_itemRect.m_height;
			}

			return ret;
		}

		public setCirclerRect(r:CRect) {
			this.m_circlerRect = r;
		}

		public setPullGapHor(pgh:number) {
			this.m_pullGapHor = pgh;
		}
		public setPullGapVer(pgv:number) {
			this.m_pullGapVer = pgv;
		}

		public setPushGapHor(val:number):void {
			this.m_pushGapHor = val;
		}

		public setPushGapVer(val:number):void {
			this.m_pushGapVer = val;
		}

		public setItemRect(r:CRect) {
			this.m_itemRect = r;
		}
	}
}