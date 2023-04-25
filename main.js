// Van Trung Create Date 25/04/2023


// Tạo 2 biến $ để gọi lại dễ dàng
var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

// bước 1: Ta sẽ đi lấy tất cả các element của tab-item và tab pane và lưu vào 1 biến
var tabItems = $$('.tab-item');
var tabPaneItems = $$('.tab-pane');

const tabItemsActive = $('.tab-item.active')
const lineItem = $('.tabs .line')
// sau khi lấy line thì chọc vào css gán lại giá trị
lineItem.style.left = tabItemsActive.offsetLeft + 'px';
lineItem.style.width = tabItemsActive.offsetWidth + 'px';

tabItems.forEach((tab, index) => {
    // do tabItems có 5 element và PaneItem cũng có 5 element, nên ta dựa vào index của Tabs tương ứng 
    const panes = tabPaneItems[index]
    // bắt sự kiện click để add active vào cho item
        tab.onclick = function(){
            // trước khi add action active thì phải xóa cái active mặc định đi
            $('.tab-item.active').classList.remove('active')
            // Xóa đi pane cũ khi click sang pane mới
            $('.tab-pane.active').classList.remove('active')
            //click tab chuyển line
            lineItem.style.left = this.offsetLeft + 'px';
            lineItem.style.width = this.offsetWidth + 'px';
            // add action active vào tab mới khi click
            this.classList.add('active')
            // sau khi ta click tab mới thì sẽ đổi pane theo tab tương ứng
            panes.classList.add('active') 
        }
});


