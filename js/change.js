var cot = 0;//設置一個計數器，初始值為0；作用是用來監聽點擊切換的時候哪一個圖片應該隱藏或者顯示
    function nex() {
        if (cot <= 3) {
            $('.imgs img').eq(cot).animate({ 'margin-left': '-89px' }, 100);
            cot++;
        }
    }
    function pre() {
        if (cot > 0) {
            cot--;
            $('.imgs img').eq(cot).animate({ 'margin-left': '0px' }, 100);
        }
    }