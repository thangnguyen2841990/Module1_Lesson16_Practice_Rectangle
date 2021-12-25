class Rectangle {
    _x;
   _y;
    _heigh;
    _width;
    _color
    constructor(x,y,height,width,color) {
        this._x = x;
        this._y = y;
        this._height = height;
        this._width = width;
        this._color = color;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

}
