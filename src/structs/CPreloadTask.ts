/**
 *
 * @author 
 *
 */
namespace gdeint {

    export class ResStruct {
        public m_resName:string;
        public m_givenSize:number;
    };

    export class CPreloadTask {
        public m_taskName:string;
        public m_resList:Array<ResStruct>;
        public m_proportion:number;
    };
}