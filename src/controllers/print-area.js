// Get the pixel value per millimeter
export function getOneMmsPx () {
    let div = document.createElement("div");
    div.style.width = "1mm";
    document.querySelector("body").appendChild(div);
    let mm1 = div.getBoundingClientRect();
    let w = mm1.width;
    $(div).remove();
    return mm1.width;
}

/**
 * 获取纸张大小(mm)
 * @param {*} type 纸张类型
 * @param {*} direction 方向
 * @param {*} margins 页边距
 * @returns 
 */
export function getPaperSize (type, direction, margins = {}) {
    const mspx = getOneMmsPx();
    const paper = {
        'B5': {
            w: 130,
            h: 185
        },
        'B4': {
            w: 185,
            h: 260
        },
        'B3': {
            w: 260,
            h: 370
        },
        'B2': {
            w: 370,
            h: 520
        },
        'B1': {
            w: 520,
            h: 740
        },
        'A6': {
            w: 105,
            h: 148
        },
        'A5': {
            w: 148,
            h: 210
        },
        'A4': {
            w: 210,
            h: 297
        },
        'A3': {
            w: 297,
            h: 420
        },
        'A2': {
            w: 420,
            h: 597
        },
        'A1': {
            w: 597,
            h: 840
        }
    };

    let obj = {
        attr: paper[type],
        mspx,
        width: 0,
        height: 0,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    };
    //横向
    if (direction == 1) {
        obj.width = paper[type].h * mspx;
        obj.height = paper[type].w * mspx;
    } else {
        obj.width = paper[type].w * mspx;
        obj.height = paper[type].h * mspx;
    }

    const { left, top, right, bottom } = margins;
    if (left) {
        obj.left = left * mspx;
        obj.width = obj.width - obj.left + 74;
    };
    if (right) {
        obj.right = right * mspx;
        obj.width = obj.width - obj.right + 74;
    }
    if (top) {
        obj.top = top * mspx;
        obj.height = obj.height - obj.top - 90;
    }

    if (bottom) {
        obj.bottom = bottom * mspx;
        obj.height = obj.height - obj.bottom - 90;
    }
    return obj
}