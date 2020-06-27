

namespace gdeint {

/**
 *
 * 点结构体。描述点。
 *
 */
    export class CPoint {
        public m_x:number;
        public m_y:number;

    	public constructor() {
	    }

        public toNumArr():Array<number> {
            return [this.m_x , this.m_y];
        }
    }
}