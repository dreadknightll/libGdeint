namespace gdeint {
	export class CSquareCircler implements ICircler {

		private m_circlerRect:CRect;
		private m_itemRect:CRect;
		private m_pullGapHor:number=0;
		private m_pullGapVer:number=0;
		private m_pushGapHor:number=0;
		private m_pushGapVer:number=0;

		public constructor() {
		}

        public setInpPos(p:CPoint):void {
			this.m_itemRect.m_left = p.m_x;
			this.m_itemRect.m_top = p.m_y;
		}

        public getOutpPos():CPoint {
			var ret:CPoint = new CPoint();
			if(this.m_itemRect.m_width > this.m_circlerRect.m_width) {
				if(this.m_itemRect.m_left > this.m_circlerRect.m_left+this.m_pullGapHor) {
					ret.m_x = this.m_circlerRect.m_left+this.m_pullGapHor;
				}
				else if(this.m_itemRect.m_left+this.m_itemRect.m_width <
					this.m_circlerRect.m_left+this.m_circlerRect.m_width-this.m_pullGapHor) {
					ret.m_x = this.m_circlerRect.m_left+this.m_circlerRect.m_width-this.m_pullGapHor-this.m_itemRect.m_width;
				}
				else {
					ret.m_x = this.m_itemRect.m_left;
				}
			}
			else {
				if(this.m_itemRect.m_left < this.m_circlerRect.m_left-this.m_pushGapHor) {
					ret.m_x = this.m_circlerRect.m_left-this.m_pushGapHor;
				}
				else if(this.m_itemRect.m_left+this.m_itemRect.m_width > 
					this.m_circlerRect.m_left+this.m_circlerRect.m_width+this.m_pushGapHor) {
					ret.m_x = this.m_circlerRect.m_left+this.m_circlerRect.m_width+this.m_pushGapHor-this.m_itemRect.m_width;
				}
				else {
					ret.m_x = this.m_itemRect.m_left;
				}
			}
			if(this.m_itemRect.m_height > this.m_circlerRect.m_height) {
				if(this.m_itemRect.m_top > this.m_circlerRect.m_top + this.m_pullGapVer) {
					ret.m_y = this.m_circlerRect.m_top + this.m_pullGapVer;
				}
				else if(this.m_itemRect.m_top+this.m_itemRect.m_height <
					this.m_circlerRect.m_top+this.m_circlerRect.m_height-this.m_pullGapVer) {
					ret.m_y = this.m_circlerRect.m_top+this.m_circlerRect.m_height-this.m_pullGapVer-this.m_itemRect.m_height;
				}
				else {
					ret.m_y = this.m_itemRect.m_top;
				}
			}
			else {
				if(this.m_itemRect.m_top < this.m_circlerRect.m_top-this.m_pushGapVer) {
					ret.m_y = this.m_circlerRect.m_top-this.m_pushGapVer;
				}
				else if(this.m_itemRect.m_top+this.m_itemRect.m_height > this.m_circlerRect.m_top+this.m_circlerRect.m_height+this.m_pushGapVer) {
					ret.m_y = this.m_circlerRect.m_top+this.m_circlerRect.m_height+this.m_pushGapVer-this.m_itemRect.m_height;
				}
				else {
					ret.m_y = this.m_itemRect.m_top;
				}
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