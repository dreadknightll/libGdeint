namespace gdeint {
    export interface IRectRenderFilter extends IRenderFilter {
        rectOConv(rect:gdeint.CRect):gdeint.CRect;
        rectIConv(rect: gdeint.CRect):gdeint.CRect;
    }
}
