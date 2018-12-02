/*
 *  /src/components/ImgThumbModelV2.ts
 * 
 * 图形与缩略图转换器。用于处理缩略图尺寸计算、原图与缩略图坐标映射等。
 * 注：本类仅用于计算，切勿用于存储数据。
 * 
 * 缩略图尺寸的计算：
 *  缩略图应满足的条件：1、不超出指定的最大宽度和最大高度。 2、宽高比和原图一致。
 *  符合条件的最大尺寸为最终缩略图的尺寸。
 * 
 */
namespace gdeint {

    export class ImgThumbModelV2 {

      private m_thMaxWidth:number;
      private m_thMaxHeight:number;
      private m_imgWidth:number;
      private m_imgHeight:number;
      private m_imgSelRect:gdeint.CRect;

      public constructor() {
            this.m_thMaxWidth = 0;
            this.m_thMaxHeight = 0;
            this.m_imgWidth = 0;
            this.m_imgHeight = 0; 
            this.m_imgSelRect = new gdeint.CRect();
      }
      
      /*
      * 获取原图与缩略图的比例。
      */ 
      public getRat():number
      {
        var rat1 , rat2;
        rat1 = this.m_imgWidth / this.m_thMaxWidth;
        rat2 = this.m_imgHeight / this.m_thMaxHeight;

        return rat1 > rat2 ? rat1:rat2;
        }
        
        /*
        * 设置缩略图区域的最大宽度。缩略图要维持原图的宽高比，同时不能超过此最大宽度。
        */ 
        public setThMaxWidth(thMaxWidth):void
        {
        this.m_thMaxWidth = thMaxWidth;
        }
        
        /*
        * 设置缩略图区域的最大高度。缩略图要维持原图的宽高比，同时不能超过此最大高度。
        */ 
        public setThMaxHeight(thMaxHeight):void
        {
        this.m_thMaxHeight = thMaxHeight;
        }
        
        /*
        * 计算并获取缩略图宽度。
        */ 
        public getThWidth():number
        {
        return this.m_imgWidth / this.getRat();

        }
        
        /*
        * 计算并获取缩略图高度。
        */ 
        public getThHeight():number
        {
        return this.m_imgHeight / this.getRat();
        }
        
        /*
        * 获取缩略图选区。
        */ 
        public getThSelRect():gdeint.CRect
        {
        var retRect = new gdeint.CRect();
        retRect.m_left = this.m_imgSelRect.m_left / this.getRat();
        retRect.m_top = this.m_imgSelRect.m_top / this.getRat();
        retRect.m_width = this.m_imgSelRect.m_width / this.getRat();
        retRect.m_height = this.m_imgSelRect.m_height / this.getRat();

        return retRect;
        }
        
        /*
        * 设置原图宽度。
        */ 
        public setImgWidth(imgWidth):void
        {
        this.m_imgWidth = imgWidth;
        }
        
        /*
        * 设置原图高度。
        */ 
        public setImgHeight(imgHeight):void
        {
        this.m_imgHeight = imgHeight;
        }

        public getImgSelRect():gdeint.CRect
        {
            return this.m_imgSelRect;
        }

        /*
        * 设置原图选取。
        */ 
        public setImgSelRect(imgSelRect):void
        {
        this.m_imgSelRect = imgSelRect;
        }

        /*
        * 获取原图上某点对应缩略图上的点。
        */ 
        public ip2Tp(ip):gdeint.CPoint
        {
        var ret = new gdeint.CPoint();
        ret.m_x = ip.m_x / this.getRat();
        ret.m_y = ip.m_y / this.getRat();

        return ret;
        }

        /*
        * 获取缩略图上某点对应原图上的点。
        */ 
        public tp2Ip(tp):gdeint.CPoint
        {
            var ret = new gdeint.CPoint();

            ret.m_x = tp.m_x / this.getThWidth() * this.m_imgWidth;
            ret.m_y = tp.m_y / this.getThHeight() * this.m_imgHeight;

            return ret;
        }
    }
}