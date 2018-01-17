$(function() {
  $(document).on('pageInit', function() {
    $('#picker').picker({
      toolbarTemplate: '<header class="bar bar-nav">'+
      '<button class="button button-link pull-right close-picker">确定</button>'+
      '<h1 class="title">请选择你的手机</h1>'+
      '</header>',
      cols: [
        {
          textAlign: 'center',
          values: ['iPhone 6', 'iPhone 6S', 'iPhone 7', 'iPhone 8', 'iPhone X']
        }
      ]
    });
    $('#picker-name').picker({
      toolbarTemplate: '<header class="bar bar-nav">'+
      '<button class="button button-link pull-right close-picker">确定</button>'+
      '<h1 class="title">请选择称呼</h1>'+
      '</header>',
      cols: [
        {
          textAlign: 'center',
          values: ['赵', '钱', '孙', '李', '周', '吴', '郑', '王']
        },
        {
          textAlign: 'center',
          values: ['杰伦', '磊', '明', '小鹏', '燕姿', '菲菲', 'Baby']
        },
        {
          textAlign: 'center',
          values: ['先生', '小姐']
        }
      ]
    });
    $('#datetime-picker').datetimePicker({
     // value: ['2018', '01', '10', '15', '29']
    });
    $('#city-picker').cityPicker({
      toolbarTemplate: '<header class="bar bar-nav">'+
      '<button class="button button-link pull-right close-picker">确定</button>'+
      '<h1 class="title">选择收货地址</h1>'+
      '</header>'
    });
  });
  $.init();
});