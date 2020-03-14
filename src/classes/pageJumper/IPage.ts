// 可自定义类实现本接口，以实现页面跳转时触发事件等功能。
namespace gdeint {
    export interface IPage extends IHidable {
        showOnFront():void;
        onShownOnFront():void;
    }
}