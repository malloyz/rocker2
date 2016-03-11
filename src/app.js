
var HelloWorldLayer = cc.Layer.extend({
    _sprite:null,

    ctor:function () {
        this._super();

        var rocker = new Rocker(res.rockerBg_png, res.rockerControl_png, 50, PositionType.FOLLOW, DirectionType.ALL);
        rocker.setSpeed(5);
        rocker.setPosition(100, 100);
        rocker.setDefaultPosition(cc.p(100, 100));
        rocker.setEnable(true);
        rocker.setCallBack(this._onOperateRocker.bind(this));
        this.addChild(rocker);

        this._sprite = new cc.Sprite(res.CloseNormal_png);
        this._sprite.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        this.addChild(this._sprite);

        return true;
    },

    _onOperateRocker: function (rocker) {
        var increment = rocker.getIncrement();
        this._sprite.setPosition(this._sprite.getPositionX() + increment.x, this._sprite.getPositionY() + increment.y);

        var touchType = rocker.getTouchType();
        if (touchType === TouchType.BEGAN) {
            console.log("TouchType.BEGAN")
        } else if (touchType === TouchType.MOVED) {
            console.log("TouchType.MOVED")
        } else if (touchType === TouchType.ENDED) {
            console.log("TouchType.ENDED")
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

